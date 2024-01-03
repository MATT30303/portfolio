const toggle = document.getElementById("toggleBtn");
const arrow = document.querySelector("#arrow");

toggle.addEventListener("click", (e) => {
  document.getElementById("bar").classList.toggle("active");
});
