/*
 * [853] 车队
 * https://leetcode.cn/problems/car-fleet/
 */

function carFleet(target: number, position: number[], speed: number[]): number {
  const cars = position
    .map((site, index) => ({
      site,
      time: (target - site) / speed[index],
    }))
    .sort((a, b) => b.site - a.site);
  const stack: number[] = [];

  for (let i = 0; i < cars.length; i++) {
    if (stack.length === 0 || stack[stack.length - 1] < cars[i].time) {
      stack.push(cars[i].time);
    }
  }

  return stack.length;
}

/**
 * 排序
 */

export {};
