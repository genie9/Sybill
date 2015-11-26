// For an introduction to the Blank template, see the following documentation:
// http://go.microsoft.com/fwlink/?LinkID=397704
// To debug code on page load in Ripple or on Android devices/emulators: launch your app, set breakpoints, 
// and then run "window.location.reload()" in the JavaScript Console.
(function () {
    "use strict";

    document.addEventListener( 'deviceready', onDeviceReady.bind( this ), false );

    function onDeviceReady() {
        // Handle the Cordova pause and resume events
        document.addEventListener( 'pause', onPause.bind( this ), false );
        document.addEventListener( 'resume', onResume.bind( this ), false );
        
        // TODO: Cordova has been loaded. Perform any initialization that requires Cordova here.
    };

    function onPause() {
        // TODO: This application has been suspended. Save application state here.
    };

    function onResume() {
        // TODO: This application has been reactivated. Restore application state here.
    };
})();

//var applaunchCount = null;
//var mySign = null;

var applaunchCount = window.localStorage.getItem('launchCount');
var mySign = window.localStorage.getItem('sign');

//Check if launched before
if (applaunchCount == null || mySign == null) {     //NOT
     //Local storage is not set, hence first time launch. set the local storage item
    //window.localStorage.setItem('launchCount', 1);
    window.open("first.html", '_self');
    
} else {
    alert("applaunchCount = " + applaunchCount + "ja mySign = " + mySign)
    var xmlhttp = new XMLHttpRequest();
    var urlweek = "http://api.rajatieto.org/v1/horoscopes/week";
    //check
    alert(xmlhttp.readyState);
    xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            //check
            alert(xmlhttp.readyState);
            myArr = JSON.parse(xmlhttp.responseText);
            //check
            alert(myArr[0].horoscopeDays);

            showHoroscope(myArr, mySign);
        }
    };
    //check
    alert(xmlhttp.readyState);
    xmlhttp.open("GET", urlweek, true);
    xmlhttp.send();
}
    //* Launching app for first time
//else {
//    document.getElementById("signs").style.display = "none";
//} 

//connecting horoscope page and building array from json
//function buildHoroscope() {

//    var xmlhttp = new XMLHttpRequest();
//    var urlweek = "http://api.rajatieto.org/v1/horoscopes/week";
//    //check
//    alert(xmlhttp.readyState);
//    xmlhttp.onreadystatechange = function () {
//        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
//            //check
//            alert(xmlhttp.readyState);
//            myArr = JSON.parse(xmlhttp.responseText);
//            //check
//            alert(myArr[0].horoscopeDays);

//            showHoroscope(myArr, mySign);
//        }
//    };
//    //check
//    alert(xmlhttp.readyState);
//    xmlhttp.open("GET", urlweek, true);
//    xmlhttp.send();
//}

// Renders horoscope for particular sign

var myArr = {};

function showHoroscope(arr, sign) {
    var out = "";
    for (i = 0; i < arr.length; i++) {
        if (arr[i].fiSign == sign)
            out += "<h2>"+arr[i].fiSign + "</h2>  <p>" + arr[i].fortune + '</p>' + '</a><br>';
    }
    document.getElementById("horoscope").innerHTML = out;
}
