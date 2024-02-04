var storedUserName = "abc12"
var storedPass = "12345"

var currentUserName = "abc12"
var currentPass = "123"

if(storedUserName == currentUserName){
  if(storedPass == currentPass){
    console.log("Login Successful")
  }
  else{
    console.log("Incorrect Password")
  }
}
else{
  console.log("Username is incorrect")
}
 