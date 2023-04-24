const audio = new Audio("./assets/fonts/music/wii_music.mp3");
const buttons = document.querySelectorAll("button.music-button");
audio.loop = true;

buttons.forEach(button => {
  button.addEventListener("click", () => {
    if(audio.paused){
        audio.play();
    }else{
        audio.pause();
    }
  });
});