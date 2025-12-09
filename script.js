let a=6;
console.log(a);
let b=4;
console.log(b);
const sum =a+b;
console.log(`sum is${sum}`);
let num = prompt("Enter a number");
if (num%5==0) {
    console.log(num + " is divisible by 5");
}
else {
    console.log(num + " is not divisible by 5");
}
let num = prompt("Enter a number");
if (num%5==0) {
    console.log(num + " is divisible by 5");
}
else {
    console.log(num + " is not divisible by 5");
}
let score=prompt("Enter your score:");
let grade;
if(score>=90&& score<=100){
    grade='A';
    } 
else if(score>=70 && score<=89){
    grade='B';
}
else if(score>=60 && score<=69){
    grade='C';
}
else if(score>=50 && score<=59){
    grade='D';
