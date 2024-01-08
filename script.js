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
    if(a==0 && b==0){
        return 'UNDEFINED';
    }
    return a/b;
}

//Variables
let firstNumber ='';
let SecondNumber ='';
let Operator = '';



//Buttons
const numbers = document.querySelectorAll(".btn");
const operation = document.querySelectorAll(".btn2"); // all the operator button
const display = document.querySelector(".text");
const clearBtn = document.querySelector(".clear");
const backspaceBtn = document.querySelector(".backspace");
const enterBtn =document.querySelector('.enter');
//flags
let flag = false;
let flag2 = false;
let isDecimal = false;

//keyboard binding

//numbers
const body = document.querySelector("body");
const one = document.getElementById("1");
const two = document.getElementById("2");
const three = document.getElementById("3");
const four = document.getElementById("4");
const five = document.getElementById("5");
const six = document.getElementById("6");
const seven = document.getElementById("7");
const eight = document.getElementById("8");
const nine = document.getElementById("9");
const zero = document.getElementById("0");
const decimal = document.getElementById(".");
//operation
const sum = document.getElementById('+');
const minus = document.getElementById('-');
const mul = document.getElementById('x');
const divi = document.getElementById('÷');

//binding
body.addEventListener('keydown', (e)=>{
    console.log(e.key);
    switch(e.key){
        case '1':
            one.click();
            break;
        case '2':
            two.click();
            break;
        case '3':
            three.click();
            break;
        case '4':
            four.click();
            break;
        case '5':
            five.click();
            break;
        case '6':
            six.click();
            break;
        case '7':
            seven.click();
            break;
        case '8':
            eight.click();
            break;
        case '9':
            nine.click();
            break;
        case '0':
            zero.click();
            break;
        case '+':
        sum.click();
            break;
        case '-':
            minus.click();
            break;
        case '*':
            mul.click();
            break;
        case '/':
            divi.click();
            break;
        case 'Backspace':
            backspaceBtn.click();
            break;
        case 'Decimal':
            decimal.click();
            break;
        case 'Enter':
            enterBtn.click();
            break;
        case 'Alt':
            clearBtn.click();
            break;
        default:
            break;
    }
})

//Utilities function

function addText(text){
    display.textContent += text;
};
function resetOperatorsColor(){
    for( let i =0; i<operation.length; i++){
        operation[i].style.backgroundColor ='#59b1b1';
    }
}
function operate(firstNumber, SecondNumber, Operator){
    
    if(Operator=='x'){
       return multiply(firstNumber,SecondNumber);
    }
    else if(Operator== "+"){
        return add(firstNumber, SecondNumber);
    }
    else if(Operator == "÷"){
        return divide(firstNumber, SecondNumber);
    }
    else if(Operator == "-"){
        return subtract(firstNumber, SecondNumber);
    }
}
//Actual operation calling functions

operation.forEach((e)=>{
    e.addEventListener('click', (e)=>{
        // console.log(e.currentTarget);
        for(let i =0 ;i<operation.length; i++){
            // console.log(operation[i]);
            if(operation[i]== e.currentTarget){
                operation[i].style.backgroundColor = '#437575';
            }
            else{
                operation[i].style.backgroundColor = '#59b1b1';
            }
        }
    })
})
numbers.forEach((e)=>{
    e.addEventListener('click', (e)=>{
        if(flag2 == true){
            display.textContent = "";
            flag2 = false;
        }
        let text = e.currentTarget.textContent;
        if(text == '.' && isDecimal == false){
            addText(text);
            isDecimal = true;
        }
        else if(text!='.'){
            addText(text);
        }
    })
});
operation.forEach((e)=>{
    e.addEventListener('click', (e)=>{
        let text = e.currentTarget.textContent;
        let prevText = display.textContent;
        if(prevText!="" && flag== false){
            firstNumber = prevText;
            Operator = text;
            flag = true;
            display.textContent = "";
        }
        else if(flag == true){
            SecondNumber = prevText;
            let ans = operate(Number(firstNumber),Number(SecondNumber), Operator);
            firstNumber = ans;
            SecondNumber = "";
            Operator = text;
            display.textContent = ans;
            flag2 = true;
        }
        console.log("firstNumber: " + firstNumber);
        console.log("Operator: " +Operator);
        console.log("Calling the operate: " +flag);
    })
});



clearBtn.addEventListener('click',()=>{
    display.textContent = "";
    flag = false;
    isDecimal = false;
    resetOperatorsColor();
});

backspaceBtn.addEventListener('click', ()=>{
    let str = display.textContent;
    let n = str.length;
    if(n > 0){
        display.textContent = str.slice(0,-1);
        if(str[n-1]=='.'){
            isDecimal = false;
        }
    }
})

enterBtn.addEventListener('click', ()=>{
    if(firstNumber!=""){
        let prevText = display.textContent;
        display.textContent = "";
        SecondNumber = prevText;
        let ans = operate(Number(firstNumber),Number(SecondNumber), Operator);
        firstNumber = ans;
        SecondNumber = "";
        display.textContent = ans;
        flag = false;  
        flag2= true;
    }
})
