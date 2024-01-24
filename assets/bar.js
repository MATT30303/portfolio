const toggle = document.getElementById("toggleBtn");
const arrow = document.querySelector("#arrow");
const cardImg = document.getElementById("aboutMeImg");
const card = document.getElementById("cardAboutMe");

toggle.addEventListener("click", (e) => {
  document.getElementById("bar").classList.toggle("active");
});

cardImg.addEventListener("click", (e) => {
  console.log("que barbaro");
  cardImg.classList.toggle("active");
  card.classList.toggle("active");
});
