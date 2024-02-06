// console.log(btn)

// console.log(date)

btn.addEventListener('click',()=>{
    let currentDate=new Date();
    let currentYear=currentDate.getFullYear()
    let currentMonth=currentDate.getMonth()
    let currentDay=currentDate.getDate()
    // console.log(currentYear)
    // console.log(currentMonth)
    // console.log(currentDay)

    const value=date.value
    // console.log(value)
    let dob=new Date(value)
    // console.log(dob)
    let dobYear=dob.getFullYear()
    let dobMonth=dob.getMonth()
    let dobDay=dob.getDate()
console.log(dobYear)
console.log(dobMonth)
console.log(dobDay)
console.log('hello')

    let yearGap=currentYear-dobYear
    console.log(yearGap)
let monthGap;
 let dayGap;
if(currentMonth>=dobMonth){//1//5
    monthGap=currentMonth-dobMonth
}else{
    yearGap--;
    monthGap = 12 + currentMonth - dobMonth
}
}
// if(currentDay>=dobDay){
//     dayGap=currentDay-dobDay
// }else{
//     monthGap--;
// dayGap = 31 + currentDay - dobDay
// }

// let monthGap=currentMonth-dobMonth
// console.log(monthGap)
// let dayGap=currentDay-dobDay
// console.log(dayGap)

// })

// const currentDate=new Date();
// console.log(currentDate)
// let year=currentDate.getFullYear()
// let month=currentDate.getMonth()
// let hours=currentDate.getHours()
// let day=currentDate.getDay()
// console.log(year)
// console.log(month+1)
// console.log(hours)
// console.log(day)

// const currentDate = new Date("2023-03-15")
// console.log(currentDate)
// console.log(currentDate.getFullYear())

// // write a function to reverse a order of sentence

// // let str='yogesh is not solving javascript problem';
// // let str2='Devilal is solving javascript problem';

// // let strArr=str.split(' ');
// // console.log(strArr)
// // let revArr=strArr.reverse()
// // console.log(revArr)
// // let result=revArr.join(" ")
// // console.log(result)
// // function revString(str){
// //   let result = str.split(' ').reverse().join(' ')
// //   console.log(result)

// // }
// // revString(str2)

// let arr = [3, 4, 56, [34, 43, 53], 65, 73]

// // let array2=arr.flat()
// // console.log(array2)

// // let result=Math.max(...array2)
// // console.log(result)
// // function findLargest(arr){
// //   //arr=[3, 4, 56, [34, 43, 53], 65, 737]
// //   let array2 = arr.flat() //[3, 4, 56, ,34, 43, 53, 65, 737]

// //   let result = Math.max(...array2)
// //   console.log(result)
// // }

// // findLargest(arr)
// // function findLargest(nestedArray){
// // // let largestELement = Number.NEGATIVE_INFINITY
// // // for (let i = 0; i < nestedArray.length; i++) {
// // //   for (let j = 0; j < nestedArray[i].length; j++) {
// // //     if (nestedArray[i][j] > largestELement) {
// // //       largestELement = nestedArray[i][j]
// // //     }
// // //   }

// // //   // console.log(largestELement)
// // // }
// // // console.log(largestELement)
// // }
// // findLargest(arr)

// // 0 ,1 1 2 3 5 8 13

// // a=0//1//1
// // b=1//1//2
// // c=a+b//2//3
// // let arr=[0,1]


// // function fib(n) {
//   //     let arr = [0, 1]

//   // for(let i=2;i<n;i++){

//   //     arr[i]=arr[i-1]+arr[i-2]

//   // }
//   // return arr

// //   let result=[]

// //   let a = 0
// //   let b = 1
// //   console.log(a)
// //   result.push(a)
// //   result.push(b)
// //   console.log(b)
// //   for (let i = 2; i <= n; i++) {
// //     let c = a + b

// //     a = b
// //     b = c
// //     if (c <= n) {
// //         result.push(c)
// //       console.log(c)
// //     }
// //   }
// //   console.log(result)
// // }

// // fib(505)
// // // console.log(fib(50))

// // function checkPrime(n){

// //     if(n<=1) return false
// //     for(let i=2;i<Math.sqrt(n);i++){
// //         if(n%i==0){
// //             return false
// //         }
// //     }
// // return true
// // }

// // console.log(checkPrime(7))


// // let num=31
// // console.log(Math.sqrt(num))



// const inputContainer=document.getElementsByClassName('input')
// inputContainer = {
//   type: 'text',
//   class: 'input',
//   name: 'input',
//   placeholder: 'type a text',
// }
// console.log(inputContainer)


// // const main=document.getElementById('main')

// console.log(main.className)
// const container=document.getElementsByTagName('div')
// console.log(container)
