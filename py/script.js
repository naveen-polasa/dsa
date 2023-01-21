// var d = 13
// let d = 23
// if(true){
//   var a = 3;
//   let b = 23;
//   const c = 235;
//   console.log(a);
// }

// var twoSum1 = function (nums, target) {
//   let mp = new Map();
//   for (let i = 0; i < nums.length; i++) {
//     let diff = target - nums[i]
//     if(mp[diff] !== undefined) {
//         return [mp[diff], i]
//     }
//     mp[nums[i]] = i
//   }
// };

// console.log(twoSum1((nums = [2, 7, 11, 15]), (target = 9)));

// linear search

// function linearSearch(arr, target) {
//     for(let i=0; i<arr.length; i++) {
//         if(arr[i] === target) {
//             return i
//         }
//     }
//     return -1
// }

// console.log(linearSearch([2,3,52,3,62,22],22))

// binary search

// function binarySearch(arr, target) {
//     let st = 0
//     let en = arr.length-1
//     console.log(en)
//     while(st<=en) {
//         let mid = Math.floor((st + en)/2)
//         console.log(mid)
//         if(target === arr[mid]) {
//             return mid
//         }
//         if(target < arr[mid]) {
//             en = mid - 1
//         } else {
//             st = mid + 1
//         }
//     }
//     return -1
// }

// console.log(binarySearch([2,3,12,42,52,62],62))

// var longestCommonPrefix = function (strs) {
//   let ans = strs[0]

//   for (let i = 1; i < strs.length; i++) {
//     for (let j = ans.length-1; j>=0; j--) {
//         if(ans[j] !== strs[i][j]) {
//             ans = ans.slice(0,j)
//         }
//     }
//   }
//   return ans
// };

// console.log(longestCommonPrefix(["flower", "flow", "flight"]));

// var groupAnagrams = function (strs) {
//     if(strs.length == 2) {
//         return strs
//     }
//   let mp = {};
//   let ans = []
//   for (let ar of strs) {
//     let arr = new Array(26).fill(0);
//     for (let i = 0; i < ar.length; i++) {
//       arr[ar.charCodeAt(i)-'a'.charCodeAt()]++
//     }
//     arr = arr.map(item => `#${item}`).join('')
//     if(mp[arr]) {
//         mp[arr] = [...mp[arr],ar]
//     } else{
//         mp[arr] = [ar]
//     }
//   }
//  for (let s in mp) {
//     ans.push(mp[s])
//  }
//  return ans
// };

// const mpp = groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]);
// console.log(groupAnagrams(["bdddddddddd", "bbbbbbbbbbc"]));
// console.log(groupAnagrams([""]));

// console.log(mpp)

// var generate = function (numRows) {
//   let arr = [1];
//   let ans = [];
//   ans.push(arr);
//   for (let i = 1; i < numRows; i++) {
//     let lastAr = ans[ans.length-1]
//     let tempArr = [];
//     for (let j = 0; j <= i; j++) {
//       if (j == 0 || j == i) {
//         tempArr.push(1);
//       } else {
//         tempArr.push(lastAr[j-1]+lastAr[j]);
//       }
//     }
//     ans.push(tempArr);
//   }
//   return ans;
// };

// console.log(generate(5));

// const arr = [-3,0,23,44,2,1,5]

// class Node {
//   constructor(value) {
//     this.value = value;
//     this.next = null;
//   }
// }

