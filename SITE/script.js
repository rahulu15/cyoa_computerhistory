
function changing_milestone(to_time) {
  var videoPlayer = document.getElementById('my_vid')
  videoPlayer.currentTime = to_time;
  videoPlayer.play();
}

document.addEventListener('keyup', event => {
  var videoPlayer = document.getElementById('my_vid')
  if (event.code === 'Space') {
    if (videoPlayer.paused == false) {
      videoPlayer.pause();
    } else {
      videoPlayer.play();
    }
  }
});
