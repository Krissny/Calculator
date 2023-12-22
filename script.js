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
    return a/b;
}

//Variables
let firstNumber ='';
let SecondNumber ='';
let Operator = '';

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

//Buttons
const numbers = document.querySelectorAll(".btn");
const operation = document.querySelectorAll(".btn2"); // all the operator button
const display = document.querySelector(".text");
const clearBtn = document.querySelector(".clear");
const backspaceBtn = document.querySelector(".backspace");
const enterBtn =document.querySelector('.enter');
let flag = false;
let flag2 = false;
isDecimal = false;
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
function addText(text){
    display.textContent += text;
};
function resetOperatorsColor(){
    for( let i =0; i<operation.length; i++){
        operation[i].style.backgroundColor ='#59b1b1';
    }
}
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
