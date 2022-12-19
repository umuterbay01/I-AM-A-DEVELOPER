/*
let x = 1

do {
    console.log(x);
    x++

} while (x <= 10);
*/

/*
let age = 27;

do{
    console.log(age);


}while(age >= 35)
*/

let x = 1
let total = 0

do{
    if(x%2==1){
        total+=x;
    }
    
    x++;

}while(x <= 20)

console.log(total);