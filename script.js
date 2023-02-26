const daysEl=document.getElementById("days");
const hoursEl=document.getElementById("hours");
const minutesEl=document.getElementById("minutes");
const secondsEl=document.getElementById("seconds");

function countDown(){
    const currentDate=new Date();
const NextYearDate=new Date("1 Jan 2024");
const TotalSecondsLeft=(NextYearDate - currentDate )/1000;
    const days=Math.floor(TotalSecondsLeft / 3600 / 24);
    const hours=Math.ceil((TotalSecondsLeft / 3600 / 24 )%24);
    const minutes=Math.floor(TotalSecondsLeft / 60)%60;
    const seconds=Math.floor(TotalSecondsLeft)%60;
    daysEl.innerText=days;
    hoursEl.innerText=hours;
    minutesEl.innerText=minutes;
    secondsEl.innerText=seconds;


}

setInterval(() => {
    countDown();
}, 1000);