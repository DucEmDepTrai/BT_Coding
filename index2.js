import {
    sumByGroup,
    uniqueValues,
    isPermutation,
    findLongestString,
    intersection,
    filterByMinValue,
    findLongestValue,
    groupByFirstLetter,
    getAdults,
    convertToArray,
    sortStringsByLength,
    sumByKey,
    countWords,
    findMinKey,
    findMaxKey,
    mergeObjectsSumValues,
    groupByType,
    sumArray,
    countOcurrences,
    removeDuplicates,
    findSecondLargest,
    sortProductsByPrice,
    findMostExpensiveProduct
} from "./ultil2.js";

console.log(sumArray([1, 2, 3, 4, 5]));
console.log(countOcurrences([1, 2, 2, 3, 2], 2));
console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 6, 2, 3, 6]));
console.log(findSecondLargest([3, 1, 4, 2, 4]));
console.log(sortProductsByPrice([
    { name: 'Product A', price: 30 },
    { name: 'Product B', price: 20 },
    { name: 'Product C', price: 50 },
]));
console.log(findMostExpensiveProduct([
    { name: 'Product A', price: 30 },
    { name: 'Product B', price: 20 },
    { name: 'Product C', price: 50 }
]));
console.log(groupByType([
    { type: 'fruit', name: 'apple' },
    { type: 'vegetable', name: 'carrot' },
    { type: 'fruit', name: 'banana' }
]));
console.log(mergeObjectsSumValues({ a: 10, b: 20 }, { b: 30, c: 40 }));
console.log(sumByGroup([{ type: 'fruit', price: 10 }, { type: 'vegetable', price: 20 }, { type: 'fruit', price: 30 }], 'type'));
console.log(uniqueValues([1, 2, 3], [3, 4, 5]));
console.log(isPermutation([1, 2, 3], [3, 2, 1]));
console.log(findLongestString(['abc', 'abcd', 'a']));
console.log(intersection([1, 2, 3], [2, 3, 4]));
console.log(filterByMinValue([5, 10, 15, 20], 12));
console.log(findLongestValue({ a: 'cat', b: 'elephant', c: 'dog' }));
console.log(groupByFirstLetter(['apple', 'banana', 'avocado', 'blueberry']));
console.log(getAdults([{ name: 'Alice', age: 17 }, { name: 'Bob', age: 20 }]));
console.log(convertToArray({ a: 1, b: 2, c: 3 }));
console.log(sortStringsByLength(['a', 'ccc', 'bb']));
console.log(sumByKey([{ price: 10 }, { price: 20 }, { price: 30 }], 'price'));
console.log(countWords("Hello world! Welcome to JS"));




