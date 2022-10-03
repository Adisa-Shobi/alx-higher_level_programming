#!/usr/bin/node

const args = process.argv;
if (args.length <= 3) {
  console.log(0);
} else {
    const nums = args.slice(2).map((num) => parseInt(num)).sort();
    let second_largest = nums[0];
    let largest = nums[0];
    nums.forEach((value, index) => {
	if (value > largest) {
	    second_largest = largest;
	    largest = value;
	}
    });
    console.log(second_largest);
}
