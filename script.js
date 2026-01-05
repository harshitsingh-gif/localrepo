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
// let a=6;
// let b=7;
// console.log(a+b);
// let con1 =b>a;//true
// let con2 = a===b;//false
// console.log(con1);//true
// console.log("con1 && con2", con1&&con2);//false
// console.log("con1 || con2", con1||con2);//true
// console.log("!con1", !con1);//false
// console.log("!con2", !con2); //true
// let print= ()=>{
//   console.log("hello!");
// }

}
else if(score>=0 && score<=49){
    grade='F';
}
 console.log("The grade is: " + grade);
let items =[250,645,300,900,50];
 let i=0;
 for(let val of items){
console.log(`value at index ${i} =${val}`);
 let offer =val/10;
  items[i]-=offer;
 console.log(`value after offer=${items[i]}`);
   i++;
      }
let arr = ["pune", "mumbai", "bangalore", "chennai"];
arr.forEach((val, index, arr)=>{
    });

let arr=[10,25,30,45,60];
arr.forEach((arr)=>{
    console.log(arr*arr);
});
 let arr = [5, 10, 15, 20, 25];

let newArr = arr.filter((val)

