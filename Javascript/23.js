// parameter function

/*
function hello(name,surname){

    console.log(name + " " + surname);

}

hello("Umut", "Erbay");

hello("Ali", "Tuncer");
*/

/*
cube(3);
cube(4);

function cube(nmbr){
    console.log(nmbr**3);
}
*/

let age = Number(prompt("write your age"))

check(age);

function check(nmbr1){

    if(age>=18){
        console.log("PASSED");
    }else{
        console.log("FAILED");
    }

}