// class LinkedList {
//   constructor(value) {
//     const newNode = new Node(value);
//     this.head = newNode;
//     this.tail = this.head;
//     this.length = 1;
//   }
//   push(value) {
//     const newNode = new Node(value);
//     if (!this.head) {
//       this.head = newNode;
//       this.tail = newNode;
//     } else {
//       this.tail.next = newNode;
//     }
//     this.length++;
//     return this;
//   }
//   pop() {
//     if (!this.head) return undefined;
//     let temp = this.head;
//     let prev = this.head;
//     while (temp.next) {
//       prev = temp;
//       temp = temp.next;
//     }
//     this.tail = prev;
//     this.tail.next = null;
//     this.length--;
//     if (this.length === 0) {
//       this.head = null;
//       this.tail = null;
//     }
//     return temp;
//   }
//   unshift(value) {
//     const newNode = new Node(value);
//     if (!this.head) {
//       this.head = newNode;
//       this.tail = newNode;
//     } else {
//       newNode.next = this.head;
//       this.head = newNode;
//     }
//     this.length++;
//   }
//   shift() {
//     if (!this.head) return undefined;
//     let temp = this.head;
//     this.head = this.head.next;
//     temp.next = null;
//     this.length--;
//     if (this.length === 0) {
//       this.tail = null;
//     }
//     return temp;
//   }
//   get(index) {
//     if (index < 0 || index >= this.length) return undefined;
//     let temp = this.head;
//     for (let i = 0; i < index; i++) {
//       temp = temp.next;
//     }
//     return temp;
//   }
//   set(index, value) {
//     let temp = this.get(index);
//     if (temp) {
//       temp.value = value;
//       return true;
//     }
//     return false;
//   }
//   insert(index, value) {

//   }
// }

// const n1 = new LinkedList(2);
// n1.push(23);
// n1.unshift(84);
// // n1.shift()

// const st = new Set(arr)
// console.log(st)

// const obj = {
//     name: 'naveen',
//     age: 23
// }

// console.log(Object.entries(obj))

// const set = new Set([2, 2, 352, 3, 25]);
// set.add(32);
// console.log(set.has(32));
// set.delete(2)
// console.log(set.size)
// for (const item of set) {
//   console.log(item);
// }

// const obj = {
//     name: 'naveen',
//     age: 23
// }

// console.log(obj)

// const mp = new Map()
// mp.set('name','naveen')
// mp.set('age','23')
// console.log(mp.has('age'))
// mp.delete('age')
// console.log(mp)

// class Stack {
//     constructor() {
//         this.items = []
//     }
//     push(ele) {
//         this.items.push(ele)
//     }
//     pop() {
//         return this.items.pop()
//     }
//     peek() {
//         return this.items[this.items.length - 1]
//     }
//     isEmpty() {
//         return this.items.length === 0
//     }
//     size() {
//         return this.items.length
//     }
//     print() {
//         console.log(this.items.toString())
//     }
// }

// const st = new Stack()

// console.log(st.isEmpty())

// st.push(12)
// st.push(32)
// st.push(24)
// st.push(53)
// st.print();
// console.log(st.pop());
// console.log(st.peek());

// class Queue {
//     constructor() {
//         this.items = []
//     }
//     enqueue(ele) {
//         this.items.push(ele)
//     }
//     dequeue() {
//         return this.items.shift()
//     }
//     isEmpty() {
//         return this.items.length === 0
//     }
//     peek() {
//         if(!this.isEmpty()) {
//             return this.items[0]
//         }
//         return null
//     }
//     size() {
//         return this.items.length
//     }
//     print() {
//         console.log(this.items.toString())
//     }
// }

// const que = new Queue()
// console.log(que.isEmpty())
// que.enqueue(21)
// que.enqueue(53)
// que.enqueue(635)
// console.log(que.size());
// que.print()
// console.log(que.dequeue())
// console.log(que.dequeue())
// console.log(que.peek())

// class Queue {
//     constructor() {
//         this.items = {}
//         this.rear = 0
//         this.front  = 0
//     }
//     enqueue(ele) {
//         this.items[this.rear] = ele
//         this.rear++
//     }
//     dequeue() {
//         const item = this.items[this.front]
//         delete this.items[this.front]
//         this.front++
//         return item
//     }
//     isEmpty() {
//         return this.rear - this.front === 0
//     }
//     peek() {
//         return this.items[this.front]
//     }
//     size() {
//         return this.rear - this.front
//     }
//     print() {
//         console.log(this.items)
//     }
// }

// const que = new Queue()
// console.log(que.isEmpty())
// que.enqueue(23)
// que.enqueue(13)
// que.enqueue(423)
// que.print()
// console.log(que.dequeue())
// console.log(que.peek())

