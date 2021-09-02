const equal = document.querySelector(".equal");
const numbers = document.querySelectorAll(".number");
const operators = document.querySelectorAll(".operator");
const display = document.querySelector(".display-container");
const clearBtn = document.querySelector(".clear");
const inverseBtn = document.querySelector(".btn-plus-minus");
const backspaceBtn = document.querySelector(".btn-backspace");

const data = {
  x: '',
  y: '',
  operator: ''
};

operators.forEach(operator => {
  operator.addEventListener("click", (e) => {
    if (data.x && data.y) {
      let result = operate(data.x, data.y, data.operator);
      updateDisplay(result);
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
    updateDisplay(data.x)
  } else {
    data.y += e.target.value;
    updateDisplay(data.y)
  }
}))

equal.addEventListener("click", (e) => {
  if (data.x && data.y && data.operator) {
    let result = operate(data.x, data.y, data.operator);
    updateDisplay(result);
    resetCalculator();

  }
})

clearBtn.addEventListener("click", (e) => {
  updateDisplay(0);
  resetCalculator();
})

inverseBtn.addEventListener("click", (e) => {
  if (data[getCurrent()]) {
    if (data[getCurrent()].includes("-")) {
      data[getCurrent()] = data[getCurrent()].slice(1);
      updateDisplay(data[getCurrent()])
      return;
    }
    data[getCurrent()] = "-" + data[getCurrent()];
    updateDisplay(data[getCurrent()])
  }
})

backspaceBtn.addEventListener("click", (e) => {
  data[getCurrent()] = data[getCurrent()].substring(0, data[getCurrent()].length-1);
  updateDisplay(data[getCurrent()])
})

function updateDisplay(value) {
  display.textContent = value || 0;
}

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


function getCurrent() {
  return data.y || data.operator ? 'y' : 'x';
}