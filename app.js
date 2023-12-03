const display1 = document.querySelector('.display1');
const display2 = document.querySelector('.display2');
const tempResult = document.querySelector('.temp-result');
const numberBtn = document.querySelectorAll('.number');
const operetorBtn = document.querySelectorAll('.operation');
const equalBtn = document.querySelector('.equal');
const clearAll = document.querySelector('.clear-all');
const removeLastNumber = document.querySelector('.del');

let display1Num = '';
let display2Num = '';
let result = null;
let lastOperation = '';
let dotPresent = false;

numberBtn.forEach(number => {
    number.addEventListener('click', (e) => {
      if(e.target.innerText === '.' && !dotPresent){
        dotPresent = true;
      }else if(e.target.innerText === '.' && dotPresent){
        return;
      }
      display2Num += e.target.innerText;
      display2.innerText = display2Num; 
    })
})

operetorBtn.forEach(operetor => {
    operetor.addEventListener('click', (e) =>{
        if(!display2Num) return;
        dotPresent = false;
        const operetorName = e.target.innerText;
        if(display1Num && display2Num && lastOperation){
          mathOperation();
        }else{
            result = parseFloat(display2Num);
        }
        clearNums(operetorName);
        console.log(result);

    })
});

function clearNums(name = ''){
    display1Num += display2Num + ' ' + name + ' ';
    display1.innerText = display1Num;
}