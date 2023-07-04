const init = () => {

    let keyDrum = document.getElementsByClassName('key');

    let playSound = (e) => {
        const audioElement = document.querySelector(`audio[data-key="${e}"]`);
        audioElement.currentTime = 0;
        audioElement.play();
    }

    for(let keyDrumChild of keyDrum) {
        keyDrumChild.onclick = () => {
            playSound(keyDrumChild.getAttribute('data-type'))
    }
    }

    window.addEventListener('keydown',(e) => playSound(e.keyCode));
}

window.onload = init;