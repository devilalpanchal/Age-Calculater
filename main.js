

function calcAge(){
       const dob = document.querySelector('#date')//reading the dob input
       console.log(dob.value)
       let docValue = dob.value //gettin the vlaue of dob
       console.log(dobValue)

        let currentDate=document.querySelector('#currentDate') //reading input of current date
       console.log(currentDate)
       console.log(dob.value)
       let currentDateValue=currentDate.value //reading the value of current date
       console.loggetCurrentDate

       const getDob =new Date(dobValue) // getting deatails of dob
       console.log(getDob)
   const getCurrentDate = new Date(getCurrentValue)
   console.log(getCurrentDate)
   let dobYear =getDob.getFullYear()
   console.log(dobYear)
   let dobMonth =getDob.getMonth()
   console.log(dobMonth)
   let dobDate =getDob.getDate()
   console.log(dobDate)

   const getCurrentDay =new Date(currentDateValue) // getting deatails of current date
   let currentMonth = getCurrentDate.getMonth()
   let currentDay = getCurrentDate.getDay()
   console.log(currentYear)
   console.log(currentMonth)
   console.log(currentDay)

   let yearGap = currentYear-dobYear // calculation of year gap
//    2024-2001=23
// 2-7=-5
let monthGap;
let dateGap;
if (currentMonth>=dobMonth){
      monthGap = currentMonth-dobMonth // calculation of month and date gap
}else{
      yearGap--;
      monthGap =12+currentMonth-dobMonth
}

if (currentDay>=dobDate){
      dateGap= currentDay-dobDate
}else{
      monthGap--;
      dateGap = 31+ currentDay -dobDate;
      if(monthGap<=0){
      monthGap=11;
      yearGap--;
}

}
//    console.log(yearGap)
//    console.log(monthGap)
//    console.log(dateGap)
let ageGap ={
      year:yearGap,   // create object of age gap
      month:monthGap,
      date:dateGap
}

console.log(ageGap)

let result = document.querySelector('.result')
console.log(result)

result.innerHTML=`You are ${ageGap.year} Years and 
${ageGap.month} months and ${ageGap.date} days old.`



}