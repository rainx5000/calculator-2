add = (x,y) => x + y;
subtract = (x,y) => x - y;
multiply = (x,y) => x * y;
divide = (x,y) => x / y;

function operate (x, y, operator) {
  return operator(x,y);
}