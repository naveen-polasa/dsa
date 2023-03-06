// function search(arr,val) {
//     for(let i in arr) {
//         if(arr[i] === val) return i
//     }
//     return -1
// }

// const ans = search([12,4,12,41,2],2)
// ans

// const bSearch = (arr, val) => {
//   st = 0;
//   en = arr.length - 1;
//   while (st <= en) {
//     const mid = Math.floor(st + (en - st) / 2);
//     if (val > arr[mid]) {
//       st = mid + 1;
//     } else if (val < arr[mid]) {
//       en = mid - 1;
//     } else return mid;
//   }
//   return -1
// };
// const ans = bSearch([2, 3, 5, 31, 123, 343, 535], 2);
// ans;


