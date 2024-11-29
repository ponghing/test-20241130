   var myElement = document.querySelector("nav");
   console.log(myElement)
   // construct an instance of Headroom, passing the element
   var headroom  = new Headroom(myElement);
   // initialise
   headroom.init();


$(function(){
   $(window).scroll(function(){
         var scrollTop =$(this).scrollTop();
         if(scrollTop > 100) {
            $(".navbar-header").addClass('logo-2');
         }
         else {
            $(".navbar-header").removeClass('logo-2');
         }
   });

   var swiper = new Swiper('.swiper-container', {
        pagination: '.swiper-pagination',
        paginationClickable: true,
        autoplay:5000
    });

   $(".back-to-top img").click(function(){
   	$('body,html').animate({scrollTop:0},500);
   })

   $(".back-to-top img").hover(function() {
      $(this).attr('src', $(this).data('hover-img'));
   }, function() {
      $(this).attr('src', $(this).data('img'));
   })

  var imgs=$("img");
  imgs.on("contextmenu",function(){return false;});
  imgs.on("dragstart",function(){return false;});

})
