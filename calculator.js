let display = document.getElementById("result");
function valueAdd(value){
    display.value += value;
}
function clearDisplay(){
    display.value = "";
}
function calculate(){
    display.value=eval(display.value);
}
