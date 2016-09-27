'use strict';

function indexHeight() {
  $('body, .index').css({
    'min-height' : $(window).height()
  });
}

function chechboxButton() {
	$('.i-checkbox  input[type="checkbox"]').change(function(){
		console.log($(this).prop('checked'));
		$(this).closest('.i-checkbox').toggleClass('checked');
	});
}

function tableScroll() {

  $('.table-scroll tbody').each(function() {

    var settings =  {
      mouseWheelSpeed: 30,
      showArrows: $(this).is('.arrow'),
      autoReinitialise: true,
      autoReinitialiseDelay: 0,
      horizontalDragMinWidth: 500
    };

    $(this).jScrollPane(settings);
    var api = $(this).data('jsp');
    var throttleTimeout;
    $(window).bind('resize', function() {
      if (!throttleTimeout) {
        throttleTimeout = setTimeout(
          function() {
            api.reinitialise();
            throttleTimeout = null;
          },
          50
        );
      }
    });
  });

  /*$('.table-scroll').each(function () {
    var settings = {
      mouseWheelSpeed: 80,
      showArrows: $(this).is('.arrow'),
      autoReinitialise: true,
      autoReinitialiseDelay: 0
    };
    $(this).jScrollPane(settings);
  });*/
}

function layoutHeight() {
  $('.main').css({
    'min-height' : $(window).height()-$('.header').height()
  });
}

function navbarToggle() {
  $('.navbar-toggle').click(function(){
    var navbar = $('.navbar-collapse');
    if($(this).is('.active')){
      $(this).removeClass('active');
      navbar.stop().hide().removeClass('active');
      $('.sidebar').stop().removeClass('active');
      $('.contents').stop().removeClass('discover');
    }
    else{
      $(this).addClass('active');
      navbar.stop().show().addClass('active');
      $('.sidebar').stop().addClass('active');
      $('.contents').stop().addClass('discover');
    }
    return false;
  });
}

$(document).ready(function(){
	indexHeight();
	chechboxButton();
  tableScroll();
  layoutHeight();
  navbarToggle();
});

$(window).resize(function(){
	indexHeight();
  layoutHeight();
});
