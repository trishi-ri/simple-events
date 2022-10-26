const jumpClass = "jump";
const shakeClass = "shake";
const object = document.querySelector("#object");
let cold = 0;

const jump = () => {
  if (!object.classList.contains(jumpClass)) {
    object.classList.add(jumpClass);
    if (cold > 0) {
      cold -= 2;
    }
    setTimeout(() => object.classList.remove(jumpClass), 500);
  }
};
object.addEventListener("click", jump);

let isHoverTime = false;
let isHover = false;
let x = 0;
let y = 0;
const maxCX = 85;
const minCX = 14;

object.addEventListener("mouseover", (e) => {
  x = e.offsetX;
  y = e.offsetY;
  if (isHoverTime) {
    isHover = true;
  }
});
object.addEventListener("mousemove", (e) => {
  if (isHover) {
    const newCX = Number(object.getAttribute("cx") - (x - e.offsetX) * 10);
    if (newCX <= maxCX && newCX >= minCX) {
      object.setAttribute("cx", newCX);
    } else {
      jump();
    }
    x = e.offsetX;
    y = e.offsetY;
  }
});
object.addEventListener("mouseleave", (e) => {
  if (isHover) {
    isHover = false;
    x = 0;
    y = 0;
  }
});

setInterval(() => {
  const currentDate = new Date();
  const currentMinutes = currentDate.getMinutes();

  const isJumpTime = currentMinutes % 2 === 0;
  isHoverTime = currentMinutes % 3 === 0;

  if (isJumpTime) {
    jump();
  }
}, 60000);

const shakeOn = () => {
  object.classList.add(shakeClass);
};
const shakeOff = () => {
  object.classList.remove(shakeClass);
};

setInterval(() => {
  const isRain = weather.classList.contains("rain");
  const isSnow = weather.classList.contains("snow");
  if (isRain || isSnow) {
    cold += isSnow ? 2 : 1;
    if (cold > 10) {
      shakeOn();
    } else {
      shakeOff();
    }
  } else {
    cold = 0;
    shakeOff();
  }
}, 1000);
