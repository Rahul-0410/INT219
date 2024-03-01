
// let a=prompt("Enter your score: ");
// let b=prompt("Enter your second number: ");

// if(a>b){
//     console.log(a);
// }else {
//     console.log(b);
// }

// let a=prompt("Enter your score: ");

// if(a>=90){
//     console.log("A");
// } else if(a<=89 && a>=80){
//     console.log("B");
// }
//  else if(a<=79 && a>=70){
//     console.log("C");
// }
//  else if(a<=69 && a>=60){
//     console.log("D");
// } else{
//     console.log("F");
// }

// let a=prompt("Enter your first number: ");
// let b=prompt("Enter your second number: ");
// let c=prompt("Enter your third number: ");

// if(a*b*c>=0){
//     alert("the sign is: +");
// } else{
//     alert("the sign is: -");
// }

let yr=2020;
if((yr%4==0) && (yr%100!=0) || yr%400==0 ){
    console.log("This year is a leap year i.e.: ",yr);
} else{
    console.log("Not a leap year");
}