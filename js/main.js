jQuery(function($) {

	//Preloader
	var preloader = $('.preloader');
	$(window).load(function(){
		preloader.remove();
	});

	//#main-slider
	var slideHeight = $(window).height();
	$('#home-slider .item').css('height',slideHeight);

	$(window).resize(function(){
        'use strict';
		$('#home-slider .item').css('height',slideHeight);
	});
	
	//Scroll Menu
	$(window).on('scroll', function(){
		if( $(window).scrollTop()>slideHeight ){
			$('.main-nav').addClass('navbar-fixed-top');
		} else {
			$('.main-nav').removeClass('navbar-fixed-top');
		}
	});
	
	// Navigation Scroll
	$(window).scroll(function(event) {
		Scroll();
	});

	$('.navbar-collapse ul li a').on('click', function() {  
		$('html, body').animate({scrollTop: $(this.hash).offset().top - 5}, 1000);
        $('.navbar-collapse.collapse.in').removeClass('in');
		return false;
	});

	// User define function
	function Scroll() {
		var contentTop      =   [];
		var contentBottom   =   [];
		var winTop      =   $(window).scrollTop();
		var rangeTop    =   200;
		var rangeBottom =   500;
		$('.navbar-collapse').find('.scroll a').each(function(){
			// contentTop.push( $( $(this).attr('href') ).offset().top);
			// contentBottom.push( $( $(this).attr('href') ).offset().top + $( $(this).attr('href') ).height() );
		})
		$.each( contentTop, function(i){
			if ( winTop > contentTop[i] - rangeTop ){
				$('.navbar-collapse li.scroll')
				.removeClass('active')
				.eq(i).addClass('active');			
			}
		})
	};

	$('#tohash').on('click', function(){
		$('html, body').animate({scrollTop: $(this.hash).offset().top - 5}, 1000);
		return false;
	});
    
    if($(window).width() > 767){
        //Initiat WOW JS
        new WOW().init();
    }
	
	//smoothScroll
	// smoothScroll.init();
	
	// Progress Bar
	$('#about-us').bind('inview', function(event, visible, visiblePartX, visiblePartY) {
		if (visible) {
			$.each($('div.progress-bar'),function(){
				$(this).css('width', $(this).attr('aria-valuetransitiongoal')+'%');
			});
			$(this).unbind('inview');
		}
	});

	//Countdown
	$('#features').bind('inview', function(event, visible, visiblePartX, visiblePartY) {
		if (visible) {
			$(this).find('.timer').each(function () {
				var $this = $(this);
				$({ Counter: 0 }).animate({ Counter: $this.text() }, {
					duration: 2000,
					easing: 'swing',
					step: function () {
						$this.text(Math.ceil(this.Counter));
					}
				});
			});
			$(this).unbind('inview');
		}
	});

	// Portfolio Single View
	$('#portfolio').on('click','.folio-read-more',function(event){
		event.preventDefault();
		var link = $(this).data('single_url');
		var full_url = '#portfolio-single-wrap',
		parts = full_url.split("#"),
		trgt = parts[1],
		target_top = $("#"+trgt).offset().top;

		$('html, body').animate({scrollTop:target_top}, 600);
		$('#portfolio-single').slideUp(500, function(){
			$(this).load(link,function(){
				$(this).slideDown(500);
			});
		});
	});

	// Close Portfolio Single View
	$('#portfolio-single-wrap').on('click', '.close-folio-item',function(event) {
		event.preventDefault();
		var full_url = '#portfolio',
		parts = full_url.split("#"),
		trgt = parts[1],
		target_offset = $("#"+trgt).offset(),
		target_top = target_offset.top;
		$('html, body').animate({scrollTop:target_top}, 600);
		$("#portfolio-single").slideUp(500);
	});

	// Contact form
	var form = $('#main-contact-form');
	form.submit(function(event){
		event.preventDefault();
		var form_status = $('<div class="form_status"></div>');
		$.ajax({
			url: $(this).attr('action'),
			beforeSend: function(){
				form.prepend( form_status.html('<p><i class="fa fa-spinner fa-spin"></i> Email is sending...</p>').fadeIn() );
			}
		}).done(function(data){
			form_status.html('<p class="text-success">Thank you for contact us. As early as possible  we will contact you</p>').delay(3000).fadeOut();
		});
	});

// 	var latitude = $('#google-map').data('latitude')
// 	var longitude = $('#google-map').data('longitude')
// 	function initialize_map() {
// 		var myLatlng = new google.maps.LatLng(latitude,longitude);
// 		var mapOptions = {
// 			zoom: 14,
// 			scrollwheel: false,
// 			center: myLatlng
// 		};
// 		var map = new google.maps.Map(document.getElementById('google-map'), mapOptions);
// 		var contentString = '';
// 		var infowindow = new google.maps.InfoWindow({
// 			content: '<div class="map-content"><ul class="address">' + $('.address').html() + '</ul></div>'
// 		});
// 		var marker = new google.maps.Marker({
// 			position: myLatlng,
// 			map: map
// 		});
// 		google.maps.event.addListener(marker, 'click', function() {
// 			infowindow.open(map,marker);
// 		});
// 	}
// 	google.maps.event.addDomListener(window, 'load', initialize_map);
	
});

