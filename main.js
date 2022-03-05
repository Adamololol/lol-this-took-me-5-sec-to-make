img = "";
objects = [];
stat = "";

function preload(){
    img = loadImage("dog_cat.jpg")
}

function setup(){
    canvas = createCanvas(380, 380);
    canvas.center();
    objectDetector = ml5.objectDetector('cocossd', modelLoaded)
    document.getElementById("status").innerHTML = "status : dectecting objects";
}

function modelLoaded(){
    console.log("Modal Loaded!")
    stat = true;
    objectDetector.detect(img, gotResults)
}

function gotResults(error, results){
if(error) {
    console.log(error);
}
console.log(results);
objects = results;
}

function draw(){
    image(img, 0, 0, 640, 420);
if(stat != ""){
    for(i = 0; i < objects.length; i++){
        document.getElementById("status").innerHTML = "status: object detected";

        fill(r,g,b);
        percent = floor(objects[i].confidence * 100);
        text(objects[i].label + " " + percent + "%", )

    }
}
}