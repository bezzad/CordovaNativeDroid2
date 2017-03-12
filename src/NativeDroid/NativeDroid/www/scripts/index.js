// For an introduction to the Blank template, see the following documentation:
// http://go.microsoft.com/fwlink/?LinkID=397704
// To debug code on page load in Ripple or on Android devices/emulators: launch your app, set breakpoints, 
// and then run "window.location.reload()" in the JavaScript Console.
(function () {
    "use strict";

    document.addEventListener("deviceready", onDeviceReady, false);

    function onDeviceReady() {
        //// Handle the Cordova pause and resume events
        console.log(navigator.camera);
        navigator.camera.cleanup(onSuccess, onFail);
    };
   

    function onSuccess() {
        console.log("Camera cleanup success.");
    }

    function onFail(message) {
        alert('Failed because: ' + message);
    }
})();