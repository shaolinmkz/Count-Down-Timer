/*-------------------------------COUNT DOWN AlGORITHM!!!-----------------------------------*/

                                        /*colons*/
let colon = document.getElementsByClassName("colon");

/*--------------------------------------Parent Element--------------------------------------*/

let countDown = document.getElementById("countDown");

/*------------------------------------------Inputs-------------------------------------------*/

let inputs = document.getElementById("inputs");
let days = document.getElementById("days");
let hours = document.getElementById("hours");
let minutes = document.getElementById("minutes");
let seconds = document.getElementById("seconds");

/*------------------------------------------Buttons------------------------------------------*/
let start = document.getElementById("start");
let simple = document.getElementById("simple");

/*-------------------------------------------Display------------------------------------------*/

let display1 = document.getElementById("displayDays");
let display2 = document.getElementById("displayHours");
let display3 = document.getElementById("displayMinutes");
let display4 = document.getElementById("displaySeconds");

/*----------------------------Timing Interval Variable Declaration------------------------------*/

let intervalHandle1, intervalHandle2, intervalHandle3, intervalHandle4, intervalHandleColor;
let intervalHandleSimple1, intervalHandleSimple2, intervalHandleSimple3, intervalHandleSimple4, intervalHandleSimpleColor;

/*--------------------------------ReLoads page after count down---------------------------------*/

function refresh () {
    window.location.reload(true);
}

/*-------------------------------startValidation of input and Execution-------------------------------*/

start.onclick = function validate() {
    if (seconds.value > 60) {
        alert(`${seconds.value} is too high. Enter seconds value lessthan or equal to sixty (60) and retry`);
        return;
    }
    if (minutes.value > 60) {
        alert(`${minutes.value} is too high. Enter minutes value lessthan or equal to sixty (60) and retry`);
        return;
    }
    if (start.onclick) {
        inputs.style.display = "none";
        countDown.lastElementChild.style.border = "15px solid blue";
        countDown.lastElementChild.style.backgroundColor = "white";
        countDown.lastElementChild.style.width  = "auto";
        countDown.lastElementChild.style.textAlign = "center";
        countDown.lastElementChild.style.padding = "10px";
    }
    
    intervalHandle4 = setInterval(sec, 1000);
    intervalHandle3 = setInterval(min, 1000);
    intervalHandle2 = setInterval(hrs, 1000);
    intervalHandle1 = setInterval(day, 1000);
    intervalHandleColor = setInterval(check, 1000);
}

/*-------------------------------simpleValidation of input and Execution-------------------------------*/

simple.onclick = function () {
    if (seconds.value > 60) {
        alert(`${seconds.value} is too high. Enter seconds value lessthan or equal to sixty (60) and retry`);
        return;
    }
    if (minutes.value > 60) {
        alert(`${minutes.value} is too high. Enter minutes value lessthan or equal to sixty (60) and retry`);
        return;
    }
    if (simple.onclick) {
        display1.style.visibility = "hidden";
        display2.style.visibility = "hidden";
        colon[0].style.visibility = "hidden";
        colon[1].style.visibility = "hidden";
        display3.style.border = "5px groove blue";
        display4.style.border = "5px groove blue";
        display3.style.backgroundColor = "white";
        display4.style.backgroundColor = "white";
        display3.style.width = "200px";
        display4.style.width = "200px";
        display3.style.textAlign = "center";
        display4.style.textAlign = "center";
    }
    inputs.style.display = "none";
    intervalHandleSimple4 = setInterval(secSimple, 1000);
    intervalHandleSimple3 = setInterval(minSimple, 1000);
    intervalHandleSimple2 = setInterval(hrsSimple, 1000);
    intervalHandleSimple1 = setInterval(daySimple, 1000);
    intervalHandleSimpleColor = setInterval(checkSimple, 1000);
}

/*--------------------Max Count Down Functions (00 Day : 00 Hour : 00 Min : 00 Sec)-------------------*/

function day() {
    if (days.value == 0) {
        clearInterval(intervalHandle1);
        return display1.innerHTML = "00";
    }
    if (hours.value < 1) {
        days.value -= 1;
        hours.value = 23;
    }
    if (days.value < 10) {
        return display1.innerHTML = `0${days.value}`;
    }
    return display1.innerHTML = `${days.value}`;
}

function hrs() {
    if (hours.value == 0) {
        clearInterval(intervalHandle2);
        return display2.innerHTML = "00";
    }

    if (minutes.value < 1) {
        hours.value -= 1;
        minutes.value = 59;
    }

    if (hours.value < 10) {
        return display2.innerHTML = `0${hours.value}`;
    }

    return display2.innerHTML = `${hours.value}`;
}

