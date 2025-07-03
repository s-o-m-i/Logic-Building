let n = 10;
let sum = 0;
let count = 1;

// for (let count = 1; count <= n; count++) {
//     sum += count;
//     console.log(count)
//     console.log(sum)
// }

while (count <= n) {
    sum += count;
    count++
}

console.log(`Sum of numbers from 1 to ${n} = ${sum} `)

// Pseudo Code

// input n
// count = 1, sum = 0
// for, while count <= n
//           sum += count
//               if while
//                  count ++
// Print sum
// Exit






