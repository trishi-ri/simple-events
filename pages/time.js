// seasons {
const winterClass = "winter";
const springClass = "spring";
const summerClass = "summer";
const autumnClass = "autumn";
const seasonNames = new Array(2)
  .fill(winterClass)
  .concat(new Array(3).fill(springClass))
  .concat(new Array(3).fill(summerClass))
  .concat(new Array(3).fill(autumnClass))
  .concat([winterClass]);
// seasons }

const morningClass = "morning";
const dayClass = "day";
const eveningClass = "evening";
const nightClass = "night";
const timesNames = new Array(6)
  .fill(nightClass)
  .concat(new Array(6).fill(dayClass))
  .concat(new Array(6).fill(eveningClass))
  .concat(new Array(6).fill(nightClass));

const currentDate = new Date();
const currentMonth = currentDate.getMonth();
const currentHours = currentDate.getHours();

const currentSeason = seasonNames[currentMonth];
const currentTime = timesNames[currentHours];

document.querySelector("#area").classList.add(currentSeason, currentTime);

document.querySelector("#gradientTop").classList.add(currentSeason);
document.querySelector("#gradientBottom").classList.add(currentTime);
