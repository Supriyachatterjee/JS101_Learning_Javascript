// Problem 1: Given the year of birth, if the age is between 13 and 19 (both included) print Teenage and in between 20 and 29 (both included) print Twenties
var currYear = 2023
var dob = 1996;
var currAge = currYear - dob;
if( currAge >= 13 && currAge <= 19){
  console.log("Teenage");
}
  
else if( currAge >= 20 && currAge<=29){
  console.log("Twenties");
}