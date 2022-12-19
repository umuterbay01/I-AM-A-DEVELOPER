// *********************** FAKTÖRİYEL BULMA ***********************

let nmbr = Number(prompt("Write a number"));
let total = 1;



for(let x=1 ; x<=nmbr; x++){
    
    total *= x  ;

}

if(nmbr === ""){
    alert("Please write a number!!")
}else if(nmbr<=0){
    alert("Number cannot be less than 1!")
}else{
    alert("Result: " + total)
}