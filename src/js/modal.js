$(document).ready(function(){
	var button = $('#button')
	var modal = $('#modal')
	var close = $('#close')
	button.on('click',function(){
		modal.addClass('modal_active')
	})
	close.on('click',function(){
		modal.removeClass('modal_active')
	})
	var up = $('#up')
	 if ($(window).scrollTop() > 300) {
       up.addClass('show');
     } else {
       up.removeClass('show');
     } 
	up.on('click',function(){
    $('html, body').animate({scrollTop:0}, '300');
  }); 

		})

