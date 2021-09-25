const gaugeElement = document.querySelector(".gauge");

function setGaugeValue(gauge, value) {
    if (value < 0 || value > 1) {
        return;
    }

    gauge.querySelector(".gauge__fill").style.transform = `rotate(${value / 2}turn)`;
    gauge.querySelector(".gauge__cover").textContent = `${Math.round(value * 100)}%`;
}

setGaugeValue(gaugeElement, 0.6);

function light1() {
    let lightswitch1 = document.getElementById("lightswitch1");
    let lightimg1 = document.getElementById("lightimg1");
    let lighton1 = document.getElementById("lighton1");

    if (lightswitch1.checked === true) {
        lightimg1.style.display = "none";
        lighton1.style.display = "block";
    }
    else {
        lightimg1.style.display = "block";
        lighton1.style.display = "none";
    }

}

function light2() {
    let lightswitch2 = document.getElementById("lightswitch2");
    let lightimg2 = document.getElementById("lightimg2");
    let lighton2 = document.getElementById("lighton2");

    if (lightswitch2.checked === true) {
        lightimg2.style.display = "none";
        lighton2.style.display = "block";
    }
    else {
        lightimg2.style.display = "block";
        lighton2.style.display = "none";
    }

}

function light3() {
    let lightswitch3 = document.getElementById("lightswitch3");
    let lightimg3 = document.getElementById("lightimg3");
    let lighton3 = document.getElementById("lighton3");

    if (lightswitch3.checked === true) {
        lightimg3.style.display = "none";
        lighton3.style.display = "block";
    }
    else {
        lightimg3.style.display = "block";
        lighton3.style.display = "none";
    }

}

function bedlamp1() {
    let bedlampswitch1 = document.getElementById("bedlampswitch1");
    let bedlampimg1 = document.getElementById("bedlampimg1");
    let bedlampon1 = document.getElementById("bedlampon1");

    if (bedlampswitch1.checked === true) {
        bedlampimg1.style.display = "none";
        bedlampon1.style.display = "block";
    }
    else {
        bedlampimg1.style.display = "block";
        bedlampon1.style.display = "none";
    }

}

let fanswitch1 = document.getElementById("fanswitch1");
let fan1 = document.getElementById("fan1");

let fanswitch2 = document.getElementById("fanswitch2");
let fan2 = document.getElementById("fan2");

let fanswitch3 = document.getElementById("fanswitch3");
let fan3 = document.getElementById("fan3");

let fanswitch4 = document.getElementById("fanswitch4");
let fan4 = document.getElementById("fan4");

function fanrotate1() {
    if (fanswitch1.checked === true) {
        fan1.className += " rotate";
    }
    else {
        fan1.className -= " rotate";
    }

}

function fanrotate2() {

    if (fanswitch2.checked === true) {
        fan2.className += " rotate";
    }
    else {
        fan2.className -= " rotate";
    }

}

function fanrotate3() {
    if (fanswitch3.checked === true) {
        fan3.className += " rotate";
    }
    else {
        fan3.className -= " rotate";
    }

}

function fanrotate4() {

    if (fanswitch4.checked === true) {
        fan4.className += " rotate";
    }
    else {
        fan4.className -= " rotate";
    }

}

function startTime() {
    let today = new Date();
    let day = today.getDate();
    let month = today.getMonth() + 1;
    let year = today.getFullYear();
    let h = today.getHours();
    let m = today.getMinutes();
    let s = today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    let options = {
        hour: 'numeric',
        minute: 'numeric',
        hour12: true
    };
    let timeString = today.toLocaleString('en-US', options);
    document.getElementById('date').innerHTML = day + "/" + month + "/" + year;
    // document.getElementById('time').innerHTML = h + ":" + m;
    document.getElementById('time').innerHTML = timeString;
    let t = setTimeout(function () { startTime() }, 500);
}

function checkTime(i) {
    if (i < 10) { i = "0" + i };  // add zero in front of numbers < 10
    return i;
}