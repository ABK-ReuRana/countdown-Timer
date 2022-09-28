const daysEl=document.getElementById("days");
const hoursEl=document.getElementById("hours");
const minsEl=document.getElementById("mins");
const secondsEl=document.getElementById("seconds");
const displayText=document.querySelector(".whatIS");

// for current year
const thisYear=new Date().getFullYear();
const newYearEve=`31 Dec ${thisYear}`;

function countDown(){
    const newYearDate=new Date(newYearEve);
    const currentDate=new Date();

    const totalSeconds=Math.floor((newYearDate - currentDate)/1000);

    const seconds=totalSeconds % 60;
    const minutes=(Math.floor(totalSeconds/60) % 60);

    const hours=(Math.floor(totalSeconds/3600) % 24);
    const days=(Math.floor(totalSeconds/3600/24));
    console.log(days, hours,minutes, seconds);

    daysEl.innerHTML=days;
    hoursEl.innerHTML=formatTime(hours);
    minsEl.innerHTML=formatTime(minutes);
    secondsEl.innerHTML=formatTime(seconds);

    if(days === 0){
        displayText.textContent='Today is New Year Eve';
        clearInterval(intrval);
    }
}

function formatTime(time){
  return time < 10 ? `0${time}` : time;
}

countDown();
const intrval=setInterval(countDown, 1000);