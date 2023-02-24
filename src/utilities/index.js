// this function will be used to detect whether the input is digit or
// mathetical operator and other action types

export const valueType = value => {
  if (!isNaN(value) || value==='.') {
    return 'digit';
  }

  switch (value) {
    case 'AC':
      return 'clear';
    case '+':
    case '-':
    case '*':
    case '/':
    case '%':
      return 'operation';
    case '=':
      return 'calculate';
    case 'backspace':
      return 'back';
  }
};
