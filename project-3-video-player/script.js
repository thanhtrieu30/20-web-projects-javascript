const video = document.getElementById("video");
const play = document.getElementById("play");
const stopp = document.getElementById("stop");
const progress = document.getElementById("progress");
const timestamp = document.getElementById("timestamp");

const updateVideo = () => {
  if (video.paused) {
    video.play();
  } else {
    video.pause();
  }
};

const updateIcons = () => {
  if (video.paused) {
    play.innerHTML = '  <i class="fa fa-play fa-2x"></i>';
  } else {
    play.innerHTML = '  <i class="fa fa-pause fa-2x"></i>';
  }
};

const stopVideo = () => {
  video.currentTime = 0;
  video.pause();
};

const updateProgress = () => {
  progress.value = (video.currentTime / video.duration) * 100;

  let mins = Math.floor(video.currentTime / 60);
  if (mins < 10) {
    mins = "0" + String(mins);
  }

  let secs = Math.floor(video.currentTime % 60);
  if (secs < 10) {
    secs = "0" + String(secs);
  }

  timestamp.innerHTML = `${mins}:${secs}`;
};

const setVideoProgress = () => {
  video.currentTime = (progress.value * video.duration) / 100;
};

video.addEventListener("click", updateVideo);
video.addEventListener("click", updateIcons);
play.addEventListener("click", updateVideo);
play.addEventListener("click", updateIcons);
video.addEventListener("timeupdate", updateProgress);
stopp.addEventListener("click", stopVideo);
progress.addEventListener("change", setVideoProgress);
