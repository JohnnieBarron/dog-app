/*-------------------------------- Constants --------------------------------*/

/*-------------------------------- Variables --------------------------------*/
const displayElement = document.querySelector(`.display`);
const calculator = document.querySelector('#calculator');
let input = ``;
let operator = '';
let firstNum = '';
let secondNum = '';
let result = '';


console.dir(calculator);
/*------------------------ Cached Element References ------------------------*/

/*----------------------------- Event Listeners -----------------------------*/
calculator.addEventListener('click', (event) => {
    const value = event.target.innerText;
  
    if (event.target.classList.contains('number')) {
      input += value;
      displayElement.textContent = input;
    } else if (value === 'C') {
      input = '';
      firstNum = '';
      operator = '';
      displayElement.textContent = '';
    } else if (['+', '-', '*', '/'].includes(value)) {
      firstNum = input;
      operator = value;
      input = '';
    } else if (value === '=') {
      const num1 = parseFloat(firstNum);
      const num2 = parseFloat(input);
  
      let result;
      if (operator === '+') {
        result = num1 + num2;
      } else if (operator === '-') {
        result = num1 - num2;
      } else if (operator === '*') {
        result = num1 * num2;
      } else if (operator === '/') {
        result = num2 !== 0 ? num1 / num2 : 'Error';
      }
  
      displayElement.textContent = result;
  
      // Reset for next calculation
      input = '';
      firstNum = '';
      operator = '';
    }
  });
  console.log(displayElement.textContent);
  


/*-------------------------------- Functions --------------------------------*/




