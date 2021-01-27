var SpeechRecognition = window.webkitSpeechRecognition;

var recognition = new SpeechRecognition();

function start() {

    document.getElementById("displayed").innerHTML = "";
    recognition.start();
    console.log("start")

}

recognition.onresult = function (event) {
    console.log(event);
    var content = event.results[0][0].transcript;
    console.log(content)
    document.getElementById("displayed").innerHTML = content;

    if (content == "take my selfie") {
        speak();
    }
}

function speak() {

    var synth = window.speechSynthesis;
    var speak_data = "taking your selfie in 5 seconds";
    var utter_this = new SpeechSynthesisUtterance(speak_data);
    synth.speak(utter_this);
    Webcam.attach(camera)

    setTimeout(function () {
        take_snapshot();
        save();
    }, 5000);
}



Webcam.set({
    width: 350,
    height: 300,
    image_format: "jpeg",
    jpeg_quality: 90

});

var camera = document.getElementById("camera");

function take_snapshot() {
    Webcam.snap(function (data_uri) {
        document.getElementById("result").innerHTML = "<img id='selfie_image' src=" + data_uri + ">";
    })
}

function save(){
    link=document.getElementById("link");
    image=document.getElementById("selfie_image").src;
    link.href=image;
    link.click();
}