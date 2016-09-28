'use strict';

function indexHeight() {
  $('body, .index').css({
    'min-height' : $(window).height()
  });
}

function chechboxButton() {
	$('.i-checkbox  input[type="checkbox"]').change(function(){
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
}

function tableResponsive() {
  $('.table-fixed td').each(function () {
    var item = $(this);
    var th = item.closest('.table-fixed').find('th').eq(item.index()).text();
    item.wrapInner('<div class="td-inner" />');
    item.attr('data-th',th);
  });
}

function layoutHeight() {
  $('.main').css({
    'min-height' : $(window).height()-$('.header').height()
  });
}

function contentBox() {
  var contentBox = $('.content-box:not(.disable)');
  contentBox.find('[type="checkbox"]').prop('checked',false);
  contentBox.find('.i-checkbox').addClass('checked');

  $('.content-box [type="checkbox"]').change(function (e) {
    var that = $(this);
    var cb = that.data('content');

    //for checkbox prop
    $('.content-box [type="checkbox"]').prop('checked',false);
    that.prop('checked',true);
    //for checkbox view
    $('.content-box .i-checkbox').removeClass('checked');
    that.closest('.i-checkbox').addClass('checked');
    //for content activity view
    $('.content-box').addClass('disable');
    $('#'+cb).removeClass('disable');
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
  tableResponsive();
  contentBox();
});

$(window).resize(function(){
	indexHeight();
  layoutHeight();
});
