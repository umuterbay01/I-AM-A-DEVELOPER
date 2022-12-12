//***********                   AVERAGE                      *************


let exam1 = Number(prompt("Exam 1="));
console.log(exam1*0.3)
let exam2 = Number(prompt("Exam 2="));
console.log(exam1*0.2)
let exam3 = Number(prompt("Exam 3="));
console.log(exam1*0.5)

let average = exam1*0.3 + exam2*0.2 + exam3*0.5;
console.log(average)

if(average>=70){
    alert(average +"!" + " YOU PASSED THE EXAM");
    console.log( average + "!" + " YOU PASSED THE EXAM" );
}else{
    alert(average + " SORRY, YOU DID NOT PASSED THE EXAM");
    console.log( average + " SORRY, YOU DID NOT PASSED THE EXAM" );
}
