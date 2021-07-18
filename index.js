console.log("Working")
a = new Date();
console.log(a)

const alarmSubmit = document.getElementById('alarmSubmit');

// Add an event listener to the submit button

alarmSubmit.addEventListener('click', setAlarm);

var audio = new Audio ("https://www.soundjay.com/misc/sounds/bell-ringing-01c.mp3");

// function to play the alarm ring tone
function ringBell() {
    audio.play();
}

// This function will run whenever alarm is set from the UI
function setAlarm(e) {
    e.preventDefault();
    const alarm = document.getElementById('alarm');
    alarmDate = new Date(alarm.value);
    console.log(`Setting alarm for ${alarmDate}...`)
    now = new Date();

    let timeToAlarm = alarmDate - now;
    console.log(timeToAlarm);
    if (timeToAlarm >=0) {
        setTimeout(() => {
            console.log("Ringing Bell");
            ringBell();
        }, timeToAlarm);
    }
    else{
        console.log('Not Possible to set alarm for previous Date..')
    }
}
