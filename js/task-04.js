let counterValue = 0;
const valueData = document.querySelector("#value");
const decrementBtn = document.querySelector('[data-action="decrement"]');
const incrementBtn = document.querySelector('[data-action="increment"]');

const onClickDecrementBtn = (event) => {
  counterValue -= 1;
  valueData.textContent = counterValue;
};

const onClickIncrementBtn = (event) => {
  counterValue += 1;
  valueData.textContent = counterValue;
};

decrementBtn.style.backgroundColor = "orange";
decrementBtn.style.border = "none";
decrementBtn.style.marginRight = "10px";
incrementBtn.style.backgroundColor = "lightgreen";
incrementBtn.style.border = "none";
incrementBtn.style.marginLeft = "10px";

decrementBtn.addEventListener("click", onClickDecrementBtn);
incrementBtn.addEventListener("click", onClickIncrementBtn);
