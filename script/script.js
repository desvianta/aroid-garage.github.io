const nav = document.getElementById("slide");
// hamburgermenu di klik
document.querySelector("#menu").onclick = () => {
  nav.classList.toggle("active");
};

const menu = document.querySelector("#menu");

document.addEventListener("click", function (e) {
  if (!menu.contains(e.target) && !nav.contains(e.target)) {
    nav.classList.remove("active");
  }
});
