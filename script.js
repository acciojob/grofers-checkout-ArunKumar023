// Get all the prices
const prices = document.querySelectorAll('.price');

// Calculate the total price
let totalPrice = 0;
prices.forEach(price => {
  totalPrice += parseFloat(price.textContent);
});

// Create a new row with the total price
const table = document.querySelector('table');
const newRow = table.insertRow(-1);
const newCell = newRow.insertCell(0);
newCell.colSpan = 2;
newCell.innerHTML = `Total Price: $${totalPrice.toFixed(2)}`;
