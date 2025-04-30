// expose.js

window.addEventListener('DOMContentLoaded', init);
const jsConfetti = new JSConfetti()

function init() {
  // TODO
  const hornSelector = document.getElementById("horn-select")
  //console.log(hornSelector)
  const audioElement = document.querySelector(`audio[class="hidden"]`)
  audioElement.volume = 0.5
  
  hornSelector.addEventListener("change", function() {
    const hornImage = document.querySelector(`img[alt="No image selected"]`)
    hornImage.src = `assets/images/${hornSelector.value}.svg`
    audioElement.src = `assets/audio/${hornSelector.value}.mp3`
  })

  const playSoundButton = document.querySelector("button")
  //console.log(playSoundButton)
  playSoundButton.addEventListener("click", function() {
    audioElement.play()

    if (audioElement.src.includes('party')) {
      //console.log('shoot confetti')
      jsConfetti.addConfetti()
    }
  })

  const volumeBar = document.getElementById("volume")
  //console.log(volumeBar)
  volumeBar.addEventListener("input", function () {
    audioElement.volume = (volumeBar.value) / 100
    const volumeIcon = document.querySelector(`img[alt="Volume level 2"]`)
    if (volumeBar.value == 0) {
      volumeIcon.src = `assets/icons/volume-level-0.svg`
    }
    else if (volumeBar.value < 33) {
      volumeIcon.src = `assets/icons/volume-level-1.svg`
    }
    else if (volumeBar.value < 67) {
      volumeIcon.src = `assets/icons/volume-level-2.svg`
    }
    else {
      volumeIcon.src = `assets/icons/volume-level-3.svg`
    }
  })
}
