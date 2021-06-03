function setup(){
    video=createCapture(VIDEO);
    video.size(550,500);
    canvas=createCanvas(550,500);
    canvas.position(680,150);
    video.position(50,150);
    posenet=ml5.poseNet(video,modelLoaded);
    posenet.on("pose",gotPoses);
    }
    function modelLoaded(){
    console.log("posenet has loaded");
    }
    function gotPoses(results){
    if(results.length>0)
    {
    console.log(results);
    nosex=results[0].pose.nose.x;
    nosey=results[0].pose.nose.y;
    console.log("nosex= "+nosex+"nosey= "+nosey);
    rightwristx=results[0].pose.rightWrist.x;
    leftwristx=results[0].pose.leftWrist.x;
    console.log("rightwristx= "+rightwristx+"leftwristx= "+leftwristx);
    different=floor(leftwristx-rightwristx);
    }
    }
    nosex=0;
    nosey=0;
    rightwristx=0;
    leftwristx=0;
    different=0;
    
    function draw(){
    background("#FF0000");
    fill("#ffff00");
    stroke("#ffff00");
    text("garvit",100,300);
    (nosex,nosey,different);
    document.getElementById("showsize").innerHTML=different;
    }
    