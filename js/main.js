function playAudio() {
    let sound = new Audio();
    sound.addEventListener('canplaythrough', function () {
        sound.play();
    });
    sound.type = "audio/wav";
    sound.src = "../assets/files/sound.wav"
}

let inputForm = document.getElementById("inputForm");
inputForm.addEventListener("click", playAudio);
inputForm.addEventListener("submit", submitAction);

function submitAction() {
    submitAction.preventDefault;
    alert("Thank you for submitting the form!");
}
