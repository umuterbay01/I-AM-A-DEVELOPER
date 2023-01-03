// 

/*
cube(3)

function cube(nmbr1){
    let result = nmbr1**3
    console.log(result);
} 
*/

/*
let x = cube(3);
console.log(x);

function cube(nmbr1){
    let result = nmbr1**3
    return result;
}
*/

/************************  RETURN ****************************
    1-bir değeri fonksiyonun dışarısına çıkarmak için kullanılır.
    2-fonksiyonu sonlandıran anahtar kelimedir.
*/

/*
let x = cube(3);
square(x);


function square(nmbr1){
    let result = nmbr1**2
    console.log(result);
}

function cube(nmbr1){
    let result = nmbr1**3
    return result;
    console.log("selamm");
}
*/

// 2. yol
let x = cube(3);


function square(nmbr1){
    let result = nmbr1**2
    return result;
}

function cube(nmbr1){
    let result = nmbr1**3
    let y = square(result)
    console.log(y);
}
