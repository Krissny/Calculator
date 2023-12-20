// Basic functions 

function add(a,b){
    return a+b;
}

function subtract(a, b){
    return a -b;
}

function multiply(a, b){
    return a*b;
}

function divide( a, b){
    // if(b==0){
    //     console.log<<"Error : Division by zero"
    // }
    return a/b;
}

//Variables
let firstNumber ;
let SecondNumber;
let Operator;

function operate(firstNumber, SecondNumber, Operator){
    if(Operator=='x'){
        multiply(firstNumber,SecondNumber);
    }
    else if(Operator== "+"){
        add(firstNumber, SecondNumber);
    }
    else if(Operator == "÷"){
        divide(firstNumber, SecondNumber);
    }
    else if(Operator == "-"){
        subtract(firstNumber, SecondNumber);
    }
}

//Buttons
const numbers = document.querySelectorAll(".btn");
const operation = document.querySelectorAll(".btn2");
const display = document.querySelector(".text");
const clearBtn = document.querySelector(".longBtn");
function addText(text){
    display.textContent += text;
}
numbers.forEach((e)=>{
    e.addEventListener('click', (e)=>{
        let text = e.currentTarget.textContent;
        addText(text);
    })
});
operation.forEach((e)=>{
    e.addEventListener('click', (e)=>{
        let text = e.currentTarget.textContent;
        addText(text);
    })
});

clearBtn.addEventListener('click',()=>{
    display.textContent = "";
})