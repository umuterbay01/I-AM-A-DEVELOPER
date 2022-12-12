//************ ÇOKLU İF KULLANIMI *******

let name1 = prompt("Name:");
let idNo1 = prompt("ID No:");
/*
check(name1,idNo1 );

function check(name1,idNo1){

   
    if(name1!=""){
        
        if(idNo1.length == 11){
            console.log("Name and Id Succeed")
        }else{
            console.log("Name Succeed But Id Wrong")
        }
    }else{
        console.log("Name Wrong")
    }
}
*/

check2(name1,idNo1);

function check2(name1,idNo1){
    if(name1==""){
        console.log("Name Wrong")
        return;
    }
    if(idNo1.length!=11){
        console.log("Id Wrong")
        return;
    }
    console.log("Id And Name Succeed")
}

