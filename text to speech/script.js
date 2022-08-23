const textarea = document.querySelector("textarea");
const voiceList = document.querySelector("select");
const speechbtn = document.querySelector("button");

let synth = speechSynthesis;

function voices() {
  for (let voice of synth.getVoices()) {
    let selected = voice.name === "Google US English" ? "selected" : "";
    let option = `  <option value="${voice.name}" ${selected}>${voice.name}(${voice.lang})</option>`;
    voiceList.insertAdjacentHTML("beforeend", option);
  }
}
synth.addEventListener("voiceschanged", voices);

function textToSpeech(text) {
  let utternance = new SpeechSynthesisUtterance(text);
  for (let voice of synth.getVoices()) {
    if (voice.name === voiceList.value) {
      utternance.voice = voice;
    }
  }
  synth.speak(utternance);
}

speechbtn.addEventListener("click", (e) => {
  e.preventDefault();
  if (textarea.value !== "") {
    textToSpeech(textarea.value);
  }
});
