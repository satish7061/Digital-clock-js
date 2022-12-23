function clock() {
    const date = new Date();

    let hours = date.getHours();

    let min = date.getMinutes();

    let sec = date.getSeconds();

    let meridian;
    if (hours > 12) {
        meridian = "PM"
        hours -= 12;
    }
    else {
        meridian = "AM"
    }

    if (hours < 10)
        hours = "0" + hours;

    if (min < 10)
        min = "0" + min;

    if (sec < 10)
        sec = "0" + sec;


    const hoursSlot = document.getElementById("hours")
    hoursSlot.innerHTML = hours;

    const minsSlot = document.getElementById("mins")
    minsSlot.innerHTML = min;

    const secsSlot = document.getElementById("secs")
    secsSlot.innerHTML = sec;

    const meridianSlot = document.getElementById("meridian")
    meridianSlot.innerHTML = meridian;
}

setInterval(() => {
    clock();
}, 1000);


function setAlarm() {
    let wake = document.getElementById("wakeUpTime").value;
    let lunch = document.getElementById("lunchTime").value;
    let nap = document.getElementById("napTime").value;
    let night = document.getElementById("nightTime").value;
    
    let time = new Date();
    if (time.getHours() == wake) {
        document.getElementById("text").innerText = "GOOD MORNING!! WAKE UP !! "
        document.getElementById("imgM").src = "./images/Component.png"
        document.getElementById("imgM").style.borderRadius = "2px"
        document.getElementById("grab").innerText = "GRAB SOME HEALTHY BREAKFAST!!! "
    }
    if (time.getHours() == lunch) {
        document.getElementById("text").innerText = "Good Afternoon !! Take Some Sleep "
        document.getElementById("imgM").src = "./images/Component 31 – 1.svg"
        document.getElementById("imgM").style.borderRadius = "2px"
        document.getElementById("grab").innerText = "Let's Have Some Lunch !! "
    }
    if (time.getHours() == nap) {
        document.getElementById("text").innerText = "Good Evening !! "
        document.getElementById("grab").innerText = "Stop Yawning, Get Some Tea.. It's Just Evening  !! "
        document.getElementById("imgM").src = "./images/lunch_image.png"
        document.getElementById("imgM").style.borderRadius = "2px"
    }
    if (time.getHours() == night) {
        document.getElementById("text").innerText = "Good Night !! "
        document.getElementById("imgM").src = "./images/nightImg.jpg"
        document.getElementById("grab").innerText = "Close Your Eyes and Go to Sleep !! "
        document.getElementById("imgM").style.borderRadius = "2px"
    }
    // if (time.getHours() == night && time.getHours() == nap && time.getHours() == lunch && time.getHours() == wake) {
    //     document.getElementById("text").innerText = "GOOD MORNING!! WAKE UP !! "
    //     document.getElementById("imgM").src = "./images/goodMorning.png"
    //     document.getElementById("imgM").style.borderRadius = "2vw"
    //     document.getElementById("grab").innerText = "GRAB SOME HEALTHY BREAKFAST!!! "
    // }


    function wT() {
        let afterW = parseInt(wake) + 1;
        if (wake < 12) {
            if (wake < 11)
                return wake + " AM - " + afterW + " AM"
            else return wake + " AM - " + afterW + " PM"
        }
        else {
            afterW = afterW - 12;
            wake = wake - 12;
            if (wake < 11)
                return wake + " PM - " + afterW + " PM";
            else return wake + " PM - " + afterW + " AM";
        }
    }
    console.log(wT())
    function lT() {
        let afterL = parseInt(lunch) + 1;
        if (lunch < 12) {
            if (lunch < 11)
                return lunch + " AM - " + afterL + " AM"
            else return lunch + " AM - " + afterL + " PM"
        }
        else {
            afterL = afterL - 12;
            lunch = lunch - 12;
            if (lunch < 11)
                return lunch + " PM - " + afterL + " PM";
            else return lunch + " PM - " + afterL + " AM";
        }
    }

    function nT() {
        let afterN = parseInt(nap) + 1;
        if (nap < 12) {
            if (nap < 11)
                return nap + " AM - " + afterN + " AM";
            else return nap + " AM - " + afterN + " PM";
        }
        else {
            afterN = afterN - 12;
            nap = nap - 12;
            if (nap < 11)
                return nap + " PM - " + afterN + " PM";
            else return nap + " PM - " + afterN + " AM";
        }
    }

    function ntT() {
        let afternT = parseInt(night) + 1;
        if (night < 12) {
            if (night < 11)
                return night + " AM - " + afternT + " AM"
            else return night + " AM - " + afternT + " PM"
        }
        else {
            afternT = afternT - 12;
            night = night - 12;
            if (night < 11)
                return night + " PM - " + afternT + " PM";
            else return night + " PM - " + afternT + " AM";
        }
    }
    document.getElementById("wakeT").innerText = wT();
    document.getElementById("lunchT").innerText = lT()
    document.getElementById("napT").innerText = nT()
    document.getElementById("nightT").innerText = ntT()

    console.log(lT())

   
}
console.log(setAlarm())