import "./style.css"
import l from './logger.js'

import clearDay from "./icons/clear-day.svg"
import clearNight from "./icons/clear-night.svg"
import cloudy from "./icons/cloudy.svg"
import fog from "./icons/fog.svg"
import hail from "./icons/hail.svg"
import partlyCloudyDay from "./icons/partly-cloudy-day.svg"
import partlyCloudyNight from "./icons/partly-cloudy-night.svg"
import rainSnowShowersDay from "./icons/rain-snow-showers-day.svg"
import rainSnowShowersNight from "./icons/rain-snow-showers-night.svg"
import rainSnow from "./icons/rain-snow.svg"
import rain from "./icons/rain.svg"
import showersDay from "./icons/showers-day.svg"
import showersNight from "./icons/showers-night.svg"
import sleet from "./icons/sleet.svg"
import snowShowersDay from "./icons/snow-showers-day.svg"
import snowShowersNight from "./icons/snow-showers-night.svg"
import snow from "./icons/snow.svg"
import thunderRain from "./icons/thunder-rain.svg"
import thunderShowersDay from "./icons/thunder-showers-day.svg"
import thunderShowersNight from "./icons/thunder-showers-night.svg"
import thunder from "./icons/thunder.svg"
import wind from "./icons/wind.svg"
// import { get } from "@dotenvx/dotenvx";

const days = ["Sunday", "Monday", "Tuesday", "Wednesday", 
  "Thursday", "Friday", "Saturday"]

const p = document.getElementById('weather');

const metrics = document.getElementById('metrics')
metrics.addEventListener("click", () => changeMetrics())
let tempUnit = " °C"
let longDistanceUnit = " km"
let speedUnit = " kph"

function changeMetrics() 
{
  let url = ""
  switch(metrics.value) {
    case "metric":
      url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/ankara/next7days?unitGroup=metric&key=${process.env.WEATHER_API_KEY}&contentType=json`
      tempUnit = " °C"
      longDistanceUnit = " km"
      speedUnit = " kph"
      break
    case "us":
      url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/ankara/next7days?unitGroup=us&key=${process.env.WEATHER_API_KEY}&contentType=json`
      tempUnit = " °F"
      longDistanceUnit = " miles"
      speedUnit = " mph"
      break
    case "uk":
      url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/ankara/next7days?unitGroup=uk&key=${process.env.WEATHER_API_KEY}&contentType=json`
      tempUnit = " °C"
      longDistanceUnit = " miles"
      speedUnit = " mph"
      break
    default:
      url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/ankara/next7days?unitGroup=metric&key=${process.env.WEATHER_API_KEY}&contentType=json`
      break
  }

  getWeather(url)
}


const data = document.getElementsByClassName('data')
const dataContent = document.getElementById('data-content')
const dataDetail = document.getElementsByClassName('test')
const expandButton = document.getElementById('expand')

expandButton.addEventListener('click', () => expandDetails())

function expandDetails()
{
  dataContent.classList.toggle('expanded')
  dataDetail[0].classList.toggle('data-detail')
  data[0].style.height = "fit-content"
  dataDetail[0].style.visibility = !dataDetail[0].style.visibility
  if (expandButton.innerText === "Collapse") 
  {
    expandButton.innerText = "Expand"
  }
  else
  {
    expandButton.innerText = "Collapse"
  }

  l(window.innerWidth)
}

window.addEventListener('resize', checkSize);

function checkSize() {
  l(window.innerWidth)
  if (window.innerWidth > 768) {
    if (expandButton.innerText === "Collapse")
    {
      expandDetails()
    }
  }
  // if (window.innerWidth < 768) {
  //   dataContent.classList.remove('expanded')
  //   dataDetail[0].classList.remove('data-detail')
  //   data[0].style.height = "auto"
  //   dataDetail[0].style.visibility = "hidden"
  //   expandButton.innerText = "Expand"
  // }
}

