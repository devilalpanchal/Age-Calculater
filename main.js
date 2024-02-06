// console.log('hello')

function calcAge() {
  
  const dob = document.querySelector('#dob')//reading the dob input
  // console.log(dob.value)
  let dobValue = dob.value//getting the value of dob
  console.log(dobValue)

  let currentDate = document.querySelector('#currentDate')//reading input of current date
  // console.log(currentDate)
  let currentDateValue = currentDate.value//getting the vlaue of current date
  console.log(currentDateValue)

  const getDob = new Date(dobValue)//get deatils of dob
  let dobYear = getDob.getFullYear()//get year of dob
  console.log(dobYear)
  let dobMonth = getDob.getMonth()//get month of dob
  console.log(dobMonth)
  let dobDate = getDob.getDate()//get date of dob
  console.log(dobDate)

  // console.log(getDob)
  const getCurrentDate = new Date(currentDateValue)//get details of current date
  let currentYear = getCurrentDate.getFullYear()
  let currentMonth = getCurrentDate.getMonth()
  let currentDay = getCurrentDate.getDate()

  console.log(currentYear)
  console.log(currentMonth)
  console.log(currentDay)

  let yearGap = currentYear - dobYear//calculation of year gap
  // 6 7 2001
  // 1 2 2024
  // 23;
  // -5
  // 2024-2001=23
  // 2-7=-5
  // 7-2=5

  // logic of getting month gap and date gap
  let monthGap
  let dateGap
  if (currentMonth >= dobMonth) {
    monthGap = currentMonth - dobMonth
  } else {
    yearGap--
    monthGap = 12 + currentMonth - dobMonth
  }

  if (currentDay >= dobDate) {
    dateGap = currentDay - dobDate
  } else {
    monthGap--
    dateGap = 31 + currentDay - dobDate
    if(monthGap<=0){
        monthGap=11;
        yearGap--;
    }
  }

// console.log(yearGap)
// console.log(monthGap)
// console.log(dateGap)
//creating a object of age gap
let ageGap={
year:yearGap,
month:monthGap,
date:dateGap

}
console.log(ageGap)

let result=document.querySelector('.result')//reading the result container
console.log(result)

result.innerHTML=`You are ${ageGap.year} years and ${ageGap.month} months and ${ageGap.date} days old  `//showing the result in the container





  // console.log(getCurrentDate)
}
