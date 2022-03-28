let btnBackward = document.querySelectorAll(".fa-solid")[1];
let btnPlay = document.querySelectorAll(".fa-solid")[2];
let btnPause = document.querySelectorAll(".fa-solid")[3];
let btnForward = document.querySelectorAll(".fa-solid")[4];

let sound = document.getElementById("audio");
let song = document.querySelectorAll(".song")[0];
let nome = document.querySelectorAll(".song")[1];
let photo = document.querySelector(".photo");
let slider = document.getElementById("music-slider");
let img = document.getElementById("ix");

var musics = [
  {
    artist: "Egzod & Maestro Chives",
    song: "Royalty (ft. Neoni)",
    audiosrc: "audio/1.mp3",
    url: "https://imagescdn.junodownload.com/full/CS5186634-02A-BIG.jpg",
  },
  {
    artist: "Reality (feat. Dayce Williams)",
    song: "Diviners & Azertion",
    audiosrc: "audio/2.mp3",
    url: "https://imagescdn.junodownload.com/full/CS5389520-02A-BIG.jpg",
  },
  {
    artist: "Abstrakt",
    song: "Nobody Else",
    audiosrc: "audio/3.mp3",
    url: "https://imagescdn.junodownload.com/full/CS5423746-02A-BIG.jpg",
  },
  {
    artist: "Harley Bird, NIVIRO",
    song: "The Edge",
    audiosrc: "audio/4.mp3",
    url: "https://imagescdn.junodownload.com/full/CS5457612-02A-BIG.jpg",
  },
];

window.onload = () => {
  songList(musics, 0);
};

sound.ontimeupdate = getTime;
slider.ontimeupdate = getSliderTime;

function getTime() {
    let time = sound.currentTime;
    let duration = sound.duration;
    slider.max = duration;
    slider.value = time;

    console.log(time);
    console.log(duration);

    if(time == duration){
      nextSong();
    }
}

function getSliderTime() {
  sound.currentTime = slider.value;
}

var i = 0;
var iB = 4;

btnPlay.addEventListener("click", function () {
  audio.play();
});
btnPause.addEventListener("click", function () {
  audio.pause();
});
btnBackward.addEventListener("click", nextSong);

function nextSong() {
  if (iB >= 0) {
    songList(musics, (iB -= 1));
    audio.play();
  } else {
    iB = 4;
    songList(musics, 3);
    audio.play();
  }
}
btnForward.addEventListener("click", function (e) {
  if (i < 3) {
    songList(musics, (i += 1));
  } else {
    i = 0;
    songList(musics, i);
  }
  audio.play();
});

function songList(music, e) {
  var a = music[e];
  audio.src = a.audiosrc;
  song.innerHTML = a.song;
  nome.innerHTML = a.artist;
  photo.src = a.url;
}

darkMode = () => { 
  var body = document.body;
  body.classList.toggle('dark-mode');
  img.classList.toggle('dark-mode-img');
}
