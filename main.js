let backToTopButton = document.querySelector("#back-to-top-btn");
window.addEventListener("scroll",scrollFuction);

function scrollFuction(){
  if (window.pageYOffset>300){
    backToTopButton.style.display = "block";
  }
else{
  backToTopButton.style.display = "none";
}
}


backToTopButton.addEventListener("click",backToTop);

function backToTop(){
  window.scrollTo(0,0);
}




var typed = new Typed(".auto-type",{
strings:["Kamogelo"],
typeSpeed:150,
backSpeed:150,
loop:true

})