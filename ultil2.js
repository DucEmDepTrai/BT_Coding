export function sumArray(arr) {
    let sum = 0;
    for (const num of arr) {
        sum += num;
    }
    return sum
}
export function countOcurrences(arr, value) {
    let count = 0
    for (let i = 0; i <= arr.length; i++){
        if (arr[i] == value) {
            count +=1
        }
    }
    return count
}
export function removeDuplicates(arr) {
    const uniqueArray = [...new Set(arr)];
    return uniqueArray
}
export function flattenArray(arr) {
    const mang1D = arr.flat()
    return mang1D
}
export function isSymmetric(arr) {
    for (let i = 0; i < arr.length / 2; i++){
        if (arr[i] !== arr[len - 1 - i]) {
            return true;
        }
        else {
            return false;
        }
    }
}
export function findSecondLargest(arr) {
    const uniqueArray = [...new Set(arr)];
    uniqueArray.sort((a, b) => b - a);
    return uniqueArray[1];
}
export function sortProductsByPrice(products) {
    const newArr = products.sort((a, b) => a.price - b.price);
    return newArr
}
export function findMostExpensiveProduct(products) {
    const newArr = products.sort((a, b) => b.price - a.price)
    return newArr[0]
}
export const groupByType = (arr) => {
    const grouped = Object.groupBy(arr, (arr) => arr.type)
    return grouped
}   
export const isSubset = (arr1, arr2) => {
    return arr2.every(element => arr1.includes(element));
}
export const findMaxKey = (obj) => {
    return Object.keys(obj).reduce((max, key) => obj[key] > obj[max] ? key : max);
}
export function mergeObjectsSumValues(obj1, obj2) {
  const result = { ...obj1 };

  for (const key in obj2) {
    if (result.hasOwnProperty(key)) {
      result[key] += obj2[key];
    } else {
      result[key] = obj2[key];
    }
  }

  return result;
}
export const cleanObject = (obj) => {
for (const key in obj) {
  if (obj.hasOwnProperty(key)) {
    const value = obj[key];
    if (value !== null && value !== undefined) {
      console.log(`Key: ${key}, Value: ${value}`);
    }
  }
}
}
export function hasDuplicate(arr, value) {
    let count = 0
    for (let i = 0; i <= arr.length; i++){
        if (arr[i] == value) {
            count +=1
        }
    }
    if (count > 2) {
        return true
    }
    else {
        return false
    }
}
export const sumByGroup = (arr, key) => 
  arr.reduce((acc, item) => ((acc[item[key]] = (acc[item[key]] || 0) + item.price), acc), {});
export const uniqueValues = (arr1, arr2) => [...new Set([...arr1, ...arr2])];
export const isPermutation = (arr1, arr2) => 
  arr1.length === arr2.length && [...arr1].sort().every((v, i) => v === [...arr2].sort()[i]);
export const findLongestString = (arr) => 
  arr.reduce((max, str) => str.length > max.length ? str : max, '');
export const intersection = (arr1, arr2) => arr1.filter(item => arr2.includes(item));
export const filterByMinValue = (arr, minValue) => arr.filter(item => item >= minValue);
export const findLongestValue = (obj) => 
  Object.values(obj).reduce((max, val) => (typeof val === 'string' && val.length > max.length ? val : max), '');
export const groupByFirstLetter = (arr) => 
  arr.reduce((acc, str) => {
    const l = str[0].toLowerCase();
    (acc[l] = acc[l] || []).push(str);
    return acc;
  }, {});
export const getAdults = (people) => people.filter(p => p.age >= 18);
export const convertToArray = (obj) => Object.entries(obj);
export const sortStringsByLength = (arr) => [...arr].sort((a, b) => a.length - b.length);
export const sumByKey = (arr, key) => arr.reduce((sum, item) => sum + (item[key] || 0), 0);
export const countWords = (str) => str.trim() ? str.trim().split(/\s+/).length : 0;
export const findMinKey = (obj) => 
  Object.keys(obj).reduce((minKey, key) => obj[key] < obj[minKey] ? key : minKey);