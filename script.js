function calculat(){
  let year;
  let month;
  let day;

  //slice the Date 

  let currentDay= parseInt(cd.value.slice(8,10),10)
  let currentMonth=parseInt(cd.value.slice(5,7),10)
  let currentYear= parseInt(cd.value.slice(0,4),10)
  console.log(currentDay,currentMonth,currentYear)

  let birthDay = parseInt(dob.value.slice(8,19),10);
  let birthMonth=parseInt(dob.value.slice(5,7),10);
  let birthYear=parseInt(dob.value.slice(0,4),10)
  console.log(birthDay,birthMonth,birthYear)

  // implement the condition 
  if(currentDay >= birthDay)
  {
    day= currentDay - birthDay
  }
  else
  {
    day= currentDay + new Date(currentYear,currentMonth).getDate()-birthDay
    currentMonth--;
  }
if(currentMonth >= birthMonth)
{
  month=currentMonth - birthMonth
}
else{
  month = currentMonth + 12  -birthMonth
  currentYear--;
}
year = currentYear- birthYear;
if(year < 0)
  // if any person take the wrong data the given the msg his person
{
  agetext.innerHTML=`Sorry Bro this bith Year Wrong .So I am not avail to calculate your Age So Sorry!!`
}
// show the value age box
else
{
  agetext.innerHTML=year+'years,' +month+'month,' + day+'day';
}
  

  }