let defaultUrlWeather = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/ankara/next7days?unitGroup=metric&key=${process.env.WEATHER_API_KEY}&contentType=json`
function getWeather(url)
{
  fetch(url, {
    "method": "GET",
    "headers": {
    }
    })
  .then(response => {
    return response.json();
  })
  .then(response => {
    console.log(response)
    parseTodayWeatherInfoData(response)
    parseTodayWeatherData(response)
    parseWeatherDailyData(response)
  })
  .catch(err => {
    console.error(err);
  });
}
getWeather(defaultUrlWeather)


const input = document.getElementById("location")
input.addEventListener('keypress', (e) => onInputEnter(e));

function onInputEnter(e)
{
  if (e.key === 'Enter')
  {
    let location = e.target.value
    let urlWeather = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?unitGroup=metric&key=${process.env.WEATHER_API_KEY}&contentType=json`
    getWeather(urlWeather)
  }
}

const latitude = document.getElementById('latitude')
const longitude = document.getElementById('longitude')
const resolvedAddress = document.getElementById('resolvedAddress')
const timezone = document.getElementById('timezone')
const description = document.getElementById('description')

const datetime = document.getElementsByClassName('datetime')
const day = document.getElementsByClassName('day')
const temp = document.getElementsByClassName('temp')
const feelslike = document.getElementsByClassName('feelslike')
const humidity = document.getElementsByClassName('humidity')
const dew = document.getElementsByClassName('dew')
const windspeed = document.getElementsByClassName('windspeed')
const pressure = document.getElementsByClassName('pressure')
const visibility = document.getElementsByClassName('visibility')
const cloudcover = document.getElementsByClassName('cloudcover')
const solarradiation = document.getElementsByClassName('solarradiation')
const solarenergy = document.getElementsByClassName('solarenergy')
const uvindex = document.getElementsByClassName('uvindex')
const icon = document.getElementsByClassName('icon')
const sunrise = document.getElementsByClassName('sunrise')
const sunset = document.getElementsByClassName('sunset')
const moonphase = document.getElementsByClassName('moonphase')
const iconImg = document.getElementsByClassName('icon-img')
const dir = document.getElementsByClassName('dir')
const dayName = document.getElementsByClassName('day-name')



function convertDDToDMS(D){
  return [0|D, '° ', 0|(D=(D<0?-D:D)+1e-4)%1*60, "' ", 0|D*60%1*60, '"'].join('');
}


function parseTodayWeatherInfoData(response)
{
  if (response.longitude > 0)
  {
    longitude.textContent = `${convertDDToDMS(response.longitude)} °E)` 
  }
  else
  {
    longitude.textContent = `${convertDDToDMS(response.longitude)} °W)`
  }
  if (response.latitude > 0)
  {
    latitude.textContent = `(${convertDDToDMS(response.latitude)} °N ,` 
  }
  else
  {
    latitude.textContent = `(${convertDDToDMS(response.latitude)} °S ,` 
  }
  resolvedAddress.textContent = response.resolvedAddress
  if (response.tzoffset === 0)
  {
    timezone.textContent = response.timezone + "  (UTC+00)"
  }
  else if (response.tzoffset < 0)
  {
    let offset = Math.abs(response.tzoffset).toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false})
    timezone.textContent = response.timezone + `  (UTC −${offset})`
  }
  else
  {
    let offset = response.tzoffset.toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false})
    timezone.textContent = response.timezone + `  (UTC +${offset})`
  }
  description.textContent = response.description
}

function getCurrentDay()
{
  const day = new Date().getDay()
  return days[day]
}

function getOtherDay(next)
{
  let day = new Date().getDay()
  day = day + next
  if (day > 6)
  {
    day = day - 7
  }
  return days[day]
}


