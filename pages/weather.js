const weather = document.querySelector("#weather");

for (let moveY = 0; moveY < 7; moveY++) {
  const oddLine = moveY % 2;
  const rineDropLine = moveY % 3;
  for (let moveX = 0; moveX < 6 + oddLine; moveX++) {
    const raindrop = document.createElementNS(
      "http://www.w3.org/2000/svg",
      "rect"
    );
    raindrop.classList.add("raindrop-" + rineDropLine);
    raindrop.setAttribute("x", (moveX + 1) * 14 - oddLine * 5);
    raindrop.setAttribute("y", moveY * 14);
    raindrop.setAttribute("rx", 5);
    weather.appendChild(raindrop);
  }
}

for (let moveY = 1; moveY < 7; moveY++) {
  const oddLine = moveY % 2;
  const rineDropLine = moveY % 3;
  for (let moveX = 0; moveX < 6 + oddLine; moveX++) {
    const snowflake = document.createElementNS(
      "http://www.w3.org/2000/svg",
      "circle"
    );
    snowflake.classList.add("snowflake-" + rineDropLine);
    snowflake.setAttribute("cx", (moveX + 1) * 14 - oddLine * 5);
    snowflake.setAttribute("cy", moveY * 14);
    snowflake.setAttribute("r", 2);
    weather.appendChild(snowflake);
  }
}

let rainTime = 0;
let snowTime = 0;
try {
  switch (currentSeason) {
    case winterClass:
      rainTime = 3;
      snowTime = 2;
      break;
    case springClass:
      rainTime = 4;
      snowTime = 0;
      break;
    case summerClass:
      rainTime = 5;
      snowTime = 0;
      break;
    case autumnClass:
      rainTime = 2;
      snowTime = 0;
      break;
  }
} catch (error) {
  console.log(error);
}

let isRainTime = new Date().getMinutes() % rainTime === 0;
let isSnowTime = new Date().getMinutes() % snowTime === 0;

const updateWeatherTime = () => {
  isRainTime = new Date().getMinutes() % rainTime === 0;
  isSnowTime = new Date().getMinutes() % snowTime === 0;
};

const showRain = () => {
  weather.removeAttribute("class");
  weather.classList.add("rain");
};
const showSnow = () => {
  weather.removeAttribute("class");
  weather.classList.add("rain");
};

const updateWeather = () => {
  updateWeatherTime();
  if (isRainTime) {
    showRain();
  } else if (isSnowTime) {
    showSnow();
  } else {
    weather.removeAttribute("class");
  }
};

updateWeather();
setInterval(updateWeather, 60000);
