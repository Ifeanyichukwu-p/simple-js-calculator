const display1 = document.querySelector('.display1');
const display2 = document.querySelector('.display2');
const tempResult = document.querySelector('.temp-result');
const numberBtn = document.querySelectorAll('.number');
const operetorBtn = document.querySelectorAll('.operation');
const equalBtn = document.querySelector('.equal');
const clearAll = document.querySelector('.clear-all');
const clearLastNum = document.querySelector('.del');

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
        lastOperation = operetorName;
        console.log(result);

    })
});

function clearNums(name = ''){
    display1Num += display2Num + ' ' + name + ' ';
    display1.innerText = display1Num; 
    display2.innerText = '';
    display2Num = '';
    tempResult.innerText = result;

}

function mathOperation(){
  if(lastOperation === 'x'){
    result = parseFloat(result) * parseFloat(display2Num);
  }else if(lastOperation === '+'){
    result = parseFloat(result) + parseFloat(display2Num);

  }else if(lastOperation === '-'){
    result = parseFloat(result) - parseFloat(display2Num);

  }else if(lastOperation === '/'){
    result = parseFloat(result) / parseFloat(display2Num);

  }else if(lastOperation === '%'){
    result = parseFloat(display2Num/100);

  }
}

equalBtn.addEventListener('click', (e) => {
  if(!display1Num || !display2Num)return; 
  dotPresent = false;
  mathOperation();
  clearNums();
  display2.innerText = parseFloat(result);
  tempResult.innerText ='';
  display2Num = parseFloat(result);
  display1Num = '';
})   

clearAll.addEventListener('click', (e) => {
  display1.innerText = '';
  display2.innerText = '0';
  display1Num = '';
  display2Num = '';
  result = '';
  tempResult.innerText = '';

})

clearLastNum.addEventListener('click', (e) => {
  display2.innerText = '';
  display2Num = '';
});