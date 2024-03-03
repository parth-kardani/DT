noseX=0;
noseY=0;

function preload(){
clown_nose=loadImage('https://i.postimg.cc/7ZBcjDqp/clownnose.png');
}

function setup(){
    canvas=createCanvas(300,300);
    canvas.center();
    video=createCapture(VIDEO);
    video.hide();
    video.size(300,300);
    poseNet=ml5.poseNet(video,modelloaded);
    poseNet.on('pose',gotposes);
}

function gotposes(results){
    if(results.length > 0){
        console.log(results);
        console.log("nose X =" + results[0].pose.nose.x);
        console.log("nose Y =" + results[0].pose.nose.y);
        noseX=results[0].pose.nose.x -15;
        noseY=results[0].pose.nose.y -8;
    }
}

function modelloaded(){
    console.log("poseNet is Initialised");
}

function draw(){
image(video,0,0,300,300);
image(clown_nose,noseX,noseY,30,30);
}

function take_snapshot(){
    save("myfilterimage.page");
}