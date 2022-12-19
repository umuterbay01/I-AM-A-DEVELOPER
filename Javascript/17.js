// BREAK - CONTINUE

/*
let x = 1

while(x<=10){
    
    if(x==8){
        break;
    }

    console.log(x);

    x++
}
*/

let nmber = 0

while(nmber <= 10){

    nmber++

    if(nmber>10){
        break;
    }

    if(nmber==8){
        continue;
    }
    
    console.log(nmber);
}