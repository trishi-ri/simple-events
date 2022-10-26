const previousVisitsFromStore = localStorage.getItem("visits");
if (previousVisitsFromStore) {
  const previousVisits = JSON.parse(previousVisitsFromStore);
  const reversetVisits = [...previousVisits].reverse();
  reversetVisits.forEach((visit) => {
    const item = document
      .querySelector("#visits")
      .appendChild(document.createElement("li"));
    item.innerText = new Date(visit).toLocaleString();
  });

  const startOfDay = new Date();
  startOfDay.setHours(0, 0, 0, 0);

  const timeStartOfDay = startOfDay.getTime();
  const msInDay = 1000 * 3600 * 24;

  const daysFromNow = reversetVisits.map((visit) => {
    const visitDate = new Date(visit);
    visitDate.setHours(0, 0, 0, 0);
    const timeDiff = Math.abs(timeStartOfDay - visitDate.getTime());
    return timeDiff < msInDay ? 0 : Math.ceil(timeDiff / msInDay);
  });

  const lastDayInRow = daysFromNow.find((dayFromNow, index) => {
    const isDayInRow = dayFromNow === index;
    if (isDayInRow && reversetVisits.length === index - 1) {
      return true;
    }
    const nextDayFromNow = daysFromNow[index + 1];
    return isDayInRow && nextDayFromNow !== index + 1;
  });

  const [lastVisit] = reversetVisits;
  const timeDiff = Math.abs(timeStartOfDay - new Date(lastVisit).getTime());
  if (lastDayInRow > 0) {
    document.querySelector("#visitRow").innerText =
      "Дней подряд: " + (lastDayInRow + 1);
  } else {
    const diffDays = Math.ceil(timeDiff / msInDay);
    document.querySelector("#visitRow").innerText =
      "Дней с последнего визита: " + diffDays;
  }
}

window.addEventListener("beforeunload", () => {
  const visitsFromStore = localStorage.getItem("visits");
  if (visitsFromStore) {
    let visits = JSON.parse(visitsFromStore);
    const currentDate = new Date();
    const previousTodayVisit = visits.find(
      (visit) =>
        new Date(visit).toLocaleDateString() ===
        currentDate.toLocaleDateString()
    );
    if (previousTodayVisit) {
      visits = visits.filter((visit) => visit !== previousTodayVisit);
    }
    visits.push(currentDate.toISOString());
    localStorage.setItem("visits", JSON.stringify([...visits]));
  } else {
    localStorage.setItem("visits", JSON.stringify([new Date().toISOString()]));
  }
});
