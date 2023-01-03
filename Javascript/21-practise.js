//************ ARMSTRONG NUMBER  *********************

// 153 - 370 - 407 EXAMPLE ; 1*1*1 + 5*5*5 + 3*3*3 = 153

let nmbr1 = prompt("Write a number");
let total = 0;

for(x=0 ; x<nmbr1.length ; x++ ){

    let nmbr2 = nmbr1.charAt(x);

    total += (nmbr2**3)

}

if(Number(nmbr1) == total){
    alert("This number is a Amstrong Number");
}else{
    alert("This number is not a Amstrong Number!!!!");
}