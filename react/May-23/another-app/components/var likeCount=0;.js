var likeCount = 0;
var dislikeCout = 0;
function like() {
  likeCount = likeCount + 1;
  count = count + 1;
  var c = document.getElementById("counter");
  c.innerText = count;
  var likedisplay = document.getElementById("lik");
  likedisplay.innerText = likeCount;
  return likeCount, count
}
function dislike() {
  count = count - 1;
  dislikeCout = dislikeCout + 1;
  var c = document.getElementById("counter");
  c.innerText = count;
  var dislikedisplay = document.getElementById("dis")
  dislikedisplay.innerText = dislikeCout; return dislikeCout
}