// JavaScript Document
$(function () {

$('.cont-ul li a.nobg').hover(

  function() {
			$(this).parent().addClass('swapBg').find('img').attr('src', function(i, src) { return src.replace( '-grey.png', '-white.png' ); });
		}, function() {
			$(this).parent().removeClass('swapBg').find('img').attr('src', function(i, src) { return src.replace( '-white.png', '-grey.png' ); });
		}
		
);
				
});