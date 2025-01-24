/**
 * 环形数组
 * 关键在于求模运算 %，也就是求余数。
 * 当 i 到达数组末尾元素时，i + 1 和 arr.length 取余数又会变成 0，即会回到数组头部，这样就在逻辑上形成了一个环形数组，永远遍历不完。
 */

function CircleArray(arr) {
  var arr = [1, 2, 3, 4, 5];
  var index = 0;
  while (index <= arr.length) {
    console.log(arr[index]);
    index = (index + 1) % arr.length;
    console.log(arr[index]);
  }
}
