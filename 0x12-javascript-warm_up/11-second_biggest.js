#!/usr/bin/node

const args = process.argv;
if (args.length <= 3) {
  console.log(0);
} else {
  const nums = args.slice(2).map((num) => parseInt(num)).sort();
  let secondLargest = nums[0];
  let largest = nums[0];
  nums.forEach((value, index) => {
    if (value > largest) {
      secondLargest = largest;
      largest = value;
    }
  });
  console.log(secondLargest);
}
