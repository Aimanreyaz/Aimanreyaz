$(function(){
    // Banner Slider 
$('.banner_slick').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  arrows: false,
  
});
// service_slick
$('.service_slick').slick({
  slidesToShow: 4,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 1000,
  arrows: false,
  

  responsive: [
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        
      }
    },
   

  ]
});
// project filter
var containerEl = document.querySelector('.filter');

var mixer = mixitup(containerEl);
//video
new VenoBox({
  selector: '.my-video-links',
});
//video
//counter
jQuery(document).ready(function($) {
  $('.counter').counterUp({
      delay: 10,
      time: 2000
  });
});
// blog slick 
$('.blog_slick').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 1000,
  arrows: false,
  
});
//client slick
$('.client_slick').slick({
  slidesToShow:4,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 1000,
  arrows: false,
  
});
// sticky header 
 //  Stykey Header  
 $(window).scroll(function(){
  var scrolling = $(this).scrollTop();

  if(scrolling > 200){
      $('.navbar').addClass('sticky_header');
  }
  else {
       $('.navbar').removeClass('sticky_header');
  }
  });  
  //==== Back-to-top button
  $(window).on('scroll', function(event) {
    if($(this).scrollTop() > 600){
        $('.back_to_top').fadeIn(200)
    } else{
        $('.back_to_top').fadeOut(200)
    }
});
//==== Animate the scroll to top
$('.back_to_top').on('click', function(event) {
    event.preventDefault();

    $('html, body').animate({
        scrollTop: 0,
    }, 2000);
});
});
