var number1 = document.getElementById("number1");
number1.value = 0;
var number2 = document.getElementById("number2");
number2.value = 0;
var selectedOperator = document.getElementById("operationSelect");
var answer = document.getElementById("answer");

var result = 0;

function calculate(){
 getanswer = selectedOperator.options[selectedOperator.selectedIndex].text;
if(getanswer == "+"){
    result = number1.valueAsNumber + number2.valueAsNumber;
    console.log(result);

}
if(getanswer == "-"){
    result = number1.valueAsNumber - number2.valueAsNumber;

}
if(getanswer == "*"){
    result = number1.valueAsNumber * number2.valueAsNumber;

}
if(getanswer == "/"){
    result = number1.valueAsNumber / number2.valueAsNumber;

}

Result()
}
function Result(){
    
answer.innerHTML = "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Result: " + result;
}
function changeOperator(){
    console.log(selectedOperator.value);
}
console.log(selectedOperator.value);