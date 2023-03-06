// const arr = [23, 1, 23, 543, 6, 2613, 546, 6];

// let ans = arr.sort((a, b) => a - b);
// ans

// bubble sort
// for (let i = 0; i < arr.length; i++) {
//   for (let j = i+1; j < arr.length; j++) {
//     if (arr[i] > arr[j]) {
//       [arr[i], arr[j]] = [arr[j], arr[i]];
//     }
//   }
// }

// console.log(arr);

// selection sort

// for (let i = 0; i < arr.length; i++) {
//   let min = i;
//   for (let j = i + 1; j < arr.length; j++) {
//     if (arr[j] < arr[i]) {
//       min = j;
//     }
//   }
//   [arr[i], arr[min]] = [arr[min], arr[i]];
// }

// const arr = [12, 43, 13, 19, 4, 14];
// console.log(arr.length - 1);
// for (let i = 0; i < arr.length ; i++) {
//   let lowest = i;
//   for (let j = i + 1; j < arr.length; j++) {
//     if (arr[lowest] > arr[j]) lowest = j;
//   }
//   [arr[lowest], arr[i]] = [arr[i], arr[lowest]];
// }

// arr;

// insertion sort
// const arr = [12, 43, 13, 12, 19, 4, 14];

// function insertionSort(arr) {
//   for (let i = 1; i < arr.length; i++) {
//     let j = i;
//     while (j > 0) {
//       if (arr[j - 1] > arr[j]) {
//         [arr[j - 1], arr[j]] = [arr[j], arr[j - 1]];
//       }
//       j--;
//     }
//   }
// }

// insertionSort(arr);
// arr