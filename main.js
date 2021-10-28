x=0;
y=0;
draw_apple="";
var SpeechRecognition =window.webkitSpeechRecognition;
var recognition= new SpeechRecognition();
function preload(){
    img = loadImage("apple.jpg");
}
function setup(){
canvas=createCanvas(900,600)
}
function draw(){
if (draw_apple=="set") {
    for (i= 0; i <=to_number; i++) {
        x=Math.floor(Math.random()*700)
        y=Math.floor(Math.random()*400)
        image(img, x, y, 50, 50);
        document.getElementById("status").innerHTML="Drew "+content+" Apples"
        speak_data=to_number+"Apples Drawn"
        
        draw_apple="";
       }
       speak()
}
}
function start(){
    document.getElementById("status").innerHTML="System is listening, please speak";
    recognition.start();

}
function clear2(){
    clear()
}
recognition.onresult=function(event){
    content=event.results[0][0].transcript
    console.log(content)
    to_number=Number(content)
    console.log(to_number)
    if (Number.isInteger(to_number)) {
        console.log(to_number)
        document.getElementById("status").innerHTML="Drawing Apples"
   draw_apple="set"}else{
    document.getElementById("status").innerHTML="The speech has not recognized a number"
   }
    
    
    
}
function speak(){
var synth =window.speechSynthesis
var utter_this=new SpeechSynthesisUtterance(speak_data)
synth.speak(utter_this)
speak_data=" "
}