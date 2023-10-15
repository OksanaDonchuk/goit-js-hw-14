const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ingredientsElem = document.querySelector("#ingredients");
const ingredientsMarkup = [];

function createMarkup(ingredients) {
  ingredients.map((elem) => {
    const item = document.createElement("li");
    item.textContent = elem;
    item.classList.add("item");
    ingredientsMarkup.push(item);
  });
  ingredientsElem.append(...ingredientsMarkup);
}

createMarkup(ingredients);
