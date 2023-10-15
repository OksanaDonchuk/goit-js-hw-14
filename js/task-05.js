const inputData = document.querySelector("#name-input");
const nameData = document.querySelector("#name-output");

const getInputValue = ({ currentTarget }) => {
  if (currentTarget.value.trim() !== "") {
    nameData.textContent = currentTarget.value.trim();
  } else {
    nameData.textContent = "Anonymous";
  }
};

inputData.addEventListener("input", getInputValue);
