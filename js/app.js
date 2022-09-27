'use strict';
// Preloader
$(window).on('load', function () {
	$('.lds-ellipsis').fadeOut(); // will first fade out the loading animation
	$('.preloader').delay(333).fadeOut('slow'); // will fade out the white DIV that covers the website.
	$('body').delay(333);
});

$(document).ready(function () {
  $("#menuBtn").on("click", () => {
    $(".navlist").toggleClass("v-nav")
    $(".navlist").toggleClass("nav-active")
  });
  $(".home_heading").lettering("words");
  $(".sign_up_request > .container > h4").lettering("words")
  $("footer > h3").lettering("words")
  /* including the mixitup library to gallery list for better animation and toggling b/w gallery items*/
  var mixer = mixitup(".gallery_list")
  $("form").validate();

  /* FOR TOGGLING THE SIGN UP AND LOGIN PAGE */
  $(".toggleSignIn").click(function () {
    $("#sign_up_form").hide();
    $("#login_form").show();

  })
  $(".toggleSignUp").click(function () {
    $("#login_form").hide();
    $("#sign_up_form").show();

  })
  /* changes the size of header when it is not on the top of the page*/
  function nav_changer() {
    scrollPos = window.scrollY
    if (scrollPos > 1) {
      $(".for_header").removeClass("header")
      $("header").addClass("for_header");
      $(".logo").addClass("for_logo_header")
      $("nav").addClass("for_nav")
      $(".nav-item a").addClass("for_nav-item_a")
    }
    else {

      $("header").addClass("header");

      $("header").removeClass("for_header");
      $(".logo").removeClass("for_logo_header")
      $("nav").removeClass("for_nav")
      $(".nav-item a").removeClass("for_nav-item_a")


    }
  }
  /*CALLING THE FUNCTION WHEN THE PAGE LOADS */
  window.addEventListener("load", nav_changer);
  /*CALLING THE FUNCTION WHEN THE PAGE SCROLLS */
  window.addEventListener("scroll", nav_changer);
  $(".Home").on("inview",function(event,isInView){
    if (isInView) {
      $("#nav-link-1").css("color","rgb(52, 167, 233)");
      $("#nav-link-2").css("color","white");
      $("#nav-link-3").css("color","white");
      $("#nav-link-4").css("color","white");
      $("#nav-link-5").css("color","white");
      $("#nav-link-6").css("color","white");
      $("#nav-link-7").css("color","white");

    }
  
  })
  $(".about_us").on("inview",function(event,isInView){
    if (isInView) {
      $("#nav-link-1").css("color","white");
      $("#nav-link-2").css("color","rgb(52, 167, 233)");
      $("#nav-link-3").css("color","white");
      $("#nav-link-4").css("color","white");
      $("#nav-link-5").css("color","white");
      $("#nav-link-6").css("color","white");
      $("#nav-link-7").css("color","white");

    }
  
  })
  $(".services").on("inview",function(event,isInView){
    if (isInView) {
      $("#nav-link-1").css("color","white");
      $("#nav-link-2").css("color","white");
      $("#nav-link-3").css("color","rgb(52, 167, 233)");
      $("#nav-link-4").css("color","white");
      $("#nav-link-5").css("color","white");
      $("#nav-link-7").css("color","white");
      $("#nav-link-6").css("color","white");
    }
  
  })
  $(".gallery").on("inview",function(event,isInView){
    if (isInView) {
      $("#nav-link-1").css("color","white");
      $("#nav-link-2").css("color","white");
      $("#nav-link-3").css("color","white");
      $("#nav-link-4").css("color","rgb(52, 167, 233)");
      $("#nav-link-5").css("color","white");
      $("#nav-link-6").css("color","white");
      $("#nav-link-7").css("color","white");

    }
  
  })
  $(".Team").on("inview",function(event,isInView){
    if (isInView) {
      $("#nav-link-1").css("color","white");
      $("#nav-link-2").css("color","white");
      $("#nav-link-3").css("color","white");
      $("#nav-link-4").css("color","white");
      $("#nav-link-5").css("color","rgb(52, 167, 233)");
      $("#nav-link-6").css("color","white");
      $("#nav-link-7").css("color","white");

    }
  
  })
  $(".Pricing").on("inview",function(event,isInView){
    if (isInView) {
      $("#nav-link-1").css("color","white");
      $("#nav-link-2").css("color","white");
      $("#nav-link-3").css("color","white");
      $("#nav-link-4").css("color","white");
      $("#nav-link-5").css("color","white");
      $("#nav-link-6").css("color","rgb(52, 167, 233)");
      $("#nav-link-7").css("color","white");
    }
  
  })
  $(".testimonials").on("inview",function(event,isInView){
    if (isInView) {
      $("#nav-link-1").css("color","white");
      $("#nav-link-2").css("color","white");
      $("#nav-link-3").css("color","white");
      $("#nav-link-4").css("color","white");
      $("#nav-link-5").css("color","white");
      $("#nav-link-6").css("color","white");
      $("#nav-link-7").css("color","rgb(52, 167, 233)");
      
    }
  
  })

  $("#member1").on("mouseover", () => {
    $("#member1 > .member_data").css("opacity", "1");
    $("#member1 > .member_data > .name_and_work").css("transform", "scaleX(1)");

  });
  $("#member1").on("mouseleave", () => {
    $("#member1 > .member_data").css("opacity", "-1")
    $("#member1 > .member_data > .name_and_work").css("transform", "scaleX(0)");

  });
  $("#member2").on("mouseover", () => {
    $("#member2 > .member_data").css("opacity", "1")
    $("#member2 > .member_data > .name_and_work").css("transform", "scaleX(1)");

  });
  $("#member2").on("mouseleave", () => {
    $("#member2 > .member_data").css("opacity", "-1")
    $("#member2 > .member_data > .name_and_work").css("transform", "scaleX(0)");
  });
  $("#member3").on("mouseover", () => {
    $("#member3 > .member_data").css("opacity", "1")
    $("#member3 > .member_data > .name_and_work").css("transform", "scaleX(1)");

  });
  $("#member3").on("mouseleave", () => {
    $("#member3 > .member_data").css("opacity", "-1")
    $("#member3 > .member_data > .name_and_work").css("transform", "scaleX(0)");
  });
  $("#member4").on("mouseover", () => {
    $("#member4 > .member_data").css("opacity", "1")
    $("#member4 > .member_data > .name_and_work").css("transform", "scaleX(1)");

  });
  $("#member4").on("mouseleave", () => {
    $("#member4 > .member_data").css("opacity", "-1")
    $("#member4 > .member_data > .name_and_work").css("transform", "scaleX(0)");
  });
  $('.sponsors_slider').bxSlider({
    pager: false,
	minSlides: 2,
	maxSlides: 3,
	moveSlides: 1,
	slideWidth: 300,
  useCSS:false,
	slideMargin: 50,
  prevSelector: $('#client-prev'),
	nextSelector: $('#client-next'),
	prevText: '<i class="fa fa-angle-double-left"><i class="fa fa-angle-double-left"></i></i>',
	nextText: '<i class="fa fa-angle-double-right"><i class="fa fa-angle-double-right"></i></i>'
  });

 //Efext on labels on contact form
$("input.label_better, textarea.label_better").label_better({
	animationTime: 500,
	easing: "bounce",
	offset: 0,
	hidePlaceholderOnFocus: true
});
  /*Creating Home Section slideshow*/
  let slideIndex = 0;
  showSlides();
  function showSlides() {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {
      slideIndex = 1;
    }

    slides[slideIndex - 1].style.display = "flex";
    setTimeout(showSlides, 5000);//speed of the slides

  }

  
  AOS.init();//initializing the aos library

})
