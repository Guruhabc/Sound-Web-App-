function startClassification()
{
    navigator.mediaDevices.getUserMedia({audio: true});
    function startClassification() { navigator.mediaDevices.getUserMedia({ audio: true}); classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/kA4F-80yW/model.json', modelReady); }
}
function modelReady()
{
classifier.classify(gotResults);
}

function gotResults(error,result){ 
    if (error) {
        console.error(error);
    } else {
        console.log(results);
        random_number_r = Math.floor(Math.random() * 255) + 1;
        random_number_g = Math.floor(Math.random() * 255) + 1;
        random_number_b = Math.floor(Math.random() * 255) + 1;

        document.getElementById("result_label").innerHTML = 'I can hear - '+
        results[0].label;

        document.getElementById("result_cofidance").innerHTML = 'Accuracy - '+
        results[0].label;

        document.getElementById("result_label").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_b+")";
        document.getElementById("result_confidence").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_b+")";

        document.getElementById("result_label").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_r+")"; 
        document.getElementById("result_confidence").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_r+")";

        img = document.getElementById('gif');
        img = document.getElementById('gif1');
        img = document.getElementById('gif2');
        img = document.getElementById('gif3');

        if (results[0].label == "Clap") {
            img.src = 'gif.gif'
            img.src = 'gif1.png'
            img.src = 'gif2.png'
            img.src = 'gif3.png'
        }if (results[0].label == "Bell") {
            img.src = 'gif.png'
            img.src = 'gif1.gif'
            img.src = 'gif2.png'
            img.src = 'gif3.png'
        }if (results[0].label == "Snapping") {
            img.src = 'gif.png'
            img.src = 'gif1.png'
            img.src = 'gif2.gif'
            img.src = 'gif3.png'
        }else{
            img.src = 'gif.png'
            img.src = 'gif1.png'
            img.src = 'gif2.png'
            img.src = 'gif3.gif'
        }
    }
}





