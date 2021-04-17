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
function execute() {
    let com = document.getElementById('input').value;
    console.log(com);
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

}
//
//--------------------------loop-------------------------
let i = 1;
setInterval(() => {
    if (i) { bar(); i = 0 }
    d1.innerText = random(1000) + ' KH/s';
    d2.innerText = random(1000) + ' KH/s';
    d3.innerText = random(1000) + ' KH/s';
    d4.innerText = random(1000) + ' KH/s';
    d5.innerText = random(1000) + ' KH/s';
    d6.innerText = random(1000) + ' KH/s';
    d7.innerText = random(1000) + ' KH/s';
    d8.innerText = random(1000) + ' KH/s';
    d9.innerText = random(1000) + ' KH/s';
    d10.innerText = random(1000) + ' KH/s';
    total.innerText = 'Total ==> ' + random(10000) + ' KH/s';

}, 200);
horizon();
