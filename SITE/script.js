// function to change the milestone on clicking the buttons

function changing_milestone(element) {
  var id = element.id;
  var map = mapping
  console.log(id)
  console.log(map)
// seeking the current time to milestone time
  var videoPlayer = document.getElementById('our_vid')
  videoPlayer.currentTime = map[id].start;
  console.log(map[id].start)

  if (videoPlayer.paused == false) {
    videoPlayer.pause();
    setTimeout(()=> videoPlayer.play(),500);
  } else {
    setTimeout(()=> videoPlayer.play(),500);
  }


}
//spacebar to pause and play
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
//right arrow key to jump to next
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
// left arrow key to jump to previous
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

//flipping the card on clicking the power button
function click_to_flip() {
  const card_container = document.querySelector(".flip-card-container")
  card_container.addEventListener('click', toggle_flip());
  function toggle_flip() {
    card_container.classList.toggle("flipit");
  }
//rotating and sliding the power button on click
  const pow_btn = document.querySelector(".power-buttons")
  pow_btn.addEventListener('click', toggle_rotate());
  function toggle_rotate(){
    pow_btn.classList.toggle("rot");
    var videoPlayer = document.getElementById("our_vid")
    if (videoPlayer.paused == false) {
      videoPlayer.pause();
      setTimeout(()=> videoPlayer.currentTime=0,1000);
    }
    else{
      setTimeout(()=> videoPlayer.currentTime=0,1000);
    }
  }

  const bg = document.querySelector(".bod")
  bg.addEventListener('click',toggle_col());
  function toggle_col(){
    bg.classList.toggle("col");
  }

  const slider = document.querySelector(".navigation")
  slider.addEventListener('click',toggle_move());
  function toggle_move(){
    slider.classList.toggle('movup');
  }
}
