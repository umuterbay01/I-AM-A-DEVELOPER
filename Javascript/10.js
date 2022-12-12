//******** SWITCH-CASE **********

const newLine = "\r\n"
let text = "1-Monday" + newLine+
"2-Tuesday"+newLine+
"3-Wednesday"+newLine+
"4-Thursday"+newLine+
"5-Friday"+newLine+
"6-Saturday"+newLine+
"7-Sunday"+newLine+
"Please choose a number 1 to 7";

let value = prompt(text);

switch(value){
    case "1": 
        console.log("MONDAY")
    break;
    case "2": 
        console.log("TUESDAY")
    break;
    case "3": 
        console.log("WEDNESDAY")
    break;
    case "4": 
        console.log("THURSDAY")
    break;
    case "5": 
        console.log("FRIDAY")
    break;
    case "6": 
        console.log("SATURDAY")
    break;
    case "7": 
        console.log("SUNDAY")
    break;
    default: 
        console.log("YOU CHOOSED A WRONG NUMBER")
}