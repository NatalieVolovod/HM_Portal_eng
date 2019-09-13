$(document).ready(function(){

	$prev = $('.prev_slide');
	$next = $('.next_slide');
	$slider=$('.slider');
	$tabs = $('.tabs');
	$slide_count = $tabs.find('input').length;

 
	if($slide_count > 0){
		$('#tab1').prop( "checked", true );

		$slider.hover(function(){
				clearInterval(sliding);
			}, function(){
				sliding = setInterval(nextClick,5000);
			}
		); 

  		$slider.trigger('mouseout');
 	}


	function nextClick(){ 
	    $inputInd=$('.tabs').find('input:checked').index() + 1;
	    $curInput =  $('#tab'+ $inputInd); 

	    $curSlide=  $('.for-tab'+ $inputInd);
	    $nextSlide=  $curSlide.next();

	    if( $inputInd == $slide_count){
	     $('#tab1').prop( "checked", true );
	     $curSlide.hide(1000);
	     $('.for-tab1').show(1000);
	    } else {
	     $curInput.next().prop( "checked", true ); 
	     $curSlide.hide(1000);
	     $nextSlide.show(1000);
	    }
	}

	var $sidebar   = $(".sidebar"), 
	$window    = $(window),
	offset     = $sidebar.offset(),
	topPadding = 15;

	$window.scroll(function() {
	    if ($(window).width() >= 960) {
		    if ($window.scrollTop() > offset.top) {
		        $sidebar.stop().animate({
		            marginTop: $window.scrollTop() - offset.top + topPadding
		        });
		    } else {
		        $sidebar.stop().animate({
		            marginTop: 0
		        });
		    }
	    } else if ($(window).width() < 960){
	        $sidebar.stop().animate({
		        marginTop: 0
		    });
	    }
	});

});