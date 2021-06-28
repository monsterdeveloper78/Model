// sticky nav

let poFix =document.querySelector(".bot-nav");
window.onscroll = function () {
  scrollFunction();
};
function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    poFix.classList.add("fix-nav");
  } else {
    poFix.classList.remove("fix-nav");
  }
}
// hamberger menu

const opeen = document.querySelector(".hamburger-menu");
const navbar = document.querySelector(".bot-nav");
let bgHeader = document.querySelector(".header");
opeen.addEventListener("click", () => {
  navbar.classList.toggle("change");
  bgHeader.classList.toggle("change");
});

