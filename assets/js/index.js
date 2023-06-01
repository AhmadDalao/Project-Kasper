console.log("yo im working");

let toggleMenu = document.querySelector(".toggle-menu");
let menuItems = document.querySelectorAll(".list-item > a");
console.log(menuItems);

toggleMenu.addEventListener("click", showList);

function showList() {
    document.querySelector(".nav-list").classList.toggle("show-list");
}

// menuItems.forEach(element => {
//     element.addEventListener("click", showList);
// });