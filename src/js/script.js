const balance = document.querySelector(".chart__balance-amount");
const spendings = document.querySelector(".chart__spending-amount");
const percent = document.querySelector(".chart__percent");
const chartColumns = document.querySelectorAll(".chart__column");

const totalThisMonth = Math.random() * 250 + 250;
let totalThisMonthAfterDeduct = totalThisMonth;
let highestValue = 0;

const setAllBalanceValues = () => {
  const randomBalance = Math.random() * 500 + 500;
  const percentFromLastMonth = Math.random() * 10 + 1;

  balance.textContent = `$${randomBalance.toFixed(2)}`;
  spendings.textContent = `$${totalThisMonth.toFixed(2)}`;
  percent.textContent = `+${percentFromLastMonth.toFixed(1)}%`;

  setValuesOfColumns();
};

const setValuesOfColumns = () => {
  for (let i = 0; i < chartColumns.length; i++) {
    const randomNum = Math.floor(Math.random() * 25 + 10);
    const valueToDeduct = (totalThisMonthAfterDeduct / 100) * randomNum;
    let currentHeightOfColumn;

    if (valueToDeduct > highestValue) {
      highestValue = valueToDeduct;
    }

    totalThisMonthAfterDeduct -= valueToDeduct;
    chartColumns[i].style.height = `${
      (valueToDeduct / totalThisMonth) * 100 * 2.5
    }%`;
    chartColumns[i].firstElementChild.textContent = `$${valueToDeduct.toFixed(
      2
    )}`;

    currentHeightOfColumn = chartColumns[i].firstElementChild.textContent;
    chartColumns[i].id = parseInt(currentHeightOfColumn.slice(1, -1));

    for (let i = 0; i < 7; i++) {
      chartColumns.forEach((column) => {
        if (parseInt(column.id) === parseInt(highestValue)) {
          column.classList.add("cyan-column");
        } else {
          column.classList.remove("cyan-column");
        }
      });
    }
  }
};

setAllBalanceValues();
