$(document).ready(function(){
  $(".preview").dblclick(function(){
    $(this).addClass('focus')
    $(this).removeClass('preview')
    $(".preview").not(this).css({"display": "none"});
    $(".close-button").css({"display": "block"});
    $(".text-box").css({"display":"none"});
    $(".main-space").css({"height":"1100px"})
  })

  $('.close-button').dblclick(function(e){
    $('.focus').addClass("preview")
    $('.focus').removeClass("focus")
    $('.preview').css({"display": "block"});
    $('.close-button').css({"display": "none"});
    $(".main-space").css({"height":"800px"});
    $(".text-box").css({"display":"block"});
    e.stopPropagation();
  })
})

window,addEventListener("scroll", function(){
  var titlebar = document.getElementsByClassName("title");
  for(let i=0; i <= titlebar.length; i++){
    if(titlebar[i].style.display != "none"){
      if(this.window.scrollY > titlebar[i].style.height){
        titlebar[i].classList.add("stick");
      } else {
        titlebar[i].classList.remove("stick");
      }
    }
  }

})