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

  $('.inventory__inner .tab').on('click', function(event) {
    var id = $(this).attr('data-id');
      $('.inventory__inner').find('.tabs-content').removeClass('active-tab').hide();
      $('.inventory__inner .tabs-wrapper').find('.tab').removeClass('active');
      $(this).addClass('active');
      $('#'+id).addClass('active-tab').fadeIn();
      return false;
  });

});
