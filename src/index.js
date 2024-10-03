import tornado from "./tornado.png"
import "./style.css"
import log from './log.js'

log("Hello World!")

const img = document.createElement('img')
img.src = tornado
document.body.appendChild(img)


// const keyGif = import.meta.env.VITE_GIPHY_API_KEY
// const keyWeather = import.meta.env.VITE_WEATHER_API_KEY
const img = document.getElementById('cat');
const p = document.getElementById('weather');

function getCat()
{
  fetch(`https://api.giphy.com/v1/gifs/translate?api_key=${keyGif}&s=cats`, {})
  .then(function(response) {
    return response.json();
  })
  .then(function(response) {
    img.src = response.data.images.original.url
  }).catch(function(err) {
    console.log(err.message)
    img.src = "#"
  });
}

async function getTheCat()
{
  try {
    let response = await fetch(`https://api.giphy.com/v1/gifs/translate?api_key=${keyGif}&s=cats`, {})
    let responseJSON = await response.json()
    img.src = responseJSON.data.images.original.url
  }
  catch (err) {
    console.log(err.message)
  }

}

fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/ankara?unitGroup=metric&key=${keyWeather}&contentType=json`, {
  "method": "GET",
  "headers": {
  }
  })
.then(response => {
  return response.json();
})
.then(response => {
  p.textContent = response.days[0].conditions
})
.catch(err => {
  console.error(err);
});

getCat()

const button = document.getElementById("get")
button.addEventListener("click", () => getTheCat())
