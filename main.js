const daysEl = document.getElementById('days')
const hoursEL = document.getElementById('hours')
const minsEl = document.getElementById('min')
const secEL = document.getElementById('sec')

const getToDate = ("12 Sep 2023")

function countdown() {
    const newYearDate = new Date(getToDate);
    const currentDate = new Date();

    // copy paste data not memorizable 

    const Allsec = (newYearDate - currentDate) / 1000;

    const days = Math.floor(Allsec / 3600 / 24);
    const hours = Math.floor(Allsec / 3600) % 24;
    const min = Math.floor(Allsec / 60) % 60;
    const sec = Math.floor(Allsec) % 60;

    daysEl.innerHTML = days;
    hoursEL.innerHTML = formatTime(hours);
    minsEl.innerHTML = formatTime(min);
    secEL.innerHTML = formatTime(sec);

}
function formatTime(time) {
    return time < 10 ? `0${time}` : time;
}

countdown()

setInterval(countdown, 1000)