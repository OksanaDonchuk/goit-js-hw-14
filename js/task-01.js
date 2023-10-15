const categoriesAll = document.querySelector("#categories");
const categoriesCount = categoriesAll.children.length;
console.log(`Number of categories: ${categoriesCount}`);

const itemsElem = document.querySelectorAll(".item");
itemsElem.forEach((elem) => {
  console.log("Category: ", elem.firstElementChild.textContent);
  console.log("Elements: ", elem.lastElementChild.children.length);
});
