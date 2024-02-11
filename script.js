const parentCategory = document.getElementById("parent-category");
const toggleButton = document.getElementById("toggle-button");

toggleButton.addEventListener("click", function () {
  const parentCategory = document.getElementById("parent-category");

  if (parentCategory.style.display === "block") {
    parentCategory.style.display = "none";
  } else {
    parentCategory.style.display = "block";
  }
});



const fetchApi = async () => {
  const data = await fetch("https://fakestoreapi.com/products/categories");
  const dataCategory = await data.json();
  console.log(dataCategory);
};

fetchApi();
