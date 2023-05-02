document.body.appendChild(getSumBtn);

const getSum = () => {
//Add your code here

  getSumBtn.disabled = true;
  const prices = document.querySelectorAll(".price");
  let totalPrice = 0;
  prices.forEach((price) => {
    const value = parseInt(price.textContent);
    if (!Number.isNaN(value)) {
      totalPrice += value;
    }
  });
  const totalPriceRow = document.createElement("tr");
  totalPriceRow.id = "ans";
  const totalPriceData = document.createElement("td");
  const totalPriceAns = document.createElement("td");
  totalPriceRow.appendChild(totalPriceData);
  totalPriceRow.appendChild(totalPriceAns);
  const data = `Total Price (in Rs): `;
  totalPriceData.append(data);
  totalPriceAns.append(`${totalPrice}`);
  const table = document.querySelector("tbody");
  table.appendChild(totalPriceRow);
};

getSumBtn.addEventListener("click", getSum);