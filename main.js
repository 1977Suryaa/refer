function setup(){
    canvas=createCanvas(500,400)
    canvas.center()
    webcam=createCapture(VIDEO)
    webcam.hide()
    poseNet = ml5.poseNet(webcam, modelLoaded);
    poseNet.on("pose",gotpose)
}
function draw(){
    image(webcam,0,0,500,400)
    

}
function modelLoaded() {
    console.log('Model Loaded!');
}
function gotpose(results){
    if(results.length>0){
        console.log(results)
        var ms1=results[0].pose.nose.x
        var ms2=results[0].pose.nose.y
    }

}

function photo(){
    save("face filter.png")
}
