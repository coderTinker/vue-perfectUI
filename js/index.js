// //首先确定范围在1000-9999之间，所以用for循环遍历判断
// for (let i = 1000; i < 10000; i++) {
//   //取出个位数
//   const ge = parseInt(i.toString().slice(3, 4))
//   //取出十位数
//   const shi = parseInt(i.toString().slice(2, 3))
//   //取出百位数
//   const bai = parseInt(i.toString().slice(1, 2))
//   //取出千位数
//   const qian = parseInt(i.toString().slice(0, 1))
//   //计算条件是否符合
//   if (ge - 1 == shi && bai + 2 == shi) {
//     //顺序颠倒的四位数
//     const dao = parseInt(ge.toString() + shi.toString() + bai.toString() + qian.toString())
//     if (dao + i == 10109) {
//       console.log('这个数为：' + i)

//     }
//   }
// }

// //百马百担问题，大马驮3，中马驮2,2小马驮1
// //设大马为i，中马为j，小马为k
// for (let i = 0; i < 101; i++) {
//   for (let j = 0; j < 101; j++) {
//     for (let k = 0; k < 101; k++) {
//       if (i + j + k == 100) {
//         if (i * 3 + j * 2 + k / 2 == 100) {
//           console.log('大马：' + i + '只', '中马：' + j + '只', '小马：' + k + '只')
//         }
//       }
//     }
//   }
// }


// console.log('40'%7)
