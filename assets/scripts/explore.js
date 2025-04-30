// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  // TODO
  const speechSynthesis = window.speechSynthesis
  const voiceSelector = document.getElementById("voice-select")
  //console.log(voiceSelector)
  const textBox = document.getElementById("text-to-speak")
  //console.log(textBox)
  const talkButton = document.querySelector("button")
  //console.log(talkButton)

  let voices = [];



  speechSynthesis.addEventListener("voiceschanged", function() {
    voices = speechSynthesis.getVoices()
    //console.log(voices)
    // const voiceLabels = voices.map(v => `${v.name} | ${v.lang}`)
    const voiceLabels = voices.map(v => ({name: v.name, lang: v.lang}))
    //console.log(voiceLabels)
    voiceLabels.forEach(vl => {
      const optionElem = document.createElement("option")
      optionElem.value = `${vl.name} | ${vl.lang}`
      optionElem.textContent = `${vl.name} | ${vl.lang}`
      optionElem.setAttribute('data-name', vl.name)
      optionElem.setAttribute('data-lang', vl.lang)
      voiceSelector.appendChild(optionElem)
    })
  })

  talkButton.addEventListener("click", function() {
    const faceEmojiImg = document.querySelector(`img[alt="Smiling face"]`)
    const utterThis = new SpeechSynthesisUtterance(textBox.value)
    utterThis.onstart = () => {
      faceEmojiImg.src = `assets/images/smiling-open.png`
    }
    utterThis.onend = () => {
      faceEmojiImg.src = `assets/images/smiling.png`
    }

    const selectedVoiceName = voiceSelector.selectedOptions[0].getAttribute("data-name")
    for (let voice of voices) {
      if (voice.name === selectedVoiceName) {
        //console.log('voice found')
        utterThis.voice = voice
      }
    }

    speechSynthesis.speak(utterThis)
  })

  // voiceSelector.addEventListener("input", function() {
  //   console.log(voiceSelector.value)
  // })
}
