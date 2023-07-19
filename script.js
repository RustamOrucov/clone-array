const arr=['test','test1','test2','test3'];
// ================= N 1=========================
// const newArr=[...arr]

// console.log(arr);
// console.log(newArr);

// ===========================  N 2======================

// ============================N2 =======================

// const newArr=[];

// arr.forEach(el=>{
//     newArr.push(el)
// })

// console.log(newArr);

// ============================== N3========================

// let newArr =arr.slice();
// console.log(arr);
// console.log(newArr);

// ========================== N 4==========================

let newArr=[].concat(arr)
console.log(newArr);