function parseTodayWeatherData(response)
{
  datetime[0].textContent = response.days[0].datetime
  day[0].textContent = getCurrentDay() 
  temp[0].textContent = response.days[0].temp + `${tempUnit}`
  feelslike[0].textContent = response.days[0].feelslike + `${tempUnit}`
  humidity[0].textContent = response.days[0].humidity + " %"
  dew[0].textContent = response.days[0].dew + `${tempUnit}`
  windspeed[0].textContent = response.days[0].windspeed + `${speedUnit}`
  dir[0].setAttribute("transform", `translate(20,20)
     rotate(${response.days[0].winddir})`);
  pressure[0].textContent = response.days[0].pressure + " mb"
  visibility[0].textContent = response.days[0].visibility + `${longDistanceUnit}`
  cloudcover[0].textContent = response.days[0].cloudcover + " % "
  solarradiation[0].textContent = response.days[0].solarradiation + " W/m2"
  solarenergy[0].textContent = response.days[0].solarenergy + " MJ/m2"
  uvindex[0].textContent = response.days[0].uvindex
  selectWeatherIcon(response, 0)
  icon[0].textContent = response.days[0].icon.replace("-", " ")
                  .split(' ')
                  .map(word => word.charAt(0)
                  .toUpperCase() + word.substring(1))
                  .join(' ');
  sunrise[0].textContent = response.days[0].sunrise
  sunset[0].textContent = response.days[0].sunset
  moonphase[0].textContent = response.days[0].moonphase
}

function parseWeatherDailyData(response)
{
  for (let i = 1; i < temp.length; i++)
    {
    dayName[i-1].textContent = getOtherDay(i)
    temp[i].textContent = response.days[i].temp + `${tempUnit}`
    selectWeatherIcon(response, i)
    icon[i].textContent = response.days[i].icon.replace("-", " ")
                    .split(' ')
                    .map(word => word.charAt(0)
                    .toUpperCase() + word.substring(1))
                    .join(' ');
    feelslike[i].textContent = response.days[i].feelslike + `${tempUnit}`
    windspeed[i].textContent = response.days[i].windspeed + `${speedUnit}`
    dir[i].setAttribute("transform", `translate(20,20)
       rotate(${response.days[i].winddir})`);
  }

}

function selectWeatherIcon(response, index)
{
  switch (response.days[index].icon) {
    case "clear-day":
      iconImg[index].src = clearDay
      break
    case "clear-night":
      iconImg[index].src = clearNight
      break
    case "cloudy":
      iconImg[index].src = cloudy
      break
    case "fog":
      iconImg[index].src = fog
      break
    case "hail":
      iconImg[index].src = hail
      break
    case "partly-cloudy-day":
      iconImg[index].src = partlyCloudyDay
      break
    case "partly-cloudy-night":
      iconImg[index].src = partlyCloudyNight
      break
    case "rain-snow-showers-day":
      iconImg[index].src = rainSnowShowersDay
      break
    case "rain-snow-showers-night":
      iconImg[index].src = rainSnowShowersNight
      break
    case "rain-snow":
      iconImg[index].src = rainSnow
      break
    case "rain":
      iconImg[index].src = rain
      break
    case "showers-day":
      iconImg[index].src = showersDay
      break
    case "showers-night":
      iconImg[index].src = showersNight
      break
    case "sleet":
      iconImg[index].src = sleet
      break
    case "snow-showers-day":
      iconImg[index].src = snowShowersDay
      break
    case "snow-showers-night":
      iconImg[index].src = snowShowersNight
      break
    case "snow":
      iconImg[index].src = snow
      break
    case "thunder-rain":
      iconImg[index].src = thunderRain
      break
    case "thunder-showers-day":
      iconImg[index].src = thunderShowersDay
      break
    case "thunder-showers-night":
      iconImg[index].src = thunderShowersNight
      break
    case "thunder":
      iconImg[index].src = thunder
      break
    case "wind":
      iconImg[index].src = wind
      break
    default:
      iconImg[index].src = "#"
  }
}