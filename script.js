const leftArrow = document.querySelector("#leftArrow");
const rightArrow = document.querySelector("#rightArrow");

const wrapper = document.querySelector(".card-wrapper");

let scrollAmount = 350;

leftArrow.addEventListener("click", () => {
  wrapper.scrollLeft += scrollAmount;
})

rightArrow.addEventListener("click", () => {
  wrapper.scrollLeft -= scrollAmount;
})

