difference = 0;

function setup()
{
    video = createCapture(VIDEO);
    video.size(550,500);

    canvas = createCanvas(550,500);
    canvas.position(600,100);

    posenet = ml5.poseNet(video, modelLoaded);
    posenet.on('pose', gotPoses);
}


function modelLoaded()
{
    console.log("Model is intialized");
}


function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);

        leftWristX = results[0].pose.leftWrist.x;
        rightWristX = results[0].pose.rightWrist.x;

        difference = floor(leftWristX-rightWristX);
    }
}

function draw()
{
    background("lightpink");
    textSize(difference);
    fill("pink");
    text("AANYA", 0, 300);
}