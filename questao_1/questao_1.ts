function q1RemoverDuplicados(nums: number[]) {
  // const newUniqueArray = new Set(nums); Jeito mais fácil de fazer utilizando ES2015
  const newUniqueArray: number[] = [];
  for (let i = 0; i < nums.length; i++) {
    if (newUniqueArray.indexOf(nums[i]) === -1) {
      newUniqueArray.push(nums[i]);
    }
  }
  return newUniqueArray;
}

console.log(q1RemoverDuplicados([1, 2, 2, 3, 4, 4, 5]));