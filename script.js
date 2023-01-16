let imagesindex = 1;
showimages(imagesindex);
function plusslides(n) {
  showimages((imagesindex += n));
}
function currentslide(n) {
  showimages((imagesindex = n));
}
function showimages(n) {
  let i;
  let images = document.getElementsByClassName("carouselphoto");
  let dots = document.getElementsByClassName("dot");
  if (n > images.length) {
    imagesindex = 1;
  }
  if (n < 1) {
    imagesindex = images.length;
  }
  for (i = 0; i < images.length; i++) {
    images[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  images[imagesindex - 1].style.display = "block";
  dots[imagesindex - 1].className += " active";
}
