let num=11;
let factor=0;
for(let i=1;i<=num;i++){
if(num%i==0){
factor++;
}
}
if(factor==0){
console.log(prime number);
}else{
console.log(not prime);
}
