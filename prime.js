function primecheck(num){
let factor=0;
for(let i=1;i<=num;i++){
if(num%i==0){
factor++;
}
}
if(factor==2){
console.log("prime number");
}else{
console.log("not prime");
}
}
primecheck();