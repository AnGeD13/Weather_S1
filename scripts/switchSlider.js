import { thisDayData } from "./data/thisDayData.js"
import { futureDaysData } from "./data/futureDaysData.js"

const hoursButton = document.querySelector('.js-slider-button-hours')
const daysButton = document.querySelector('.js-slider-button-days')
const sliderSection = document.querySelector('.slider__scroll')

let forHour = ''
let forDays = ''

init()

hoursButton.addEventListener('click', setThisDayData)

daysButton.addEventListener('click', setFutureDaysData)

function init() {
  fillThisDayData()
  fillFutureDaysData()
  sliderSection.innerHTML = forHour
}

function setThisDayData() {
  sliderSection.innerHTML = forHour
  daysButton.classList.remove('slider__header-button_active')
  hoursButton.classList.add('slider__header-button_active')
}

function setFutureDaysData() {
  sliderSection.innerHTML = forDays
  hoursButton.classList.remove('slider__header-button_active')
  daysButton.classList.add('slider__header-button_active')
}

function fillThisDayData() {
  thisDayData.forEach(el => {
    forHour += `
  <li class="slider__card">
    <time datetime=${el.time}>${el.time}</time>
    <img alt="" src=${el.state} width="32" height="32">
    <p>${el.temperature}°</p>
  </li>
  `
  });
}

function fillFutureDaysData() {
  futureDaysData.forEach(el => {
    forDays += `
      <li class="slider__card">
        <p>${el.date}</p>
        <img alt="" src=${el.state} width="32" height="32">
        <p>от ${el.minTemperature}° до ${el.maxTemperature}°</p>
      </li>
    `
  });
}