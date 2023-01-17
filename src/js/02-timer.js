import flatpickr from "flatpickr";
// Додатковий імпорт стилів
import "flatpickr/dist/flatpickr.min.css";


const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
      endDate = selectedDates[0]
      const difTime = endDate - new Date().getTime();
      if (difTime <= 0) {
    window.alert('Please choose a date in the future');
    } else {
      start.disabled = false
    }
   
  
  },
};

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}



function addLeadingZero(value) {
    return String(value).padStart(2, `0`)
}

const input = document.querySelector(`#datetime-picker`);
const start = document.querySelector(`button[data-start]`);
start.disabled = true;
const dataDays = document.querySelector(`.value[data-days]`);

const dataHours = document.querySelector(`.value[data-hours]`);
const dataMinutes = document.querySelector(`.value[data-minutes]`);
const dataSeconds = document.querySelector(`.value[data-seconds]`);


const fr = flatpickr(input, options);
console.log(fr);
let endDate = 0;

start.addEventListener('click', () => {
    input.disabled = true;
    start.disabled = true;
const interv = setInterval(() => {
   
    const currentDate = new Date().getTime();
    const difTime = endDate - currentDate;
    const timeComponents = convertMs(difTime);
    console.log(timeComponents);

    dataDays.textContent = addLeadingZero(timeComponents.days);
    dataHours.textContent = addLeadingZero(timeComponents.hours);
    dataMinutes.textContent = addLeadingZero(timeComponents.minutes);
    dataSeconds.textContent = addLeadingZero(timeComponents.seconds);
    
  

    if (difTime < 1000) {
    input.disabled = false
      start.disabled = false
      
      return clearInterval(interv)
    }


}, 1000);
    
   
})