// class CircularQueue {
//   constructor(capacity) {
//     this.items = new Array(capacity);
//     this.capacity = capacity;
//     this.currentLength = 0;
//     this.rear = -1;
//     this.front = -1;
//   }
//   isFull() {
//     return this.currentLength === this.capacity;
//   }
//   isEmpty() {
//     return this.currentLength === 0;
//   }
//   enqueue(ele) {
//     if (!this.isFull()) {
//       this.rear = (this.rear + 1) % this.capacity;
//       this.items[this.rear] = ele;
//       this.currentLength++;
//       if (this.front === -1) {
//         this.front = this.rear;
//       }
//     }
//   }
//   dequeue() {
//     if (this.isEmpty()) {
//       return null;
//     }
//     const item = this.items[this.front];
//     this.items[this.front] = null;
//     this.front = (this.front + 1) % this.capacity;
//     this.currentLength--;
//     if (this.isEmpty()) {
//       this.front = -1;
//       this.rear = -1;
//     }
//     return item;
//   }
//   peek() {
//     if (!this.isEmpty()) {
//       return this.items[this.front];
//     }
//     return null;
//   }
//   print() {
//     if (this.isEmpty()) {
//       console.log("Queue is empty");
//     } else {
//       let i;
//       let str = "";
//       for (i = this.front; i !== this.rear; i = (i + 1) % this.capacity) {
//         str += this.items[i] + " ";
//       }
//       str += this.items[i];
//       console.log(str);
//     }
//   }
// }

// const que = new CircularQueue(5)
// console.log(que.isEmpty())

// que.enqueue(12)
// que.enqueue(32)
// que.enqueue(22)
// que.enqueue(52)
// que.enqueue(62)
// console.log(que.isFull())
// que.print()
// console.log(que.dequeue())
// console.log(que.peek())
// que.print()

// class Solution {
//   leftRotate(arr, k, n) {
//     this.reverse(arr, 0, k - 1);
//     this.reverse(arr, k, n - 1);
//     this.reverse(arr, 0, n - 1);
//   }
//   reverse(arr, st, en) {
//     while (st <= en) {
//       [arr[st], arr[en]] = [arr[en], arr[st]];
//       st++;
//       en--;
//     }
//   }
// }

// const ar = new Solution()
// const arr = [-36, -28, 83, 59, -5, -22, 15, 64, 33, -85, -99, -94]
// ar.leftRotate(arr,22,537)
// console.log(arr)

// function pushZerosToEnd(arr,n){
//     let en = n-1
//     for(let i=0; i<n-1; i++) {
//         if(arr[i] === 0) {
//             let temp = arr[i]
//             arr[i] = arr[en]
//             arr[en] = temp
//             en--
//         }
//     }
// }

// const arr = [3,5,0,0,4]
// pushZerosToEnd(arr,5)
// console.log(arr)

// class Solution {
//   //Function to return a list containing the union of the two arrays.
//   findUnion(arr1, arr2, n, m) {
//     let i = 0;
//     let j = 0;
//     let newArr = [];

//     while (i < n && j < m) {
//       if (arr1[i] === arr2[j]) {
//         newArr.push(arr1[i]);
//         i++;
//         j++;
//       } else if (arr1[i] < arr2[j]) {
//         newArr.push(arr1[i]);
//         i++;
//       } else {
//         newArr.push(arr2[j]);
//         j++;
//       }
//     }
//     while (i < n) {
//       newArr.push(arr1[i]);
//       i++;
//     }
//     while (j < m) {
//       newArr.push(arr2[j]);
//       j++;
//     }
//     let st = new Set(newArr)
//     return [...st]
//   }
// }

// const sol = new Solution();
// console.log(sol.findUnion([13, 17, 18, 19, 20, 22, 22, 27, 36, 39, 46, 48, 50], [4,12,45], 5, 3));

// var numUniqueEmails = function (emails) {
//   let st = new Set();
//   for (let e of emails) {
//     [local, domain] = e.split("@");
//     local = local.split("+")[0];
//     local = local.replaceAll(".", "");
//     st.add((local+ '@'+domain));
//   }
//   console.log(st)
//   return st.size;
// };

