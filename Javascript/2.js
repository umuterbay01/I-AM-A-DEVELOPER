/*
? VERİ TİPLERİ

1-String
2-Number
3-Boolean
4-Null
5-Undefined
6-Object
7-Function

*/

let abc = "selam"
console.log(abc);
console.log(typeof abc )

// Boolean örnekleri

let pdf = 4
let ced = 3
let sonuc = pdf * ced
console.log(sonuc!=12)

// Object

let kisi = {
    isim : "Umut",
    soyisim : "Erbay",
    yas : 27,
}
console.log(kisi)
console.log(typeof kisi)


let dizi = [1,2,3,4];
console.log(typeof dizi)

// Function 

let fonsiyon = function(){

    console.log("Hello World")
}
fonsiyon();
console.log(typeof fonsiyon)