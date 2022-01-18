function startclassification(){
    navigator.mediaDevices.getUserMedia({ audio:true });
    classifier=ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/Palxjarip/model.json',modelloaded);
}

function modelloaded(){
    classifier.classify(gotResult);
}

function gotResult(error,result){
    if(error){
        console.error(error);
    }else{
        console.log(result);
        random_r = Math.floor(Math.random()* 255) + 1;
        random_g = Math.floor(Math.random()* 255) + 1;
        random_b = Math.floor(Math.random()* 255) + 1;

        document.getElementById("result_label").innerHTML="I can hear - " + result[0].label;
        document.getElementById("result_accuracy").innerHTML="Accuracy - " + (result[0].confidence * 100).toFixed(2) + "%";
        document.getElementById("results").style.color = "rgb("+random_r+","+random_g+","+random_b+")";

        img1=document.getElementById("animal_image");
    }

        if(result[0].label=="dog"){
            img1.src="images (11).jpg";

        }else if(result[0].label=="cat"){
            img1.src="download.jpg";

        }else if(result[0].label=="cow"){
            img1.src="download (1).jpg";
            
        }else if(result[0].label=="lion"){
            img1.src="images.png";
        }else{
            img1.src="6778-siri-style-loading (1).gif"
        }
}