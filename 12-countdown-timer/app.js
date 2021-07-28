const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const weekdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const giveaway = document.querySelector('.giveaway');
const deadline = document.querySelector('.deadline');
const items = document.querySelectorAll('.deadline-format h4');
// console.log(items);

// vars for adding +10 days to the current date
let tempDate = new Date();
let tempYear = tempDate.getFullYear();
let tempMonth = tempDate.getMonth();
let tempDay = tempDate.getDate();
console.log(tempDay)

//                          Year Month Day Hours Seconds 
// let futureDate = new Date(2021, 7, 19, 19, 30, 0);
const futureDate = new Date(tempYear, tempMonth, tempDay + 10, 15, 13, 0)
// console.log(futureDate);

const year = futureDate.getFullYear();
const hours = futureDate.getHours();
const minutes = futureDate.getMinutes();

let month = futureDate.getMonth();
// console.log(month); // --> 0-11
month = months[month];

// Day
const day = futureDate.getDate();
// console.log(day); // 0-30

// Weekday
let weekday = futureDate.getDay();
// console.log(weekday); // --> 0-6
weekday = weekdays[weekday];

giveaway.textContent = `giveaway ends on ${weekday}, ${day} ${month} ${year} ${hours}:${minutes}am`;

const futureTime = futureDate.getTime();
// console.log(futureTime);

function getRemainingTime() {
  const today = new Date().getTime();
  // console.log(today);
  const t = futureTime - today;
  // console.log(t);
  // 1s = 1000ms
  // 1m = 60s
  // 1hr = 60min
  // 1d = 24hr

  // values in ms
  const oneDay = 24 * 60 * 60 * 1000;
  const oneHour = 60 * 60 * 1000;
  const oneMinute = 60 * 1000;

  let days = t / oneDay;
  // console.log(days);
  days = Math.floor(days);

  let hours = Math.floor((t % oneDay) / oneHour);
  // console.log(hours);
  let minutes = Math.floor((t % oneHour) / oneMinute);
  let seconds = Math.floor((t % oneMinute) / 1000);

  // set values array
  const values = [days, hours, minutes, seconds];

  // adding '0' before 1-digit numbers 
  const format = (item) => item < 10 ? item = `0${item}` : item;

  // formatting
  items.forEach((item, index) => item.innerHTML = format(values[index]));

  if (t < 0) {
    clearInterval(countdown);
    deadline.innerHTML = `<h4 class="expired">sorry, this giveaway has expired</h4>`;
  }

}

// countdown
let countdown = setInterval(getRemainingTime, 1000);
getRemainingTime(); // --> to exucute first time