const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const monthsOfYear = [
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

const calendar = document.getElementById("calendar");
const prevMonthBtn = document.getElementById("prevMonthBtn");
const nextMonthBtn = document.getElementById("nextMonthBtn");

let currentMonth = new Date().getMonth();
let currentYear = new Date().getFullYear();

prevMonthBtn.addEventListener("click", () => {
  currentMonth--;
  if (currentMonth < 0) {
    currentMonth = 11;
    currentYear--;
  }
  renderCalendar();
});

nextMonthBtn.addEventListener("click", () => {
  currentMonth++;
  if (currentMonth > 11) {
    currentMonth = 0;
    currentYear++;
  }
  renderCalendar();
});

function renderCalendar() {
  calendar.innerHTML = "";

  const today = new Date();
  const currentDay = today.getDate();

  const caption = `${monthsOfYear[currentMonth]} ${currentYear}`;
  document.getElementById("currentMonth").innerText = caption;

  const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
  const firstDayOfWeek = new Date(currentYear, currentMonth, 1).getDay();

  let date = 1;
  let dayIndex = 0;
  let html = '';

  html += '<caption>' + caption + '</caption>';
  html += '<tr>';
  daysOfWeek.forEach(day => {
    html += '<th>' + day + '</th>';
  });
  html += '</tr>';

  for (let i = 0; i < 6; i++) {
    html += '<tr>';
    for (let j = 0; j < 7; j++) {
      if (i === 0 && j < firstDayOfWeek) {
        html += '<td></td>';
      } else if (date > daysInMonth) {
        html += '<td></td>';
      } else {
        const isSelected = (date === currentDay && currentMonth === today.getMonth() && currentYear === today.getFullYear());
        const schedules = getSchedulesForDate(currentYear, currentMonth, date);
        html += '<td' + (isSelected ? ' class="today"' : '') + '>';
        html += '<span class="date">' + date + '</span>';
        if (schedules.length > 0) {
          html += '<ul class="schedules">';
          schedules.forEach(schedule => {
            html += '<li>' + schedule + '</li>';
          });
          html += '</ul>';
        }
        html += '</td>';
        date++;
      }
      dayIndex++;
    }
    html += '</tr>';
  }

  calendar.innerHTML = html;
}

function getSchedulesForDate(year, month, date) {
  
  if (month === 5 && date === 17) { 
    return ["ISA Patterns Test"];
  } else {
    return [];
  }
}


renderCalendar();
