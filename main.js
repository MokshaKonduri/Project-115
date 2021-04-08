function preload() {}
function setup() {
    canvas=createCanvas(300,300);
    canvas.center();
    myvideo=createCapture(VIDEO);
    myvideo.size (300,300);
    myvideo.hide();
    poseNet=ml5.poseNet(myvideo,modelLoaded);
    poseNet.on('pose',gotPoses);
}
function draw() {
    image(myvideo,0,0,300,300);
}
function take_snapshot() {
    save('my_filter_image.png');
}
function modelLoaded() {
    console.log("Model Is Loaded")
}
function gotPoses(results) {
    if (results.length > 0) {
        console.log(results);
        console.log("nose x=" + results[0].pose.nose.x);
        console.log("nose y=" + results[0].pose.nose.y);
    }
}