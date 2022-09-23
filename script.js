const rates = document.querySelectorAll(".rate ul li");
let number = document.getElementById("number");
const button = document.querySelector("button");

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
  document.querySelector(".box.thank").style.display = "flex";
  document.querySelector(".box").style.display = "none";
});
