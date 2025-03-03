$(function () {

   /* Slider slick  #introSlider
      =============================*/

      $('#intro-slider').slick({
         infinite: true,
         autoplay: true,
         slidesToShow: 1,
         slidesToScroll: 1,
         arrows: false,
         dots: false,
         fade: true,
 
      });



      /* Slider slick  #itestimonials-slider
      =============================*/

      $('#testimonials-slider').slick({
         infinite: true,
         autoplay: true,
         slidesToShow: 2,
         slidesToScroll: 1,
         arrows: false,
         dots: true,
         // adaptiveHeight: true,
         fade: false,
         responsive: [
            {
               breakpoint: 767,
               settings: {
                  slidesToShow: 1,
               }
            }
         ]
   
      });



      /* burger-menu
      =============================*/

      $('.header__burger').click(function (event) {
         $('.header__burger,.header-nav').toggleClass('active');
         $('body').toggleClass('lock');
         if ($('.header-nav').hasClass('active')) {
            $('.header-nav__link').click(function (event) {
               $('.header__burger,.header-nav').removeClass('active');
               $('body').removeClass('lock');
            });
              
         }
      });



      /* Filter
      =============================*/
      let filter = $("[data-filter]");

      filter.on("click", function (event) {
         event.preventDefault();

         let cat = $(this).data('filter');

         if (cat == 'all') {
            $("[data-cat").removeClass('hide');
         } else {
            $("[data-cat]").each(function () {

               let workCat = $(this).data('cat');

               if (workCat != cat) {
                  $(this).addClass('hide');
               } else {
                  $(this).removeClass('hide');
               }
            });
         }
      });



      /* active links in menu-filter
      =================================*/

      $('.menu-nav__link').on("click", function (event) {
         $(this).addClass('menu-nav__link-active').siblings().removeClass('menu-nav__link-active');

      });



      /* scroll-up BUTTON
      =============================*/

       // При нажатии кнопки идти вверх;

       document.getElementById('button-up').onclick = function scrollUpFunction() {
         document.body.scrollTop = 0;
         document.documentElement.scrollTop = 0;
      }
   
   
      // Кнопка появляется, когда проскролили 500px
   
      window.onscroll = function() {scrollFunction()}
   
      function scrollFunction() {
         if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
            document.getElementById('button-up').style.opacity = "1";
            
         } else {
            document.getElementById('button-up').style.opacity = "0";
         }

         /* Header shadow
          =============================*/

         if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
            document.getElementById('header').style.boxShadow = "0 0 7px rgba(0, 0, 0, 0.5)";
            
         } else {
            document.getElementById('header').style.boxShadow = "none";
         }
      }



      /* Animation 
      =============================*/

      const animItems = document.querySelectorAll('.anim-items');

      if (animItems.length > 0) {
         window.addEventListener('scroll', animOnScroll);
         function animOnScroll() {
            for (let i = 0; i < animItems.length; i++) {
               const animItem = animItems[i];
               const animItemHeight = animItem.offsetHeight;
               const animItemOffset = offset(animItem).top;
               const animStart = 4;

               let animItemPoint = window.innerHeight - animItemHeight / animStart;

               if (animItemHeight > window.innerHeight) {
                  animItemPoint = window.innerHeight - window.innerHeight / animStart;
               }

               if((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHeight)) {
                  animItem.classList.add('anim-active');
               } else {
                  if (!animItem.classList.contains('anim-no-hide')) {
                     animItem.classList.remove('anim-active');
                  }
               }
            }
         }

         function offset(el) {
            const rect = el.getBoundingClientRect(),
               scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
               scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            return {top: rect.top + scrollTop, left: rect.left + scrollLeft}
         }

         setTimeout(() => {
            animOnScroll();
         }, 300);
      

         animOnScroll();
      }



});