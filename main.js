var dog = 0
var cat = 0 
var bird = 0
var cow = 0 

function startClassification() 
{
    navigator.mediaDevices.getUserMedia({ audio: true});
    classifier = ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/67yXERljc/model.json" , modelReady);
}

function modelReady() 
{
    classifier.classify(gotResults);
}

function gotResults(error, results)
{
    if(error){
        console.error(error);

    }
    else{
        console.log(results);

    random_number_r = Math.floor(Math.random() * 255) + 1;
    random_number_g = Math.floor(Math.random() * 255) + 1;
    random_number_b = Math.floor(Math.random() * 255) + 1;

    document.getElementById("detected").innerHTML = 'Detected Dog - '+dog+', Deteted cat - '+cat+', Detected bird - '+bird+', Detected cow - '+cow;
    document.getElementById("detected").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_b+")";

    document.getElementById("animal_voices").innerHTML = "Detected Voice is of - " + results[0].label;
    document.getElementById("animal_voices").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_r+")";

    img = document.getElementById('ear');

    if(results[0].label == "Barking")
    {
        img.src = "dog.gif";
        dog = dog + 1
        
    }
    else if(results[0].label=="Meowing")
    {
        img.src = 'cat.gif';
        cat = cat + 1
    }
    else if(results[0].label=="Chirping")
    {
        img.src = 'chirping.gif';
        bird = bird + 1
    }
    else if(results[0].label=="Mooing")
    {
        img.src = 'cow.gif';
        cow = cow + 1
    }

    else
    {
        img.src = 'ear.png';
       
    }
    
 }
}
    
    