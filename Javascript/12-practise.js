//*************** EXAM **********************

/*
A lesson 40 questions factor*4
B lesson 40 questions factor*3
C lesson 20 questions factor*2
D lesson 20 questions factor*1

4 wrongs delete 1 right
*/

let aLessonR, bLessonR, cLessonR, dLessonR;
let aLessonW, bLessonW, cLessonW, dLessonW;
let schoollScore;
let rawScore = 100;
let newLine = "\r\n"
let point;

let doc1 = "1-Calculate your point" + newLine + "2-Exit"

let choose = prompt(doc1);

switch(choose){
    case "1": 
        aLessonR = Number(prompt("Number of correct in A lesson"));
            if(aLessonR>40){
                alert("It is a wrong number")
            }
        aLessonW = Number(prompt("Number of wrong in A lesson"));

        bLessonR = Number(prompt("Number of correct in B lesson"));
        bLessonW = Number(prompt("Number of wrong in B lesson"));

        cLessonR = Number(prompt("Number of correct in C lesson"));
        cLessonW = Number(prompt("Number of wrong in C lesson"));

        dLessonR = Number(prompt("Number of correct in D lesson"));
        dLessonW = Number(prompt("Number of wrong in D lesson"));

        schoollScore = Number(prompt("Please write your Schooll Score"))

        let aPoint = (aLessonR - (aLessonW/4))*4;
        console.log(aPoint);
        let bPoint = (bLessonR - (bLessonW/4))*3;
        console.log(bPoint);
        let cPoint = (cLessonR - (cLessonW/4))*2;
        console.log(cPoint);
        let dPoint = (dLessonR - (dLessonW/4))*1;
        console.log(dPoint);

        console.log(schoollScore);
        console.log(rawScore);

        let allPoints = aPoint + bPoint + cPoint + dPoint + schoollScore + rawScore; 
        alert("YOUR POINT: "+ allPoints)
        break;
    
    case "2": 
        alert("Logged out");
        break;
    default: 
        alert("Please choose a correct option!")
        break;
}


