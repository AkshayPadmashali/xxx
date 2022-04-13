//Checks for the re-sizing of navbar, each time we scroll.
window.onscroll = function () {
  scrollFunction();
};

//Function of Resizing
function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    //   smaller size
    document.getElementById("header").style.fontSize = "3.5rem";
    document.getElementById("header").style.padding = "1rem 8rem";
    document.getElementById("header").style.backgroundColor = "black";
    document.getElementById("header").style.zIndex = "100";
  } else {
    //   bigger size
    document.getElementById("header").style.fontSize = "3.5rem";
    document.getElementById("header").style.padding = "3rem 4rem 4rem 4rem";
    document.getElementById("header").style.backgroundColor = "#A2DBFA";
    document.getElementById("header").style.zIndex = "10";
  }
}

//The hamburger toggle function
function toggleMobileMenu(menu) {
  menu.classList.toggle("open");
}

//Adjusts the angle of the letter, in circular movement.
const text = document.querySelector(".akshay-circular-desc p");
text.innerHTML = text.innerText
  .split("")
  .map(
    (char, i) => `<span style="transform:rotate(${i * 8}deg)">${char}</span>`
  )
  .join("");
