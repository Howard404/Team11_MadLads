const audio1 = new Audio("./assets/fonts/music/main_menu.mp3");
const audio2 = new Audio("./assets/fonts/music/Hiking_Song.wav");
const audio3 = new Audio("./assets/fonts/music/Robot_Placeholder.mp3");
const audio4 = new Audio("./assets/fonts/music/dia_song.mp3");
const audio5 = new Audio("./assets/fonts/music/cat_song.mp3");

const audioArr = [audio1, audio2, audio3, audio4, audio5];

const buttons = document.querySelectorAll("button.music-button");
const page = document.querySelector("title");
const pageTitle = page.innerHTML;

console.log(pageTitle);

audioArr.forEach(audioELement => audioELement.loop = true);

if(pageTitle === "MadLads")
{
  audio1.play();
  audio1.volume = .15;
  buttons.forEach(button => {
    button.addEventListener("click", () => {
      if(audio1.paused){
          audio1.play();
      }else{
          audio1.pause();
      }
    });
  });
}

if(pageTitle === "MadLads - Hiking in the Mountains")
{
  audio2.play();
  audio2.volume = .4;
  buttons.forEach(button => {
    button.addEventListener("click", () => {
      if(audio2.paused){
          audio2.play();
      }else{
          audio2.pause();
      }
    });
  });
}

if(pageTitle === "MadLads - Robot Apocalypse")
{
  audio3.play();
  audio3.volume = .25;
  buttons.forEach(button => {
    button.addEventListener("click", () => {
      if(audio3.paused){
          audio3.play();
      }else{
          audio3.pause();
      }
    });
  });
}


if(pageTitle === "MadLads - Dia De Los Muertos")
{
  audio4.play();
  audio4.volume = .3;
  buttons.forEach(button => {
    button.addEventListener("click", () => {
      if(audio4.paused){
          audio4.play();
      }else{
          audio4.pause();
      }
    });
  });
}

if(pageTitle === "MadLads - Secret Lives of Cats")
{
  audio5.play();
  audio5.volume = .3;
  buttons.forEach(button => {
    button.addEventListener("click", () => {
      if(audio5.paused){
          audio5.play();
      }else{
          audio5.pause();
      }
    });
  });
}