// console.log(
//   numUniqueEmails([
//     "test.email+alex@leetcode.com",
//     "test.email.leet+alex@code.com",
//   ])
// );

// var isIsomorphic = function (s, t) {
//   const smp = new Map();
//   const tmp = new Map();
//   for (let i in s) {
//     if (
//       (smp.has(s[i]) && smp.get(s[i]) != t[i]) ||
//       (tmp.has(t[i]) && tmp.get(t[i]) != s[i])
//     ) {
//       return false;
//     }
//     smp.set(t[i], s[i]);
//     tmp.set(s[i], t[i]);
// }
// console.log(tmp,smp)
//   return true;
// };

// console.log(isIsomorphic("foo", "bar"));

// var missingNumber = function (nums) {
//   const arr = new Array(nums.length+1).fill(0);
//   for (let i of nums) {
//     arr[i]++;
//   }
//   for(let j in arr) {
//     console.log(j)
//     if(arr[j] === 0) return j
//   }
// };

// console.log(missingNumber([0,1]))

// var singleNumber = function (nums) {
//   let ans = 0;
//   for (let i of nums) {
//     ans += nums;
//   }
//   return ans % (ans / 2);
// };

// console.log(singleNumber())

// const arr = [12,42,52,12,5,6]

// for(let i in arr) {
//     console.log(i)
// }

// var canPlaceFlowers = function (flowerbed, n) {
//   let ans = 0;
//   let len = flowerbed.length - 1;
//   for (let i = 0; i < flowerbed.length; i++) {
//     if (flowerbed[i] === 0) {
//       if (flowerbed[i - 1] !== 1 && flowerbed[i + 1] !== 1) {
//         flowerbed[i] = 1;
//         ans++;
//       }
//     }
//   }
//   console.log(ans,n)
//   return ans >= n;
// };

// console.log(canPlaceFlowers([1, 0, 0, 0, 1], (n = 1)));

// var majorityElement = function (nums) {
//   let mp = {};
//   let count = 0;
//   let ans = 0
//   for (let i = 0; i < nums.length; i++) {
//     if (mp[nums[i]]) {
//       mp[nums[i]] = mp[nums[i]] + 1;
//       count++;
//       if (count >= nums.length / 2) {
//         return nums[i];
//       }
//     } else {
//       mp[nums[i]] = 1;
//     }
//   }
// };

// console.log(majorityElement([3, 2, 3]));

// function a() {
//   let a = 23
//   return function b() {
//     console.log(a)
//   }
// }

// const c = a()
// c()

// function a() {
//   for (var i = 0; i <= 5; i++) {
//     function close(i) {
//       setTimeout(() => {
//         console.log(i);
//       }, i * 1000);
//     }
//     close(i)
//   }
//   console.log("naveen");
// }

// a();

// class Node {
//   constructor(value) {
//     this.value = value;
//     this.next = null;
//   }
// }

// class LinkedList {
//   constructor() {
//     this.head = null;
//     this.size = 0;
//   }
//   isEmpty() {
//     return this.size === 0;
//   }
//   getSize() {
//     return this.size;
//   }
//   prepend(val) {
//     const newNode = new Node(val);
//     if (this.isEmpty()) {
//       this.head = newNode;
//     } else {
//       newNode.next = this.head;
//       this.head = newNode;
//     }
//     this.size++;
//   }
//   append(value) {
//     const newNode = new Node(value)
//     if(this.isEmpty()) {
//       this.head = newNode
//     } else{
//       let prev = this.head
//       while(prev.next) {
//         prev = prev.next
//       }
//       prev.next = newNode
//     }
//     this.size++
//   }
//   insert(value, index) {
//     if(index < 0 || index > this.size) {
//       return
//     }
//   }
//   print() {
//     if (this.isEmpty()) {
//       console.log("list is empty");
//     } else {
//         let temp = this.head
//         let listValues = ''
//         while(temp) {
//             listValues+=`${temp.value} =>`
//             temp = temp.next
//         }
//         console.log(listValues)
//     }
//   }
// }

