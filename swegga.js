const femalePrice = 150.95;
const malePrice = 180.95;
const femaleTotalPrice = 0;
const maleTotalPrice = 0;

function calculateTotalFemale() {
  let femaleQuantity = parseFloat(document.getElementById('femaleQuantity').value) || 0;
  let femaleTotalPrice = femalePrice * femaleQuantity;
  document.getElementById('totalPrice').textContent = femaleTotalPrice.toFixed(2);
}

function calculateTotalMale() {
  let maleQuantity = parseFloat(document.getElementById('maleQuantity').value) || 0;
  let maleTotalPrice = malePrice * maleQuantity;
  document.getElementById('totalPrice2').textContent = maleTotalPrice.toFixed(2);
}

function calculateSubtotal() {
  let femaleQuantity = parseFloat(document.getElementById('femaleQuantity').value) || 0;
  let maleQuantity = parseFloat(document.getElementById('maleQuantity').value) || 0;
  let subtotal = femalePrice * femaleQuantity + malePrice * maleQuantity;
  document.getElementById('subTotal').textContent = subtotal.toFixed(2);
}

document.getElementById('femaleQuantity').addEventListener('input', calculateTotalFemale);
document.getElementById('maleQuantity').addEventListener('input', calculateTotalMale);
document.getElementById('col').addEventListener('click', calculateSubtotal);
  