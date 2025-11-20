/*
 * [1700] 无法吃午餐的学生数量
 * https://leetcode.cn/problems/number-of-students-unable-to-eat-lunch/description/
 */

function countStudents(students: number[], sandwiches: number[]): number {
  const studentsCount = [0, 0];
  for (let stu of students) {
    studentsCount[stu]++;
  }

  for (let i = 0; i < sandwiches.length; i++) {
    const sandwich = sandwiches[i];
    if (studentsCount[sandwich] > 0) {
      studentsCount[sandwich]--;
    } else {
      return studentsCount[0] + studentsCount[1];
    }
  }

  return 0;
}

/**
 *
 */

export {};
