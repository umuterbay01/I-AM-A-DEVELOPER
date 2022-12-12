//**********  KOŞUL YAPILARI ***********

let yas = Number(prompt("Yaşınızı giriniz:"));
console.log(typeof yas);

let para = Number(prompt("Paranızı giriniz:"));

if(yas>=20 && para >= 4000){
    alert("GEÇTİNİZ!")
}
else{
    alert("KALDINIZ!")
};