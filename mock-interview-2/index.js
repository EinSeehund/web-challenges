const nums = [11, 2, 15, 7];
const target = 9;

function twoSum(nums, target) {
    // TODO: return indices of the two numbers that add up to target
    // for (let i = 0; i < nums.length; i++) {
    //     for (let j = i + 1; j < nums.length; j++) {
    //         if (nums[i] + nums[j] === target) {
    //             return [i, j];
    //         }
    //     }
    // }
    let pointerA = 0;
    let pointerB = 1;

    while (nums[pointerA] + nums[pointerB] !== target) {
        if (pointerB < nums.length) {
            pointerB++;
        } else {
            pointerA++;
            pointerB = pointerA + 1;
        }
    }

    return [pointerA, pointerB];
}

console.log(twoSum(nums, target)); // => [1, 3]
