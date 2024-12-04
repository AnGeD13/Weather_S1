const inputCity = document.querySelector(".header__input");
const inputBtn = document.querySelector(".header__button");
const form = document.querySelector('.header__search')

const CLOSE_BTN_STATE = "header__button_close";
const DEFAULT_STATE = "";

inputCity.addEventListener("input", (event) => {
  console.log(event.target.value);
});

inputCity.addEventListener("focus", () => {
  addSearchState();
});

inputCity.addEventListener("blur", () => {
  if (inputCity.value.length === 0) {
    removeSearchState();
  }
});

form.addEventListener("submit", (event) => {
  event.preventDefault();
  removeSearchState();
  inputCity.value = DEFAULT_STATE;
});

function removeSearchState() {
  inputBtn.classList.remove(CLOSE_BTN_STATE);
  inputBtn.setAttribute("disabled", "true")
}

function addSearchState() {
  inputBtn.classList.add(CLOSE_BTN_STATE)
  inputBtn.removeAttribute("disabled")
}
