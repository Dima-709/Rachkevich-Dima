$(document).ready(function(){
   if($(window).width() < 767){
      $('.feature_wrap').slick({

      });
   };

});
$(document).ready(function(){
   $('.clients_slider').slick({
      arrows:false,
      dots:true,
      appendDots:$('.clients_button'),
   });
});
$(document).ready(function(){
   $('.roof_burger').click(function(event){
      $('.roof_burger,.roof_nav').toggleClass('active');
   });
});
$(document).ready(function(){
   if($(window).width() < 360){
      $('.works_wrap').slick({
         arrows:false,
         slidesToShow: 1,
         autoplay:true,
         autoplaySped:1000,
         centerMode:true,
      });
   };

});
$(document).ready(function(){
   if($(window).width() < 640){
      $('.works_wrap').slick({
         arrows:false,
         slidesToShow: 2,
         autoplay:true,
         autoplaySped:1000,
         centerMode:true,
      });
   };

});
$(document).ready(function(){
   if($(window).width() < 767){
      $('.works_wrap').slick({
         arrows:false,
         slidesToShow: 3,
         autoplay:true,
         autoplaySped:1000,

      });
   };

});
$(document).ready(function(){
   if($(window).width() < 640){
      $('.team_wrap').slick({
         arrows:false,
         autoplay:true,
         autoplaySped:3000,
      });
   };
});$(document).ready(function(){
   if($(window).width() < 406){
      $('.footer_wrap').slick({
         arrows:false,
         autoplay:true,
         autoplaySped:3000,
      });
   };
});
