console.log("witaj kolego ");
let button = document.querySelector(".js-body__button");
let types = document.querySelector(".js-article__types");

button.addEventListener("click", () => {

    types.classList.toggle("dark");
   

});