const categories = document.querySelectorAll(".item");
console.log("Number of categories:", categories.length);

const result = categories.forEach((element) => {
  console.log("Category:", element.querySelector("h2").textContent);
  console.log("Elements:", element.querySelectorAll("li").length);
});
