$(document).ready(function(){
	var typed = new Typed("h1 .typed", {
		  strings: ["Weigh Loss", "Healthy Life", "Happiness"],
		  typeSpeed: 100,
		  backSpeed:100,
		  loop:true
	});

	/*Infographic Animations & card*/
	let hiddenBars;
	let shownBar;
	let hiddenLines;
	let shownLine;
	let i = 0;

	function loopAnimate(){
		 let bars  = ["#BlueBar", "#YellowBar", "#RedBar", "#PurpleBar"];
		 let lines = ["#BlueLine", "#YellowLine", "#RedLine", "#PurpleLine"];
		 let txt   = [".stBlue", ".stYellow", ".stRed", ".stPurple"];

	     if(i === bars.length){
	         i = 0;
	       }
		 let cards = $(".card-info");
		 $(cards[i]).fadeIn().siblings().fadeOut();

  	     shownBar  = bars[i];   
		 shownLine = lines[i];
		 shownTxt  = txt[i];
		 bars.splice(bars.indexOf(bars[i]),1)
		 lines.splice(bars.indexOf(bars[i]),1)
		 txt.splice(bars.indexOf(bars[i]),1)
	       
	  	 i+=1;
         
         return {
         	shownBar:shownBar.toString(),
         	bars:bars.toString(),
         	shownLine:shownLine.toString(),
         	lines:lines.toString(),
         	txt:txt.toString(),
         	shownTxt:shownTxt.toString()
         }
	}
	let tl = new TimelineMax();		

	let looped = loopAnimate();
	 function animate(){
			looped = loopAnimate();
			tl
		   	.to( [looped.bars, looped.lines, looped.txt], .5, {
				opacity:.2
			})
			.to("#Circle", 1, {
				scale:1.2,
				transformOrigin:"50% 50%",
			})
			.to("#Circle", 1, {
				scale:1,
				transformOrigin:"50% 50%",
				delay:1
			})
			.to([looped.bars, looped.lines, looped.txt], 1, {
				opacity:1,
				onComplete:function(){
					animate();	
				}
			});


	 }

	 animate()

	 /* Accordion */

	$('li.accordion-item').on('click', function(){
		$(this).find('.accordion-child')
			   .addClass('check')
			   .parent()
			   .siblings()
			   .find('.accordion-child')
			   .removeClass('check')
	}) 

	/*comparison*/
	var bg = document.querySelector('.item-bg');
var items = document.querySelectorAll('.news__item');
var item = document.querySelector('.news__item');


if($(window).width() > 800) {
    $(document).on("mouseover", ".news__item", function (_event, _element) {

        var newsItem = document.querySelectorAll('.news__item');
        newsItem.forEach(function (element, index) {
            element.addEventListener('mouseover', function () {
                var x = this.getBoundingClientRect().left;
                var y = this.getBoundingClientRect().top;
                var width = this.getBoundingClientRect().width;
                var height = this.getBoundingClientRect().height;

                $('.news__item').removeClass('active');
                // $('.news__item').removeClass('active');


                bg.style.width = width + 'px';
                bg.style.height = height + 'px';
                bg.style.transform = 'translateX(' + x + 'px ) translateY(' + y + 'px)';
            });

            element.addEventListener('mouseleave', function () {
                $('.item-bg').removeClass('active');
                $('.news__item').removeClass('active');
            });

        });

    });
}


var swiper = new Swiper('.news-slider', {
    effect: 'coverflow',
    grabCursor: true,
    loop: true,
    centeredSlides: true,
    keyboard: true,
    spaceBetween: 0,
    slidesPerView: 'auto',
    speed: 300,
    coverflowEffect: {
        rotate: 0,
        stretch: 0,
        depth: 0,
        modifier: 3,
        slideShadows: false
    },
    breakpoints: {
        480: {
            spaceBetween: 0,
            centeredSlides: true
        }
    },
    simulateTouch: true,
    navigation: {
        nextEl: '.news-slider-next',
        prevEl: '.news-slider-prev'
    },
    pagination: {
        el: '.news-slider__pagination',
        clickable: true
    },
    on: {
        init: function () {
            var activeItem = document.querySelector('.swiper-slide-active');

            var sliderItem = activeItem.querySelector('.news__item');

            $('.swiper-slide-active .news__item').addClass('active');

            var x = sliderItem.getBoundingClientRect().left;
            var y = sliderItem.getBoundingClientRect().top;
            var width = sliderItem.getBoundingClientRect().width;
            var height = sliderItem.getBoundingClientRect().height;


            $('.item-bg').addClass('active');

            bg.style.width = width + 'px';
            bg.style.height = height + 'px';
            bg.style.transform = 'translateX(' + x + 'px ) translateY(' + y + 'px)';
	        }
	    }
	});

	swiper.on('touchEnd', function () {
	    $('.news__item').removeClass('active');
	    $('.swiper-slide-active .news__item').addClass('active');
	});

	swiper.on('slideChange', function () {
	    $('.news__item').removeClass('active');
	});

	swiper.on('slideChangeTransitionEnd', function () {
	    $('.news__item').removeClass('active');
	    var activeItem = document.querySelector('.swiper-slide-active');

	    var sliderItem = activeItem.querySelector('.news__item');

	    $('.swiper-slide-active .news__item').addClass('active');

	    var x = sliderItem.getBoundingClientRect().left;
	    var y = sliderItem.getBoundingClientRect().top;
	    var width = sliderItem.getBoundingClientRect().width;
	    var height = sliderItem.getBoundingClientRect().height;


	    $('.item-bg').addClass('active');

	    bg.style.width = width + 'px';
	    bg.style.height = height + 'px';
	    bg.style.transform = 'translateX(' + x + 'px ) translateY(' + y + 'px)';
	});

	/*Screenshots Section */

	$('.slider').owlCarousel({
            items: 1,
            singleItem:true,
            nav: true,
            dots: false,
            loop: true,
            autoPlay: 6000
        });

	let tl2 = new TimelineMax();
	let lists = $(".screenshots ul li");
	let k = 0;
	setInterval(function(){
		if(k == lists.length){
			k = 0;
		}

		tl2
			.to(lists[k], 0.6, {
				opacity:1,
			})
			.to(lists[k],0.3, {
				opacity:0,
				delay:5.4

			})

		k+=1
	})

let team = document.getElementById("team-inf");
let Hscreen = document.getElementsByClassName("hover-screen")[0];
console.dir(Hscreen);
document.addEventListener("click", element =>{
      console.dir(element)
    if(element.target.className.includes("hover-screen")){
        team.style.transform = "translate(0, 0%) "
    }
 if(element.target.id === "close"){
   
    team.style.transform = "translate(0, 100%) "
   
 } 
})

})



