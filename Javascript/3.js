//*************** ARİTMETİK OPERATÖRLER ***********************
/*

+
-
*
/
%
++
--
**

*/

let a = 10;
a++;
a++;
console.log(a); // 12 olur

//*************** ATAMA OPERATÖRLERİ ***********************************/

/*
=
==
===
+=
-=
*=
/=
%=
**=

*/

//****************MANTIKSAL OPERATÖRLER *******************************/
/*
&&  ==> ve
||  ==> veya
!   ==> değil 
*/ 
console.log(!(6>4)); // false çıkar
//****************KARŞILAŞTIRMA OPERATÖRLERİ **************************/
/* 
==
!=
>
<
>=
<=
*/
//****************DİYALOG KUTULARI ***********************************/
/*
-alert
-prompt
-confirm
*/
// alert("emin misin?")

let isim = prompt("İsminizi Giriniz")
let yas = prompt("Yaşınızı Giriniz")
console.log("İsminiz: " + isim)
console.log("Yaşınız: " + yas)
console.log(typeof yas)

let sonuc = confirm("Silmek İstediğinize Emin Misiniz?") 
console.log(sonuc);