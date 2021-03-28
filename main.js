function setup() {
    video = createCapture(VIDEO);
    video.size(550, 500);

    canvas = createCanvas(550, 500);
    canvas.position(560, 200);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function draw() {
    background('white');
}

function modelLoaded() {
    console.log("-------------------------------------------------------------\nposeNet model loaded!\n--------------------------------------------------------------");
}

function gotPoses(results) {
    if (results.length > 0) return console.log(results);
}