var count = 0;
var sum = 0;
for(var i=1;i<=100;i++){
  if(i%2 == 0){
    sum = sum + i;
    count++;
  }
}
var result = sum / count
console.log(result)