function q1RemoverDuplicados(nums) {
    // const newUniqueArray = new Set(nums); Jeito mais fácil de fazer utilizando ES2015
    var newUniqueArray = [];
    for (var i = 0; i < nums.length; i++) {
        if (newUniqueArray.indexOf(nums[i]) === -1) {
            newUniqueArray.push(nums[i]);
        }
    }
    return newUniqueArray;
}
console.log(q1RemoverDuplicados([1, 2, 2, 3, 4, 4, 5]));
