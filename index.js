const $numberBtn = document.querySelectorAll(".number");
const $savedValue = document.querySelector(".save-value")
const $inputField = document.querySelectorAll('input')[1]
console.log($inputField)
let value = ""
let op = "";
let value2 = ""

console.log(window.addEventListener("keydown",(event) => Backspace(event)))

function setValue(val){
    value += val
    $inputField.value = value
}
function clearValue(){
    value = ""
    $inputField.value = value
    value2= ""
    $savedValue.value=""
}
function setOperation(operation){

    op = operation
    if(value2.length === 0 ){
        value2 = value
        $savedValue.value = `${value2} ${op}` 
    }else{
        $savedValue.value = `${value2} ${op}`
    }
    value = ""
    $inputField.value = "";  
}
function getResult(){
    if(op !== ""){
        let result = eval(`${value2} ${op} ${value}`)
        if(result == Infinity){
            result = 0
        }
        $savedValue.value= result
        value2= String(result)
        $inputField.value = ""
        value=""
        }
        return;
}
function Backspace(){
        value = value.substring(0,value.length - 1)
        $inputField.value = value
}

