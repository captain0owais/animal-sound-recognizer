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
    }
}