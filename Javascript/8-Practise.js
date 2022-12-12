//********** BODY MASS INDEX ****************


let weight = Number(prompt("Write Your Weight"));
let length = Number(prompt("Write Your Length"));

let bMI = weight/(length**2);
console.log(bMI);

if(bMI < 18.5){
    alert("You Are Too Weak");
}else if(bMI >= 18.5 && bMI <= 24.9){
    alert("This Is Great!");
}else if(bMI >= 25 && bMI <= 29.9){
    alert("This Is Not Great :(");
}else if(bMI >= 30 && bMI <= 39.9){
    alert("This Is Bad!");
}else{
    alert("This Is So Bad!!!!");
}