import { weatherData } from "./data/weather_data.js"

init()

function init() {
  const mainDataArray = ['humidity', 'pressure', 'visibility']
  for (let i = 0; i < mainDataArray.length; i++) {
    getMainData(mainDataArray[i])
  }
  getTime('sunrise')
  getTime('sunset')
  getWind()
}

function getMainData(data) {
  document.querySelector(`.js-${data}Value`).textContent = weatherData[data].value
  if (weatherData[data].barDetail) {
    document.querySelector(`.js-${data}BarDetail`).textContent = weatherData[data].barDetail
  }
  addProgressValue(data)
}

function addProgressValue(data) {
  const range = document.getElementById(`${data}-range`)
  const maskPosition = (weatherData[data].value - weatherData[data].minValue) / (weatherData[data].maxValue - weatherData[data].minValue) * 100
  const height = 2 + 0.5 * document.querySelector('.progress-circle').offsetWidth
  range.style.mask = `radial-gradient(circle at calc(${maskPosition}%), transparent ${height}px, black ${height}px, black ${height}px)`
  const circle = document.querySelector(`#${range.id} + .progress-circle`)
  circle.style.left = `calc(${maskPosition}%)`
}

function getTime(time) {
  const dataValue = document.querySelector(`.js-${time}Value`)
  const dataTime = document.querySelector(`.js-${time}Time`)
  dataValue.textContent = weatherData[time].value
  dataValue.setAttribute("datetime", weatherData[time].value)
  dataTime.textContent = weatherData[time].time
  dataTime.setAttribute("datetime", weatherData[time].time)
}

function getWind() {
  document.querySelector('.js-windValue').textContent = weatherData.wind.value
  document.querySelector('.js-windDirection').textContent = weatherData.wind.direction
}
