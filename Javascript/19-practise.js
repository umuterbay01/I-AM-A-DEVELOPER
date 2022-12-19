//**************** ASAL SAYI BULMA **************************


let nmbr = Number(prompt("Bir numara yazınız"));
let rslt = true

for(x=2 ; x<=Math.floor(nmbr/2) ; x++){

    if(nmbr%x == 0){
        rslt=false;
        // asal değildir
        break;
    }
}

if(rslt && nmbr>=2){
    alert(nmbr+" asaldır");
}else{
    alert(nmbr+" asal değildir!");
}
