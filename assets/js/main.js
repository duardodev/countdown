const daysElement = document.getElementById("days");
const hoursElement = document.getElementById("hours");
const minutesElement = document.getElementById("minutes");
const secondsElement = document.getElementById("seconds");

function countdown() {
  let numberDays = 08;
  let numberHours = 12;
  let numberMinutes = 44;
  let numberSeconds = 28;
  let speed = 1000;

  let seconds = setInterval(() => {
    if (numberSeconds < 10) {
      secondsElement.innerText = `0${numberSeconds}`
    } else {
      secondsElement.innerText = numberSeconds;
    }

    numberSeconds--

    if (numberSeconds === -1) {
      numberSeconds = 59;
    }
  }, speed);

  let minutes = setInterval(() => {
    if (numberMinutes < 10) {
      minutesElement.innerText = `0${numberMinutes}`
    } else {
      minutesElement.innerText = numberMinutes;
    }

    if (numberSeconds === 59) {
      numberMinutes--
    }
    if (numberMinutes === -1) {
      numberMinutes = 59;
    }
  }, speed)

  let hours = setInterval(() => {
    if (numberHours < 10) {
      hoursElement.innerText = `0${numberHours}`
    } else {
      hoursElement.innerText = numberHours;
    }

    if (numberSeconds == 59 && numberMinutes == 59) {
        numberHours--
    }
    if (numberHours === -1) {
      numberHours = 23;
    }
  }, speed)

  let days = setInterval(() => {
    if (numberDays < 10) {
      daysElement.innerText = `0${numberDays}`
    } else {
      daysElement.innerText = numberDays;
    }

    if (numberSeconds === 59 && numberMinutes === 59 && numberHours === 23) {
      numberDays--
    }
  }, speed)

  setInterval(() => {
    if (numberDays === 0 && numberHours === 0 && numberMinutes === 0 && numberSeconds === 0) {
      clearInterval(seconds);
      clearInterval(minutes);
      clearInterval(hours);
      clearInterval(days);

      setTimeout(() => {
        secondsElement.innerText = "00"
      }, speed)
    }
  }, speed);
}

countdown();
