#!/usr/bin/node

const args = process.argv;
if (args.length <= 3) {
  console.log(0);
} else {
  const nums = args.slice(2).map((num) => parseInt(num)).sort();
  console.log(nums[nums.length - 2]);
}
