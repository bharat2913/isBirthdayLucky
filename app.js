const dateOfBirth = document.querySelector('#dateOfBirth');
const luckyNumber = document.querySelector('#luckyNumber');
const checkNumber = document.querySelector('#checkNumber');
const output = document.querySelector('#output');

function checkNumberIsLucky() {
  const dob = dateOfBirth.value;
  const sum = calculateSum(dob);
  compareValues(sum, luckyNumber.value);
}

function compareValues(sum, luckyNumber) {
  if (sum % luckyNumber === 0) {
    output.value = 'Your Birthday is Lucky';
  } else {
    output.value = 'Your Birthday is not Lucky';
  }
}

function calculateSum(dob) {
  dob = dob.replaceAll('-', '');
  let sum = 0;

  for (let i = 0; i < dob.length; i++) {
    sum = sum + Number(dob.charAt(i));
  }
  return sum;
}

checkNumber.addEventListener('click', checkNumberIsLucky);
