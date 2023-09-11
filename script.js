const daysOfTheWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
let currentDayElement = document.querySelector('[data-testid=currentDayOfTheWeek]');
let currentUTCTimeElement = document.querySelector('[data-testid=currentUTCTime]');

const getDay = () => {
    const day = new Date();
    const dayName = daysOfTheWeek[day.getDay()];
    currentDayElement.textContent = dayName
    return dayName;
}

const getUTCTime = () => {
    const currentTime = new Date();
    const year = currentTime.getFullYear();
    const month = currentTime.getMonth();
    const day = currentTime.getDate();
    const currentTimeInUTC = Date.UTC(year, month, day);;
    currentUTCTimeElement.textContent = currentTimeInUTC;
}

getDay();
getUTCTime();