function min() {
    if (minutes.value == 0) {
        clearInterval(intervalHandle3);
        return display3.innerHTML = "00";
    }
    if (seconds.value < 1) {
        minutes.value -= 1;
        seconds.value = 59;
    }
    if (minutes.value < 10) {
        return display3.innerHTML = `0${minutes.value}`;
    }
    return display3.innerHTML = `${minutes.value}`;
}

function sec() {
    if (seconds.value > 0) {
        seconds.value -= 1;
    }
    if ((seconds.value <= 0) && (minutes.value <= 0) && (hours.value <= 0) && (days.value <= 0)) {
        let para = document.createElement("p");
        let text = document.createTextNode("TIME OUT!!!")
        para.appendChild(text);
        countDown.appendChild(para).style.color = "red";
        para.style.fontSize = "100px";
        para.style.fontWeight = "bolder";
        para.style.textAlign = "center";
        inputs.style.display = "block";

        display1.style.color = "black";
        display2.style.color = "black";
        display3.style.color = "black";
        display4.style.color = "black";
        countDown.style.border = "none";

        clearInterval(intervalHandle4);
        setTimeout(refresh, 10000);

        return display4.innerHTML = "00";
    }
    if (seconds.value < 10) {
        return display4.innerHTML = `0${seconds.value}`;
    }
    return display4.innerHTML = `${seconds.value}`;
}

function check() {
    if (Number(display1.innerHTML) < 1) {
        display1.style.color = "red";
        display2.style.color = "red";
        display3.style.color = "red";
        display4.style.color = "red";
        countDown.lastElementChild.style.color = "red";
        countDown.lastElementChild.style.border = "20px solid red";
        return clearInterval(intervalHandleColor);
    }
}

/* ---------------------------Simple Count Down Functions (00 Min : 00 Sec)-------------------------------*/

function daySimple() {
    if (days.value == 0) {
        clearInterval(intervalHandleSimple1);
        return display1.innerHTML = "00";
    }
    if (hours.value < 1) {
        days.value -= 1;
        hours.value = 23;
    }
    if (days.value < 10) {
        return display1.innerHTML = `0${days.value}`;
    }
    return display1.innerHTML = `${days.value}`;
}

function hrsSimple() {
    if (hours.value == 0) {
        clearInterval(intervalHandleSimple2);
        return display2.innerHTML = "00";
    }

    if (minutes.value < 1) {
        hours.value -= 1;
        minutes.value = 59;
    }

    if (hours.value < 10) {
        return display2.innerHTML = `0${hours.value}`;
    }

    return display2.innerHTML = `${hours.value}`;
}

function minSimple() {
    if (minutes.value == 0) {
        clearInterval(intervalHandleSimple3);
        return display3.innerHTML = "00";
    }
    if (seconds.value < 1) {
        minutes.value -= 1;
        seconds.value = 59;
    }
    if (minutes.value < 10) {
        return display3.innerHTML = `0${minutes.value}`;
    }
    return display3.innerHTML = `${minutes.value}`;
}

function secSimple() {
    if (seconds.value > 0) {
        seconds.value -= 1;
    }
    if ((seconds.value <= 0) && (minutes.value <= 0) && (hours.value <= 0) && (days.value <= 0)) {
        let para = document.createElement("p");
        let text = document.createTextNode("TIME OUT!!!")
        para.appendChild(text);
        countDown.appendChild(para).style.color = "red";
        para.style.fontSize = "100px";
        para.style.fontWeight = "bolder";
        para.style.textAlign = "center";
        inputs.style.display = "block";

        display1.style.color = "black";
        display2.style.color = "black";
        display3.style.color = "black";
        display4.style.color = "black";
        countDown.style.border = "none";

        clearInterval(intervalHandleSimple4);
        setTimeout(refresh, 10000);

        return display4.innerHTML = "00";
    }
    if (seconds.value < 10) {
        return display4.innerHTML = `0${seconds.value}`;
    }
    return display4.innerHTML = `${seconds.value}`;
}

function checkSimple() {
    if ((Number(display3.innerHTML) * 60) === 0) {
        if ((Number(display4.innerHTML) === 10)) {
            countDown.lastElementChild.style.color = "red";
            display3.style.border = "5px groove red";
            display4.style.border = "5px groove red";
            return clearInterval(intervalHandleSimpleColor);
        }
    }
}