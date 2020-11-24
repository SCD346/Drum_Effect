//console.log("test")

function playSound(e) {
        //console.log(e.keyCode);
        const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
        const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
        //console.log(audio);
        if(!audio) return; //stops function from returning all together
        audio.currentTime = 0;
        audio.play()
        //console.log(key)
        key.classList.add('playing');
}

function removeTransition (e) {
    //console.log(e)
    if(e.propertyName !== 'transform') return;
    //console.log(e.propertyName);
    console.log(this)
    this.classList.remove('playing');
}

const keys = document.querySelectorAll('.key')
keys.forEach(key => key.addEventListener('transitionend', removeTransition));
window.addEventListener('keydown', playSound)
