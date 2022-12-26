const rates = document.querySelectorAll(".rate ul li");
let number = document.getElementById("number");
const button = document.querySelector("button");
let box = document.querySelector(".box");
let box_thanks = document.querySelector(".box.thank");

rates.forEach((rate) => {
  rate.addEventListener("click", () => {
    rates.forEach((rate) => {
      rate.classList.remove("selected");
    });
    rate.classList.toggle("selected");
    number.innerHTML = `${rate.innerHTML}`;
  });
});

button.addEventListener("click", () => {
  box_thanks.style.display = "flex";
  box_thanks.style.transform = "translate(0, 0)";
  box_thanks.style.opacity = "1";
  box.style.display = "none";
});
