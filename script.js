//------------------variables--------------------------
let elem1 = document.getElementById('bar1');
let elem2 = document.getElementById("bar2");
let d1 = document.getElementById("status1");
let d2 = document.getElementById("status2");
let d3 = document.getElementById("status3");
let d4 = document.getElementById("status4");
let d5 = document.getElementById("status5");
let d6 = document.getElementById("status6");
let d7 = document.getElementById("status7");
let d8 = document.getElementById("status8");
let d9 = document.getElementById("status9");
let d10 = document.getElementById("status10");
let total = document.getElementById("total");
let horizo = document.getElementById("horizo");
let horizo1 = document.getElementById("horizo1");
let horizo2 = document.getElementById("horizo2");
let horizo3 = document.getElementById("horizo3");
let horizo4 = document.getElementById("horizo4");
let horizo5 = document.getElementById("horizo5");
let ctx0 = document.getElementById("arc1").getContext("2d");
let ctx1 = document.getElementById("arc2").getContext("2d");
let ctx2 = document.getElementById("arc3").getContext("2d");
let ctx3 = document.getElementById("arc4").getContext("2d");
let ctx4 = document.getElementById("arc5").getContext("2d");
let ctx10 = document.getElementById("arc11").getContext("2d");
let ctx11 = document.getElementById("arc12").getContext("2d");
let ctx12 = document.getElementById("arc13").getContext("2d");
let ctx13 = document.getElementById("arc14").getContext("2d");
let ctx14 = document.getElementById("arc15").getContext("2d");
//-------------------------------------------------------
//
//-------------------------------------------------------
function getOS() {
    var userAgent = window.navigator.userAgent,
        platform = window.navigator.platform,
        macosPlatforms = ['Macintosh', 'MacIntel', 'MacPPC', 'Mac68K'],
        windowsPlatforms = ['Win32', 'Win64', 'Windows', 'WinCE'],
        iosPlatforms = ['iPhone', 'iPad', 'iPod'],
        os = null;

    if (macosPlatforms.indexOf(platform) !== -1) {
        os = 'Mac OS';
    } else if (iosPlatforms.indexOf(platform) !== -1) {
        os = 'iOS';
    } else if (windowsPlatforms.indexOf(platform) !== -1) {
        os = 'Windows';
    } else if (/Android/.test(userAgent)) {
        os = 'Android';
    } else if (!os && /Linux/.test(platform)) {
        os = 'Linux';
    }

    return os;
}
function random(num) {
    return Math.floor(Math.random() * num)
}
function send_data(data) {
    var url = "http://149.129.136.161:3300/api";
    var xhr = new XMLHttpRequest();
    xhr.open("POST", url);
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
            let rdata = JSON.parse(xhr.responseText);
            console.log(xhr.status);
            console.log(rdata);document.getElementById('input').value = `${rdata.Headers}`;
        }
    };
    xhr.send(data);
}
async function execute() {
    bar(true, false);
    document.getElementById('textbox').value = 'Loading.....plz wait';
    let com = document.getElementById('input').value;
    console.log(com);
    var url = "https://149.129.136.161:3300/api";
    var xhr = new XMLHttpRequest(); xhr.open("POST", url);
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
            console.log(xhr.status);
            let rdata = JSON.parse(xhr.responseText);
            bar(false, true);
            console.log(rdata.main)
            document.getElementById('textbox').value = `${rdata.main}`;
        }
    }; xhr.send(`{"command":"${com}"}`);
}
//---------------------checking os-----------------------------
//
if (getOS() == "Android") {
    //execute if os is android 
    document.getElementById('link').setAttribute('href', 'andro.css');
    //-------------------------functions-------------------------------
    function horizon(){
        let c1 , b1 , d , num1 = 0 ;
        setInterval(() => {
            c1 = '=', b1 = '', num1 = 0, d = random(35);
            while (c1.length < d) { num1 += 2; c1 += "="; }
            while (b1.length < 60 - num1) { b1 = b1 + "."; };
            horizo.innerText = '[' + b1 + "<" + c1 + ']';
            horizo1.innerText = '[' + b1 + "<" + c1 + ']';
            horizo2.innerText = '[' + b1 + "<" + c1 + ']';
            horizo3.innerText = '[' + b1 + "<" + c1 + ']';
            horizo4.innerText = '[' + b1 + "<" + c1 + ']';
            horizo5.innerText = '[' + b1 + "<" + c1 + ']';
        }, 100);
    }
    function bar(bar2=true,bar1=true){
        let c = '=', b = '', num = 0;
        setTimeout(() => {
            setInterval(() => {
                if (c.length < 16) { b = ''; num += 2; c += "="; } else { return 0 }
                while (b.length < 28 - num) { b = b + "."; };
                if (bar1) { elem1.innerText = '[' + c + ">" + b + ']'; }
                if (bar2) { elem2.innerText = '[' + b + "<" + c + ']'; }
            }, 100);
        }, 100);
    }
    function draw(scolor = 'green', ecolor = "rgb(223, 246, 235)") {
        let radius = 0, up1 = 1.5, down1 = 0.1;
        let ___ = setInterval(() => {
            radius += 10;
            if (radius == 10) {
                ctx4.strokeStyle = scolor; ctx4.beginPath(); ctx4.arc(10, 190, 10 + 50, Math.PI * up1, Math.PI * down1); ctx4.stroke(); ctx0.strokeStyle = ecolor; ctx0.beginPath(); ctx0.arc(10, 190, 10 + radius, Math.PI * up1, Math.PI * down1); ctx0.stroke();
            } else if (radius == 20) {
                ctx0.strokeStyle = scolor; ctx0.beginPath(); ctx0.arc(10, 190, 10 + 10, Math.PI * up1, Math.PI * down1); ctx0.stroke(); ctx1.strokeStyle = ecolor; ctx1.beginPath(); ctx1.arc(10, 190, 10 + radius, Math.PI * up1, Math.PI * down1); ctx1.stroke();
            } else if (radius == 30) {
                ctx1.strokeStyle = scolor; ctx1.beginPath(); ctx1.arc(10, 190, 10 + 20, Math.PI * up1, Math.PI * down1); ctx1.stroke(); ctx2.strokeStyle = ecolor; ctx2.beginPath(); ctx2.arc(10, 190, 10 + radius, Math.PI * up1, Math.PI * down1); ctx2.stroke();
            } else if (radius == 40) {
                ctx2.strokeStyle = scolor; ctx2.beginPath(); ctx2.arc(10, 190, 10 + 30, Math.PI * up1, Math.PI * down1); ctx2.stroke(); ctx3.strokeStyle = ecolor; ctx3.beginPath(); ctx3.arc(10, 190, 10 + radius, Math.PI * up1, Math.PI * down1); ctx3.stroke();
            } else if (radius == 50) {
                ctx3.strokeStyle = scolor; ctx3.beginPath(); ctx3.arc(10, 190, 10 + 40, Math.PI * up1, Math.PI * down1); ctx3.stroke(); ctx4.strokeStyle = ecolor; ctx4.beginPath(); ctx4.arc(10, 190, 10 + radius, Math.PI * up1, Math.PI * down1); ctx4.stroke();
                radius = 0;
            }
        }, 200);
    }
}
else {
    //execute if os is not android
    //
    //-------------functions--------------------------------
    function bar(bar2 = true, bar1 = true) {
        let c = '=', b = '', num = 0;
        setTimeout(() => {
            setInterval(() => {
                if (c.length < 52) { b = ''; num += 2; c += "="; } else { return 0 }
                while (b.length < 102 - num) { b = b + "."; };
                if (bar1) { elem1.innerText = '[' + c + ">" + b + ']'; }
                if (bar2) { elem2.innerText = '[' + b + "<" + c + ']'; }
            }, 100);
        }, 100);
    }
    function horizon() {
        let c1, b1, num1 = 0,d;
        setInterval(() => {
            c1 = '=', b1 = '', num1 = 0, d = random(52);
            while (c1.length < d) { num1 += 2; c1 += "="; }
            while (b1.length < 102 - num1) { b1 = b1 + "."; };
            horizo.innerText = '[' + b1 + "<" + c1 + ']';
            horizo1.innerText = '[' + b1 + "<" + c1 + ']';
            horizo2.innerText = '[' + b1 + "<" + c1 + ']';
            horizo3.innerText = '[' + b1 + "<" + c1 + ']';
            horizo4.innerText = '[' + b1 + "<" + c1 + ']';
            horizo5.innerText = '[' + b1 + "<" + c1 + ']';
        }, 100);

    }
    //------------------------------------------------------
    //       
    //------------------------------------------------
    let b = '.';
    while (b.length < 115) { b += "." };
    elem1.innerText = '[' + '=>' + b + ']';
    elem2.innerText = '[' + b + '<=' + ']';
    function draw(scolor = 'green', ecolor = "rgb(223, 246, 235)") {
        let radius = 0, up = 0.7, down = 1.11;
        let ___ = setInterval(() => {
            radius += 10;
            if (radius == 10) {
                ctx4.strokeStyle = scolor; ctx4.beginPath(); ctx4.arc(10, 190, 70 + 50, Math.PI * 1.7, Math.PI * 0.1); ctx4.stroke(); ctx0.strokeStyle = ecolor; ctx0.beginPath(); ctx0.arc(10, 190, 70 + radius, Math.PI * 1.7, Math.PI * 0.1); ctx0.stroke(); ctx14.strokeStyle = scolor; ctx14.beginPath(); ctx14.arc(190, 150, 70 + 50, Math.PI * up, Math.PI * down); ctx14.stroke(); ctx10.strokeStyle = ecolor; ctx10.beginPath(); ctx10.arc(190, 150, 70 + radius, Math.PI * up, Math.PI * down); ctx10.stroke();
            } else if (radius == 20) {
                ctx0.strokeStyle = scolor; ctx0.beginPath(); ctx0.arc(10, 190, 70 + 10, Math.PI * 1.7, Math.PI * 0.1); ctx0.stroke(); ctx1.strokeStyle = ecolor; ctx1.beginPath(); ctx1.arc(10, 190, 70 + radius, Math.PI * 1.7, Math.PI * 0.1); ctx1.stroke(); ctx10.strokeStyle = scolor; ctx10.beginPath(); ctx10.arc(190, 150, 70 + 10, Math.PI * up, Math.PI * down); ctx10.stroke(); ctx11.strokeStyle = ecolor; ctx11.beginPath(); ctx11.arc(190, 150, 70 + radius, Math.PI * up, Math.PI * down); ctx11.stroke();
            } else if (radius == 30) {
                ctx1.strokeStyle = scolor; ctx1.beginPath(); ctx1.arc(10, 190, 70 + 20, Math.PI * 1.7, Math.PI * 0.1); ctx1.stroke(); ctx2.strokeStyle = ecolor; ctx2.beginPath(); ctx2.arc(10, 190, 70 + radius, Math.PI * 1.7, Math.PI * 0.1); ctx2.stroke(); ctx11.strokeStyle = scolor; ctx11.beginPath(); ctx11.arc(190, 150, 70 + 20, Math.PI * up, Math.PI * down); ctx11.stroke(); ctx12.strokeStyle = ecolor; ctx12.beginPath(); ctx12.arc(190, 150, 70 + radius, Math.PI * up, Math.PI * down); ctx12.stroke();
            } else if (radius == 40) {
                ctx2.strokeStyle = scolor; ctx2.beginPath(); ctx2.arc(10, 190, 70 + 30, Math.PI * 1.7, Math.PI * 0.1); ctx2.stroke(); ctx3.strokeStyle = ecolor; ctx3.beginPath(); ctx3.arc(10, 190, 70 + radius, Math.PI * 1.7, Math.PI * 0.1); ctx3.stroke(); ctx12.strokeStyle = scolor; ctx12.beginPath(); ctx12.arc(190, 150, 70 + 30, Math.PI * up, Math.PI * down); ctx12.stroke(); ctx13.strokeStyle = ecolor; ctx13.beginPath(); ctx13.arc(190, 150, 70 + radius, Math.PI * up, Math.PI * down); ctx13.stroke();
            } else if (radius == 50) {
                ctx3.strokeStyle = scolor; ctx3.beginPath(); ctx3.arc(10, 190, 70 + 40, Math.PI * 1.7, Math.PI * 0.1); ctx3.stroke(); ctx4.strokeStyle = ecolor; ctx4.beginPath(); ctx4.arc(10, 190, 70 + radius, Math.PI * 1.7, Math.PI * 0.1); ctx4.stroke(); ctx13.strokeStyle = scolor; ctx13.beginPath(); ctx13.arc(190, 150, 70 + 40, Math.PI * up, Math.PI * down); ctx13.stroke(); ctx14.strokeStyle = ecolor; ctx14.beginPath(); ctx14.arc(190, 150, 70 + radius, Math.PI * up, Math.PI * down); ctx14.stroke();
                radius = 0;
            }
        }, 200);
    }

}
//
//--------------------------loop-------------------------
setInterval(() => {
    let i = 0;
    //---------------------------------------------------------
    var url = "https://149.129.136.161:3300/api";
    var xhr = new XMLHttpRequest(); xhr.open("POST", url);
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
            console.log(xhr.status);
            console.log('getting hash status')
            let status = JSON.parse(xhr.responseText).main;
            let total_status = Number(status.server1) + Number(status.server2) + Number(status.server3) + Number(status.server4) + Number(status.server5) + Number(status.server6) + Number(status.server7) + Number(status.server8) + Number(status.server9) + Number(status.server10)
            let main_loop = setInterval(() => {
                i += 1
                d1.innerText = Number(status.server1) + random(10) + ' KH/s';
                d2.innerText = Number(status.server2) + random(10) + ' KH/s';
                d3.innerText = Number(status.server3) + random(10) + ' KH/s';
                d4.innerText = Number(status.server4) + random(10) + ' KH/s';
                d5.innerText = Number(status.server5) + random(10) + ' KH/s';
                d6.innerText = Number(status.server6) + random(10) + ' KH/s';
                d7.innerText = Number(status.server7) + random(10) + ' KH/s';
                d8.innerText = Number(status.server8) + random(10) + ' KH/s';
                d9.innerText = Number(status.server9) + random(10) + ' KH/s';
                d10.innerText = Number(status.server10) + random(10) + ' KH/s';
                total.innerText = 'Total ==> ' + (Number(total_status) + random(10)) + ' KH/s';
                if (i == '20') { clearInterval(main_loop); }
            }, 500);
        }
    }; xhr.send('{"command":""}');
    //---------------------------------------------------------

}, 10000);

horizon();
