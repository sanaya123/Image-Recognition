Webcam.set({
    height:300,
    width:350,
    image_format:"png",
    png_quality:90
})

camera=document.getElementById("camera")

Webcam.attach(camera)

function capture(){
Webcam.snap(function(data_uri){
document.getElementById("snapshot").innerHTML="<img id='snap' src='"+data_uri+"'/>"
})
}

console.log(ml5.version)

classifier=ml5.imageClassifier("https://storage.googleapis.com/tm-model/AmKNXymZi/model.json", modelLoaded)

function modelLoaded(){
    console.log("Model Loaded!")
}

function identify(){
    img=document.getElementById("snap")
    classifier.classify(img, gotResult)
}

function gotResult(error, results){
if(error){
console.error(error)
}else{
    console.log(results)
    document.getElementById("object_name").innerHTML= results[0].label
    document.getElementById("object_accuracy").innerHTML=results[0].confidence.toFixed(3)
}
}