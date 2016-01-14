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

//(function () {
//    //window.localStorage.removeItem('UserSign')
//    var applaunchCount = window.localStorage.getItem('launchCount')
//    var mySign = JSON.parse(window.localStorage.getItem('UserSign'))
//    var curSign = ""
//    var weekArray = ""
//    var monthArray = ""
//    var yearArray = ""
//    var urlweek = "http://api.rajatieto.org/v1/horoscopes/week"
//    var urlmonth = "http://api.rajatieto.org/v1/horoscopes/month"
//    var urlyear = "http://api.rajatieto.org/v1/horoscopes/year"

//    console.log("1. applaunchCount = " + applaunchCount + " ja mySign = " + mySign)

//    //Check if launched before
//    if (!applaunchCount || !mySign || mySign.name == '') {     //NOT
//        //Local storage is not set, hence first time launch. set the local storage item
//        window.localStorage.setItem('launchCount', 1);
//        window.localStorage.setItem('UserSign', JSON.stringify({ set: 0, name: '' }));

//        //CHECK
//        console.log("NEW applaunchCount = " + applaunchCount + " ja mySign = " + mySign)

//        $('#collapseAllHoroscopes').collapse('show')

//    } else {
//        //CHECK
//        console.log("OLD applaunchCount = " + applaunchCount + " ja mySign = " + mySign)

//        var xmlhttp = new XMLHttpRequest();
//        if (!xmlhttp) {
//            alert('Giving up :( Cannot create an XMLHTTP instance');
//            getHoroscope();
//        }

//        //CHECK  for week
//        alert('1. ' + xmlhttp.readyState);
//        xmlhttp.onreadystatechange = alertContents(weekArray)
            
//        //CHECK
//        alert('3. ' + xmlhttp.readyState);

//        xmlhttp.open("GET", urlweek, true);
//        xmlhttp.send();

//        //CHECK    for month
//        alert('1. ' + xmlhttp.readyState);
//        xmlhttp.onreadystatechange = alertContents(monthArray)

//        //CHECK
//        alert('3. ' + xmlhttp.readyState);

//        xmlhttp.open("GET", urlmonth, true);
//        xmlhttp.send();

//        //CHECK    for year
//        alert('1. ' + xmlhttp.readyState);
//        xmlhttp.onreadystatechange = alertContents(yearArray)

//        //CHECK
//        alert('3. ' + xmlhttp.readyState);

//        xmlhttp.open("GET", urlyear, true);
//        xmlhttp.send();

//        showHoroscope(mySign.name)
//    }
//})

//function alertContents(array) {
//    if (xmlhttp.readyState === XMLHttpRequest.DONE) {
//        if (xmlhttp.status == 200) {
//            //CHECK
//            alert('2. ' + xmlhttp.readyState);

//            array = JSON.parse(xmlhttp.responseText);
//            // window.localStorage.setItem('Horoscope', JSON.stringify(array))
//            //check
//            //console.log(window.localStorage.getItem('Horoscope'))
//            console.log(' 2.sign ' + sign + array)
//        } else {
//            alert('There was a problem with the request.');
//        }
//    }
//}
