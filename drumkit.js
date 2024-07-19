//Create audio container and append to body
const audioContainer = document.createElement("div");
audioContainer.className = "container audio";
document.body.appendChild(audioContainer);


//Create audio elements for drums with respective source and append to audioContainer
const audio = [];

for (let i = 0; i < 9; i++) {

    audio[i] = document.createElement("audio");
    audio[i].src=`./audio/${i+1}.wav`;
    audioContainer.appendChild(audio[i]);
}

// attach event handler to buttons
const keys = document.querySelectorAll(".keys");
window.addEventListener("keydown", (e) => {
    for (let key of keys) {
        if (key.classList.contains(e.key)) {
            let bit = audio[key.getAttribute("data-audio")];
            bit.currentTime = 0;
            bit.play();
            key.classList.add("playing");
        }
    }
});

keys.forEach((key) => {
    key.addEventListener("transitionend",() => {key.classList.remove("playing")});
});

