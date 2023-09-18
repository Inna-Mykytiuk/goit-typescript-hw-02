/*
  Створіть функцію (isWeekend), яка приймає день тижня (з вашого enum)
  і повертає boolean значення, що вказує, чи це день робочий чи вихідний.
*/

enum DayOfTheWeek {
  Moday = 1,
  Tuesday = 2,
  Wednesday = 3,
  Thursday = 4,
  Friday = 5,
  Saturday = 6,
  Sunday = 7,
}

function isWeekend(day: DayOfTheWeek): Boolean {
  return day === DayOfTheWeek.Saturday || day === DayOfTheWeek.Sunday;
}

const today = DayOfTheWeek.Saturday || DayOfTheWeek.Sunday;
const isTodayWeekend = isWeekend(today);

if (isTodayWeekend) {
  console.log('Сьогодні вихідний день!');
} else {
  console.log('Сьогодні робочий день.');
}