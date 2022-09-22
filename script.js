const rates = document.querySelectorAll(".rate ul li");
let choice = document.getElementById("number");
const button = document.querySelector("button");

rates.forEach((rate) => {
  rate.addEventListener("click", () => {
    rates.forEach((rate) => {
      rate.classList.remove("selected");
    });
    rate.classList.toggle("selected");
    choice.innerHTML = `${rate.innerHTML}`;
  });
});

button.addEventListener("click", () => {
  document.querySelector(".box.thank").style.display = "flex";
  document.querySelector(".box").style.display = "none";
});
