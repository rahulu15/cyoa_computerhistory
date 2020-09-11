
function changing_milestone(to_time) {
  var videoPlayer = document.getElementById('our_vid')
  videoPlayer.currentTime = to_time;
  videoPlayer.play();
}

function changing_milestone_json(element) {
  var id = element.id;
  var map = mapping
  console.log(id)
  console.log(map)
  var videoPlayer = document.getElementById('our_vid')
  videoPlayer.currentTime = map[id].start;
  console.log(map[id].start)
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

document.addEventListener('keyup', event => {
  var videoPlayer = document.getElementById("our_vid")
  if (event.code === 'ArrowRight') {
    for (const milestone in mapping) {
      if (videoPlayer.currentTime > mapping[milestone].start && videoPlayer.currentTime < mapping[milestone].next) {
        videoPlayer.currentTime = mapping[milestone].next;
        break;
      }
    }
  }
});

document.addEventListener('keyup', event => {
  var videoPlayer = document.getElementById("our_vid")
  if (event.code === 'ArrowLeft') {
    for (const milestone in mapping) {
      if (videoPlayer.currentTime > mapping[milestone].start && videoPlayer.currentTime < mapping[milestone].next) {
        videoPlayer.currentTime = mapping[milestone].previous;
        break;
      }
    }
  }
});

function click_to_flip() {
  const card_container = document.querySelector(".flip-card-container")
  card_container.addEventListener('click', toggle_flip());

  function toggle_flip() {
    card_container.classList.toggle("flipit");
  }
}
