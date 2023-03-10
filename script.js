

//     nav.innerHTML = `
//         <div class="nav">
//             <img src="images/logo.jpeg" class="brand-logo" alt="">
//             <div class="nav-items">
//                 <div class="search">
//                     <input type="text" class="search-box" placeholder="search brand, product">
//                     <button class="search-btn">search</button>
//                 </div>
//                 <a href="#"><img src="img/user.png" alt=""></a>
//                 <a href="#"><img src="img/cart.png" alt=""></a>
//             </div>
//         </div>
//         <ul class="links-container">
//             <li class="link-item"><a href="#" class="link">Fashion</a></li>
//             <li class="link-item"><a href="#" class="link">Beauty & Personal care</a></li>
//             <li class="link-item"><a href="#" class="link">Home decor</a></li>
//             <li class="link-item"><a href="#" class="link">Products near me</a></li>
//         </ul>
//     `;
// }

// createNav();

// //////

// function prev(){
//     document.getElementById('slider-container').scrollLeft -= 270;
// }

// function next()
// {
//     document.getElementById('slider-container').scrollLeft += 270;
// }


// $(".slide2 img").on("click" , function(){
// $(this).toggleClass('zoomed');
// $(".overlay").toggleClass('active');
// })



// another slider

//  set --n (used for calc in CSS) via JS, after getting
// .container and the number of child images it holds:

// const _C = document.querySelector(".slider-container"),
//   N = _C.children.length;

// _C.style.setProperty("--n", N);

// detect the direction of the motion between "touchstart" (or "mousedown") event
// and the "touched" (or "mouseup") event
// and then update --i (current slide) accordingly
// and move the container so that the next image in the desired direction moves into the viewport

// on "mousedown"/"touchstart", lock x-coordiate
// and store it into an initial coordinate variable x0:
// let x0 = null;
// let locked = false;

// function lock(e) {
//   x0 = unify(e).clientX;
//   // remove .smooth class
//   _C.classList.toggle("smooth", !(locked = true));
// }

// next, make the images move when the user swipes:
// was the lock action performed aka is x0 set?
// if so, read current x coordiante and compare it to x0
// from the difference between these two determine what to do next

// let i = 0; // counter
// let w; //image width

// // update image width w on resive
// function size() {
//   w = window.innerWidth;
// }

// function move(e) {
//   if (locked) {
//     // set threshold of 20% (if less, do not drag to the next image)
//     // dx = number of pixels the user dragged
//     let dx = unify(e).clientX - x0,
//       s = Math.sign(dx),
//       f = +(s * dx / w).toFixed(2);

    // Math.sign(dx) returns 1 or -1
    // depending on this, the slider goes backwards or forwards

//     if ((i > 0 || s < 0) && (i < N - 1 || s > 0) && f > 0.2) {
//       _C.style.setProperty("--i", (i -= s));
//       f = 1 - f;
//     }

//     _C.style.setProperty("--tx", "0px");
//     _C.style.setProperty("--f", f);
//     _C.classList.toggle("smooth", !(locked = false));
//     x0 = null;
//   }
// }

// size();

// addEventListener("resize", size, false);

// // ===============
// // drag-animation for the slider when it reaches the end
// // ===============

// function drag(e) {
//   e.preventDefault();

//   if (locked) {
//     _C.style.setProperty("--tx", `${Math.round(unify(e).clientX - x0)}px`);
//   }
// }

// ===============
// prev, next
// // ===============
// let prev = document.querySelector(".prev");
// let next = document.querySelector(".next");

// prev.addEventListener("click", () => {
//   if (i == 0) {
//     console.log("start reached");
//   } else if (i > 0) {
//     // decrease i as long as it is bigger than the number of slides
//     _C.style.setProperty("--i", i--);
//   }
// });

// next.addEventListener("click", () => {
//   if (i < N) {
//     // increase i as long as it's smaller than the number of slides
//     _C.style.setProperty("--i", i++);
//   }
// });

// ===============
// slider event listeners for mouse and touch (start, move, end)
// ===============

// _C.addEventListener("mousemove", drag, false);
// _C.addEventListener("touchmove", drag, false);

// _C.addEventListener("mousedown", lock, false);
// _C.addEventListener("touchstart", lock, false);

// _C.addEventListener("mouseup", move, false);
// _C.addEventListener("touchend", move, false);

// // override Edge swipe behaviour
// _C.addEventListener(
//   "touchmove",
//   e => {
//     e.preventDefault();
//   },
//   false
// );

// unify touch and click cases:
// function unify(e) {
//   return e.changedTouches ? e.changedTouches[0] : e;
// }


// // last slider
// $(document).ready(function() {
// 	setSlider();
// 	$(window).resize(function() {
// 		setSlider();
// 	});
// });

// function setSlider() {
// 	var outerRightOffset = $('.js-mainWrap').width();
// 	var innerRightOffset = ($('.js-imgList').find('li').length * $('.js-imgList').find('li').outerWidth()) + (($('.js-imgList').find('li').length - 1) * 10);
// 	var counterRight = 1, counterLeft = 0, totalItemLeft = 0;
	
// 	$('.js-slide-right').addClass('hide');
// 	$('.js-slide-left').addClass('hide');
// 	$('.js-imgList').css('left', 0);
	
// 	if(innerRightOffset > outerRightOffset) {
// 		totalItemLeft = Math.ceil(Math.ceil(innerRightOffset - outerRightOffset) / 130);
// 		$('.js-slide-right').removeClass('hide');
// 	}
	
// 	$('.js-slide-right').on('click', function () {
// 		if(counterRight <= totalItemLeft) {
// 			$('.js-slide-left').removeClass('hide');
// 			$('.js-imgList').css('left', -(counterRight * 130)+'px');
			
// 			counterRight == totalItemLeft && $('.js-slide-right').addClass('hide'); 
			
// 			counterRight++;
// 			counterLeft = counterLeft ? counterLeft - 1 : counterLeft;
// 		}	
// 	});
	
// 	$('.js-slide-left').on('click', function () {
// 		if( counterRight > 1) {
// 			$('.js-slide-right').removeClass('hide');
// 			$('.js-imgList').css('left', (Math.ceil($('.js-imgList').css('left').split("px")[0]) + 130)+'px');
// 			counterLeft++;
// 			counterRight = counterRight - 1;
// 			counterRight == 1 && $('.js-slide-left').addClass('hide');
// 		}	
// 	});





function prev(){
  document.getElementById('slider-container').scrollLeft -= 270;
}

function next()
{
  document.getElementById('slider-container').scrollLeft += 270;
}


$(".slide img").on("click" , function(){
$(this).toggleClass('zoomed');
$(".overlay").toggleClass('active');
})
