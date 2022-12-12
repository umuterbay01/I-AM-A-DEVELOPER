//*********** PETROL STATION ***********


 /*
    Dizel : 30
    Benzin: 25
    LPG : 12

    
    Yakıt tipi ve yakıt litresi sorulacak
 */

let dizel = 30, benzin = 25 , lpg = 10;
const yeniSatir = "\r\n";

const yakitMetni = "1-Dizel"+yeniSatir+"2-Benzin"+yeniSatir+"3-lpg"+yeniSatir+"Yakıt Tipini Giriniz:";

let yakitTipi = prompt(yakitMetni);
if(yakitTipi=="1" || yakitTipi=="2" || yakitTipi=="3"){
let bakiye = prompt("BAKİYENİZİ GİRİNİZ");
let yakitMiktari = prompt("ALMAK İSTEDİĞİNİZ MİKTARI SEÇİNİZ");

    if(yakitTipi=="1"){
// DİZEL
    let odenecekTutar = dizel*yakitMiktari;
        if(odenecekTutar<=bakiye){
            // ödeme başarılı
        bakiye -= odenecekTutar
            alert("DİZEL ÖDEME BAŞARILI"+yeniSatir+"KALAN TUTAR:"+bakiye);
        }else{
            // ödeme başarısız
            alert("DİZEL ÖDEME BAŞARISIZ, BAKİYE YETERSİZ! "+ "ÖDENECEK TUTAR: "+odenecekTutar+yeniSatir+"BAKİYENİZ:"+bakiye+yeniSatir+"EKSİK TUTAR:"+(odenecekTutar-bakiye));
        }
    }else if(yakitTipi=="2"){
// BENZİN
    let odenecekTutar = benzin*yakitMiktari;
        if(odenecekTutar<=bakiye){
            // ödeme başarılı
        bakiye -= odenecekTutar
            alert("BENZİN ÖDEME BAŞARILI"+yeniSatir+"KALAN TUTAR:"+bakiye);
        }else{
            // ödeme başarısız
            alert("BENZİN ÖDEME BAŞARISIZ, BAKİYE YETERSİZ! "+ "ÖDENECEK TUTAR: "+odenecekTutar+yeniSatir+"BAKİYENİZ:"+bakiye+yeniSatir+"EKSİK TUTAR:"+(odenecekTutar-bakiye));
        }

    }else if(yakitTipi=="3"){
// LPG
        let odenecekTutar = lpg*yakitMiktari;
        if(odenecekTutar<=bakiye){
            // ödeme başarılı
        bakiye -= odenecekTutar
            alert("LPG ÖDEME BAŞARILI"+yeniSatir+"KALAN TUTAR:"+bakiye);
        }else{
            // ödeme başarısız
            alert("LPG ÖDEME BAŞARISIZ, BAKİYE YETERSİZ! "+ "ÖDENECEK TUTAR: "+odenecekTutar+yeniSatir+"BAKİYENİZ:"+bakiye+yeniSatir+"EKSİK TUTAR:"+(odenecekTutar-bakiye));
        }
    }
}else{
    alert("LÜTFEN GEÇERLİ BİR YAKIT TÜRÜ GİRİN");
}