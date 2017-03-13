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

    // Show image
    //
    /**
     * Warning: Using DATA_URL is not recommended! The DATA_URL destination
     * type is very memory intensive, even with a low quality setting. Using it
     * can result in out of memory errors and application crashes. Use FILE_URI
     * or NATIVE_URI instead.
     */
    $(function () {
        $(document).find("#btnStartCamera").click(function () {
            alert("Starting camera...");

            navigator.camera.getPicture(onSuccessPick, onFail, {
                quality: 25,
                destinationType: navigator.camera.DestinationType.DATA_URL
            });
        });
    });

    function onSuccessPick(imageData) {
        var image = document.getElementById('testCameraBox');
        image.src = "data:image/jpeg;base64," + imageData;
    }

    function onSuccess() {
        console.log("Camera cleanup success.");
    }

    function onFail(message) {
        alert('Failed because: ' + message);
    }
})();