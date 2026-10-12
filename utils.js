// 1
export function productInfo(Ten_SP, Tien) {
    return `Sản phẩm: ${Ten_SP}, Giá: ${Tien} VND` 
};
// 2
export function greet(name) {
    return `Xin chào: ${name}`
};
// 3
export function sumUpto(n) {
    let total = 0
    for (let i = 0; i <= n; i++){
        total += i
    }
    return total
};
// 4
export const square = (n1) => {
    return n1 * n1
};
// 5
export const isEven = (n2) => {
    if (n2 % 2 == 0) {
        return `${n2} is even number`
    }
    else {
        return `${n2} is odd number`
    }
};
// 6
export const getFirstElement = (arr) => {
  if (!Array.isArray(arr) || arr.length === 0) return undefined;
  
  return arr[0];
};

// 7
export const sum = (a, b, c, d) => {
    return a + b + c + d
};

// 10 
export const stringLength = (string) => {
    return string.length
};
// 11
export const toUpperCase1 = (str1) => {
    return str1.toUpperCase()
};
// 12 
export function formateCurrency(number) {
    if (typeof num !== 'number' || isNaN(number)) return '0';
    return number.toLocaleString() + `VND`
};
// 13
export const max = (arr) => {
    if (!Array.isArray(arr) || arr.length === 0) return undefined;
    return Math.max(...arr)
};
// 14
export function isPrime(num) {
    if (num % 2 == 0  ) {
        return false;
    }
    if (num == 3 || num == 2) {
        return true;
    }
    for (let i = 3; i <= Math.sqrt(num); i++){
        if (num % i == 0)
        return false;
    }
    return true;
};
// 15
export const repeatString = (str2, num2) => {
    for (let i = 0; i <= num2; i++){
        str2.repeat()
    }
}
//16
export const sumOdd = (arr2)  => {
    if (!Array.isArray(arr2) || arr2.length === 0) return undefined;
    let total = 0
    for (let i = 0; i < arr2.length; i++){
        if (arr2[i] % 2 == 1) {
            total += arr2[i];
        }
    return total
    }
}
// 17
export function sumGreaterThan(arr3,num4) {
    if (!Array.isArray(arr3) || arr3.length === 0) return undefined;
    let total = 0
    for (let i = 0; i < arr3.length; i++) {
        if (arr3[i] > num4) {
            total += arr3[i];
        }
    }
    return total
    
}
// 18
export const formDate = (dateStr) => {
    const [year, month, day] = dateStr.split('-');
    return `${day}/${month}/${year}`
};
// 19
export const firstThree = (arr6) => {
    if (!Array.isArray(arr6) || arr6.length === 0) return undefined;
    const ds_soDau = [];
    for (let i = 0; i <= 3; i++){
            ds_soDau.push(arr6[i]);
    }
    return ds_soDau
}

// 20
export const containsChar = (str, char) => str.includes(char)
// 21
export const mergeArrays = (array1, array2) => {
    if (!Array.isArray(array1) || array1.length === 0) return undefined;
    if (!Array.isArray(array2) || array2.length === 0) return undefined;
    const mangGop = array1.concat(array2);
    return mangGop
}
// 22
export function countOccurences(arr67, num67) {
    let count = 0
    for (let i = 0; i < arr67.length; i++){
        if (arr67[i] == num67) {
            count += 1;
        }
    }
    return count
}


// 23
export const filterOdd = (arr5) => {
    if (!Array.isArray(arr5) || arr5.length === 0) return undefined;
    const ds_soLe = [];
    for (let i = 0; i < arr5.length; i++){
        if (arr5[i] % 2 == 1) {
            ds_soLe.push(arr5[i]);
        }
    }
    return ds_soLe
}
// 24
export function greaterThan(arr3,num4) {
    if (!Array.isArray(arr3) || arr3.length === 0) return undefined;
    const ds_solon = [];
    for (let i = 0; i < arr3.length; i++) {
        if (arr3[i] > num4) {
            ds_solon.push(arr3[i]);
        }
    }
    return ds_solon
    
}
// 25
export const factorial = (n) => {
    let result = 1;
    for (let i = 2; i <= n; i++) {
        result *= i
    }
    return result
};
// 26
export const separateEvenOdd = (arr) => {
  if (!Array.isArray(arr)) return { even: [], odd: [] };

  const even = [];
  const odd = [];
  for (const num of arr) {
    if (num % 2 === 0) {
      even.push(num); 
    } else {
      odd.push(num); 
    }
  }
  return { even, odd };
};

console.log(separateEvenOdd([1, 2, 3, 4])); 
// Kết quả: { even:, odd: [1, 3] }


// 27
export const sortAsc = (arr) => {
    if (!Array.isArray(arr)) return [];
    return [...arr].sort((a, b) => a - b);
};
// 28
export const sumEvenIndex = (arr) => {
  if (!Array.isArray(arr) || arr.length === 0) return 0;
  let sum = 0;
  for (let i = 0; i < arr.length; i += 2) {
    sum += arr[i];
  }
  return sum;
};

// 29
export const multiplyByTwo = (arr) => {
  if (!Array.isArray(arr)) return [];
  return arr.map(num => num * 2);
};
// 30
export const arrayToString = (arr) => {
  if (!Array.isArray(arr)) return "";
  return arr.join('');
};