// popup in profile section <start>
let data = {
	 'garbage_collection':`<h2>Garbage Collection</h2><h3>ABOUT</h3><p>Garbage Collection System provides an interface between users and the garbage collector/driver.There interface between the user portal and driver portal are collected by the admin.</p><h3>FEATURES</h3><p>Responsive Website/Mobile application<br>Schedule waste pickup<br>Efficient routing of location<br>Categorisation of waste</p>`,              
	  'carbon_reduction':`<h2>Identification in reduction of carbon footprint emission</h2> <h3>ABOUT SIH</h3><p>Smart India Hackathon is a nationwide initiative to provide students a platform to solve some of the pressing problems we face in our daily lives, and thus inculcate a culture of product innovation and a mindset of problem solving.The last edition of the hackathon saw over 5 million+ students from various engineering colleges compete for the top prize at 35+ locations.In SIH, the students would also have the opportunity to work on challenges faced within the private sector organisations and create world class solutions for some of the top companies in the world, thus helping the Private sector hire the best minds from across the nation.</p> <h3>Project Description</h3><p>Idea is to predict the per capita CO2 footprints caused due to the heavy usage of transport in our country. We first cleaned our dataset and performed Categorical Encoding on Categorical Features and Feature Scaling on Numerical
  Features.
  -After that, we tried different Regression Algorithms ( Multi-Variable Linear Regression, Support Vector Regression,
  Decision Tree Regression Random Forest Regression ).
  -Finally, we opted for Random Forest Regression for our model for its stable predictions through which we led our
  model to an accuracy of 99.6</p>
  <h3>Photos</h3>
  <div class="center">
  <img src="./images/portfolio/carbon_footprints.jpeg" width="60%" alt="">
 </div>` ,

	   'Nail_brain':`<h2>Nail the brain</h2><h3>ABOUT</h3><p>Nail the brain is an online learning project , malking continuous efforts to help you build your future regardless of fact from which college you belong.</p><h3>PROBLEMS SOLVED</h3><p>Flexibility<br> Lower cost<br>Includes IDE<br>Best guidance<br>Provides Roadmap for technologies<br>Provides ability to enhance your career</p>`,
	   'cssbattleground':`<h2>CSS Battleground</h2>
	   					<h3>First</h3>
						   <div class="center">
						   		<img src="./images/cssbattleground/first.jpeg" width="100%" alt="">
						   		<img src="./images/cssbattleground/first.jpg" width="100%" alt="">
						  	</div>
						<h3>Second</h3>
							<div class="center">
								<img src="./images/cssbattleground/second.jpeg" width="100%" alt="">
								<img src="./images/cssbattleground/second.jpg" width="100%" alt="">
							</div>
						<h3>Third</h3>
							<div class="center">
						   		<img src="./images/cssbattleground/third.jpeg" width="100%" alt="">
						   		<img src="./images/cssbattleground/third.jpg" width="100%" alt="">
						  	</div>`                   
								
  }
  // Initialize Variables
	  let closePopup = document.querySelector(".popupclose");
	  let content = document.querySelector(".popupcontent");
	  let overlay = document.getElementById("overlaya");
	  let popup = document.getElementById("popup");
	  let button = document.getElementById("button");
	  // Close Popup Event
	  try{
		closePopup.onclick = function() {
			overlay.style.display = 'none';
			popup.style.display = 'none';
			document.querySelector("body").style.overflowY="scroll"
		};
	  }catch(e){

	  }
	// Show Overlay and Popup
	function show_card(e) {
		overlay.style.display = 'block';
		popup.style.display = 'block';
		content.innerHTML = data[e]
		document.querySelector("body").style.overflowY="hidden"
	  }

// popup in profile section <over>

// scroller in workshop section <start>
import {
	sdata
} from './scroller_data.js'
const cover = document.getElementById("cover");
sdata.forEach((e, i) => {
	cover.innerHTML += `
    <div class="box center" style="right:-${i*100}vw;">
    <h1>${e.heading}</h1>
    <br>
    <h2>${e.heading1}</h2><br>
    <p>${e.head_description}</p>
    <h2>${e.heading2}</h2><br>
    <p>${e.head2_description}</p><br>
    ${e.line}<br>
    <h2>${e.heading3}</h2><br>
    <p>${e.head3_description}</p><br><br>
    <div class="center" style="justify-content: space-evenly;">
    <a href="https://cxi-miet.github.io/cssbattleground/" class="s_button" style="display:${e.display};">${e.button1}</a>
    <a class="s_button" onclick="show_card('cssbattleground')" style="display:${e.display};">${e.button2}</a>
    </div>
    </div>
    `
});
let transform = 0;
document.getElementById('right').addEventListener('click', () => {
	if (transform == sdata.length - 1) {
		transform = 0;
	} else {
		transform++;
	}
	cover.style = `transform:translate(-${transform*100}vw)`
})
document.getElementById('left').addEventListener('click', () => {
	if (transform == 0) {
		transform = sdata.length - 1;
	} else {
		transform--;
	}
	cover.style = `transform:translate(-${transform*100}vw)`
})
// scroller in workshop section <over>

//==============scroll=====================
//=================sections=================
let link= document.querySelectorAll(".link");
let bottomPage=window.innerHeight/6*2;
let section = document.querySelectorAll("section");
window.addEventListener("scroll",()=>{
        // for adjust navbar link
        try {
			for(let i=0;i<6;i++){
				let len=section[i].getBoundingClientRect().top;
				if(len>=-10 && len<=bottomPage){
					 link.forEach((e)=>{
						 e.classList="link";
					 });
					 link[i].classList="link active"
				}
			}
		} catch (error) {
			
		}
});