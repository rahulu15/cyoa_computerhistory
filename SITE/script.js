
function changing_milestone(to_time) {
  var videoPlayer = document.getElementById('our_vid')
  videoPlayer.currentTime = to_time;
  videoPlayer.play();
}

document.addEventListener('keyup', event => {
  var videoPlayer = document.getElementById("our_vid")
  if (event.code === 'Space') {
    if (videoPlayer.paused == false) {
      videoPlayer.pause();
    } else {
      videoPlayer.play();
    }
  }
});

function click_to_flip(){
  const card_container = document.querySelector(".flip-card-container")
  card_container.addEventListener('click', toggle_flip());

  function toggle_flip(){
    card_container.classList.toggle("flipit");
  }
}
