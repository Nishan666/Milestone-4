setTimeout(function() {
	$('.banner-bx').addClass('active');
}, 500);

var themeOptionArr = {
	typography: '',
	version: '',
	layout: '',
	primary: '',
	headerBg: '',
	navheaderBg: '',
	sidebarBg: '',
	sidebarStyle: '',
	sidebarPosition: '',
	headerPosition: '',
	containerLayout: '',
	direction: '',
};


$(function () {
	$(".heart").on("click", function() {
		$(this).toggleClass("heart-blast");
	});
})



$(function () {
  $('[data-toggle="tooltip"]').tooltip()
})
jQuery('.inner-carousel').owlCarousel({
	loop:true,
	autoplaySpeed: 3000,
	navSpeed: 3000,
	paginationSpeed: 3000,
	slideSpeed: 3000,
	smartSpeed: 3000,
	autoplay: 3000,
	margin:30,
	nav:true,
	dots: true,
	navText: ['<i class="ti-arrow-left"></i>', '<i class="ti-arrow-right"></i>'],
	responsive:{
		0:{
			items:1,
			stagePadding:40,
			margin:20,
			center: true
		},
		
		700:{
			items:2
		},			
		
		991:{
			items:3
		},
		1500:{
			items:4
		}
	}
})


jQuery('.testimonial-two-dots').owlCarousel({
	loop:true,
	autoplaySpeed: 3000,
	navSpeed: 3000,
	paginationSpeed: 3000,
	slideSpeed: 3000,
	smartSpeed: 3000,
	autoplay: 3000,
	margin:30,
	nav:true,
	dots: true,
	navText: ['<i class="ti-arrow-left"></i>', '<i class="ti-arrow-right"></i>'],
	responsive:{
		0:{
			items:1
		},
		
		700:{
			items:2
		},			
		
		991:{
			items:2
		},
		1200:{
			items:3
		}
	}
})

jQuery('.showcase-carousel').owlCarousel({
	loop:true,
	autoplaySpeed: 3000,
	navSpeed: 3000,
	paginationSpeed: 3000,
	slideSpeed: 3000,
	smartSpeed: 3000,
	autoplay: 3000,
	margin:30,
	nav:true,
	stagePadding:100,
	dots: true,
	navText: ['<i class="ti-arrow-left"></i>', '<i class="ti-arrow-right"></i>'],
	responsive:{
		0:{
			items:1,
			stagePadding:0,
		},
		480:{
			items:1
		},			
		
		991:{
			items:2
		},
		1200:{
			items:3
		}
	}
})

jQuery('.awards-carousel').owlCarousel({
	loop:true,
	autoplaySpeed: 3000,
	navSpeed: 3000,
	paginationSpeed: 3000,
	slideSpeed: 3000,
	smartSpeed: 3000,
	autoplay: 3000,
	margin:30,
	nav:true,
	dots: true,
	navText: ['<i class="ti-arrow-left"></i>', '<i class="ti-arrow-right"></i>'],
	responsive:{
		0:{
			items:2
		},
		480:{
			items:4
		},			
		
		991:{
			items:5
		},
		1000:{
			items:6
		}
	}
})
jQuery('.inner-frame').owlCarousel({
	loop:true,
	autoplaySpeed: 3000,
	navSpeed: 3000,
	paginationSpeed: 3000,
	slideSpeed: 3000,
	smartSpeed: 3000,
	autoplay: 3000,
	margin:30,
	autoWidth:true,
	nav:false,
	dots: false,
	navText: ['<i class="ti-arrow-left"></i>', '<i class="ti-arrow-right"></i>'],
	responsive:{
		0:{
			items:1
		},
		480:{
			items:2
		},			
		
		991:{
			items:2
		},
		1000:{
			items:2
		}
	}
})
jQuery('.responsive-carousel').owlCarousel({
	loop:true,
	autoplaySpeed: 3000,
	navSpeed: 3000,
	paginationSpeed: 3000,
	slideSpeed: 3000,
	smartSpeed: 3000,
	autoplay: 3000,
	margin:30,
	autoWidth:true,
	nav:false,
	dots: false,
	navText: ['<i class="ti-arrow-left"></i>', '<i class="ti-arrow-right"></i>'],
	responsive:{
		0:{
			items:1
		},
		480:{
			items:2
		},			
		
		991:{
			items:2
		},
		1000:{
			items:2
		}
	}
})

	jQuery('#next-slide').on('click', function(){
	   $('.responsive-carousel').trigger('next.owl.carousel');
	});

	jQuery('#prev-slide').on('click', function(){
	   $('.responsive-carousel').trigger('prev.owl.carousel');
	});


	const colors = ["#00a15d", "#FF5E4B", "#2228B4", "#8621C3", "#F85F36"];

	const numBalls = 50;
	const balls = [];

	for (let i = 0; i < numBalls; i++) {
	  let ball = document.createElement("div");
	  ball.classList.add("ball");
	  ball.style.background = colors[Math.floor(Math.random() * colors.length)];
	  ball.style.left = `${Math.floor(Math.random() * 100)}vw`;
	  ball.style.top = `${Math.floor(Math.random() * 100)}vh`;
	  ball.style.transform = `scale(${Math.random()})`;
	  ball.style.width = `${Math.random()}em`;
	  ball.style.height = ball.style.width;
	  
	  balls.push(ball);
	  $( ".section-demo" ).append(ball);
	}

	balls.forEach((el, i, ra) => {
	  let to = {
		x: Math.random() * (i % 2 === 0 ? -11 : 11),
		y: Math.random() * 12
	  };

	  let anim = el.animate(
		[
		  { transform: "translate(0, 0)" },
		  { transform: `translate(${to.x}rem, ${to.y}rem)` }
		],
		{
		  duration: (Math.random() + 1) * 2000, 
		  direction: "alternate",
		  fill: "both",
		  iterations: Infinity,
		  easing: "ease-in-out"
		}
	  );
	});
	function wow_animation(){
		if($('.wow').length > 0)
		{
			var wow = new WOW(
			{
			  boxClass:     'wow',      
			  animateClass: 'animated', 
			  offset:       0,          
			  mobile:       false       
			});
			wow.init();	
		}	
	}
	wow_animation();



