const objectGradient = document.querySelector("#ObjectGradient");

const sadEmotion = "sad";

const checkSad = () => {
  if (weather.classList.contains("rain")) {
    object.classList.add(sadEmotion);
    objectGradient.classList.add(sadEmotion);
  } else {
    object.classList.remove(sadEmotion);
    objectGradient.classList.remove(sadEmotion);
  }
};

setInterval(checkSad, 1000);