// const list = new LinkedList();
// console.log(list.isEmpty());
// console.log(list.getSize());
// list.prepend(23);
// list.prepend(53);
// list.prepend(753);
// list.prepend(5224);
// list.append(224);
// console.log(list.isEmpty());
// console.log(list.getSize());
// list.print()

// var topKFrequent = function (nums, k) {
//   let map = {};
//   let ans = [];
//   for (let i of nums) {
//     if (map[i] != undefined) {
//       map[i]++;
//     } else {
//       map[i] = 1;
//     }
//   }
//   for (let key in map) {
//     if (map[key] <= k) ans.push(key);
//   }
//   console.log(map)
//   console.log(ans)
//   return ans;
// };

// topKFrequent((nums = [1,2]), (k = 2));

// var wordPattern = function (pattern, s) {
//   const mp = new Map();
//   let set = new Set()
//   let st = s.split(" ");
//   if (st.length !== pattern.length) return false;
//   for (let i in st) {
//     if (!mp.get(pattern[i]) && !set.has(st[i])) {
//       mp.set(pattern[i], st[i]);
//       set.add(st[i])
//     }
//   }
//   let ans = "";
//   for (let i in st) {
//     ans += mp.get(pattern[i]);
//   }
//   st = st.join("");
//   return ans === st;
// };

// wordPattern(pattern = "abba", s = "dog dog dog dog");

// let s = "A man, a plan, a canal: Panama";
// const regex = /[a-z]/gi;
// const ans = s.match(regex).join("").toLowerCase();
// console.log(ans);
// let st = 0;
// let en = ans.length;
// while (st <= en) {
//   if (ans[st] != ans[en]) return false;
//   st++;
//   en--;
// }
// return true;

// var isPalindrome = function (s) {
//   let ans  = s.replace(/[^a-z|^0-9]/gi, "").toLowerCase();
//   let st = 0;
//   let en = ans.length-1;
//   while (st <= en) {
//     if (ans[st] != ans[en]) return false;
//     st++;
//     en--;
//   }
//   return true;
// };

// const ans = isPalindrome("A man, a plan, a canal: Panama");
// console.log(ans)

// class Node {
//   constructor(value) {
//     this.value = value;
//     this.left = null;
//     this.right = null;
//   }
// }

// class Bst {
//   constructor() {
//     this.root = null;
//   }
//   isEmpty() {
//     return this.root === null;
//   }
//   insert(value) {
//     const node = new Node(value);
//     if (this.isEmpty()) {
//       this.root = node;
//     } else {
//       this.insertNode(this.root, node);
//     }
//   }
//   insertNode(root, node) {
//     if (node.value > root.value) {
//       if (root.right === null) {
//         root.right = node;
//       } else {
//         this.insertNode(root.right, node);
//       }
//     } else {
//       if (root.left === null) {
//         root.left = node;
//       } else {
//         this.insertNode(root.left, node);
//       }
//     }
//   }
//   search(root, value) {
//     if (!root) {
//       return false;
//     } else {
//       if (root.value === value) {
//         return true;
//       } else if (value < root.value) {
//         return this.search(root.left, value);
//       } else {
//         return this.search(root.right, value);
//       }
//     }
//   }

//   preOrder(root) {
//     if (root) {
//       console.log(root.value);
//       this.preOrder(root.left);
//       this.preOrder(root.right);
//     }
//   }
//   inOrder(root) {
//     if (root) {
//       this.inOrder(root.left);
//       console.log(root.value);
//       this.inOrder(root.right);
//     }
//   }
//   postOrder(root) {
//     if (root) {
//       this.postOrder(root.left);
//       this.postOrder(root.right);
//       console.log(root.value);
//     }
//   }
// }

// const bs = new Bst();
// console.log(bs.isEmpty());

// bs.insert(10);
// bs.insert(5);
// bs.insert(15);
// console.log(bs);
// console.log(bs.search(bs.root, 15));
// bs.preOrder(bs.root);
// bs.inOrder(bs.root);

