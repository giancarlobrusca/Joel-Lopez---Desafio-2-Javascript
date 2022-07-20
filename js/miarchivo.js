const alert = document.getElementById('alert');
const total = document.getElementById('total');
let totalNumber = 0;

function addProduct({ name, price }) {
  totalNumber += price;
  alert.textContent = `Successfully added ${name}`
  total.textContent = totalNumber;
}

total.textContent = totalNumber;