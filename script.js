const equal = document.querySelector(".equal");
const numbers = document.querySelectorAll(".number");
const operators = document.querySelectorAll(".operator");
const display = document.querySelector(".display-container");


const data = {
  x: '',
  y: '',
  operator: ''
};
operators.forEach(operator => {
  operator.addEventListener("click", (e) => {
    if (data.x && data.y) {
      let result = operate(data.x, data.y, data.operator);
      display.textContent = result;
      data.x = result;
      data.y = '';
      data.operator = e.target.value;
      
    } else if (data.x) {
      data.operator = e.target.value;
    }
  })
})

numbers.forEach(numberBtn => numberBtn.addEventListener("click", (e) => {
  if (!data.operator) {
    data.x += e.target.value;
    display.textContent = data.x;
  } else {
    data.y += e.target.value;
    display.textContent = data.y;
  }
}))

equal.addEventListener("click", (e) => {
  if (data.x && data.y && data.operator) {
    let result = operate(data.x, data.y, data.operator);
    display.textContent = result;
    resetCalculator();

  }
})


function resetCalculator () {
  data.x = '';
  data.y = '';
  data.operator = '';
}





add = (x,y) => Number(x) + Number(y);
subtract = (x,y) => Number(x) - Number(y);
multiply = (x,y) => x * y;
divide = (x,y) => x / y;

function operate (x, y, operatorStr) {
  operator = eval(operatorStr);
  console.log(operator(x,y))
  return operator(x,y);
}