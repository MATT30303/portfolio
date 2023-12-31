const toggle = document.getElementById("toggleBtn");

toggle.addEventListener("click", (e) => {
  document.getElementById("bar").classList.toggle("active");
});
