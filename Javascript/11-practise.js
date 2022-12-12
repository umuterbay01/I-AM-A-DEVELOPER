//***********           ATM              ***************/
/*
1-Bakiye Görünteleme
2-Para çekme
3-Para yatırma
4-Çıkış
*/

const newLine = "\r\n"
let bakiye = 1000

let metin = "1-BAKİYENİZ" + newLine + 
"2-PARA ÇEKME"+newLine+
"3-PARA YATIRMA"+newLine+
"4-ÇIKIŞ"

let secim = prompt(metin);

switch(secim){
    case "1": 
        alert("Bakiyeniz: "+ bakiye);
        break;

    case "2": 
        let cekilecekTutar = Number(prompt("Lütfen Çekmek İstediğiniz Miktarı Giriniz:"));
        
        if(bakiye>=cekilecekTutar){
            bakiye -= cekilecekTutar;
            alert("Başarıyla Hesabınızdan Para Çektiniz"+newLine+"Kalan Bakiye: "+ bakiye);
        }else{
            alert("Hesabınızda Yeterli bakiye yoktur"+newLine+"Bakiyeniz: "+ bakiye+" "+"Çekilmek İstenilen Para: "+ cekilecekTutar);
       }
       break;
    case "3": 
       let yatirilacakTutar = Number(prompt ("Yatırılacak Tutarı Giriniz: "));
       
       bakiye += yatirilacakTutar;
       
       alert("Yatırılan Tutar: " + yatirilacakTutar + newLine + "Güncel Bakiyeniz: " + bakiye);
       break;
    
    case "4": 
       alert("Çıkış İşleminiz Yapılıyor...");
       break;
    
    default: 
       alert("Yanlış Bir Numara Kodladınız");
       break;
}

