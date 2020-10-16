$(function(){

  $(".range-slider").ionRangeSlider({
    hide_min_max: true,
    hide_from_to: true,
    onStart: function (data) {
   
    },
    onChange: function (data) {
      $("#"+data.input[0].id+"-label").html(data.from);
    },
    onFinish: function (data) {
       
    },
    onUpdate: function (data) {
    
    }
  
  });

});
