// Enable Tool Tips Globally 
$(function() {
	$('[data-toggle="tooltip"]').tooltip()
})

// Enable Modal Gallery Globally 
$(document).delegate('*[data-toggle="lightbox"]', 'click', function(event) {
	event.preventDefault();
	$(this).ekkoLightbox();
});

// Dyanmically add the plus/minus toggle to the FAQ headers 
$(document).ready(function() {
	$('#faq .panel-collapse').has('.panel-body').prev().children('.panel-title').append('<i class="fa fa-angle-right pull-right"></i> ');
	$('#faq .panel-collapse').has('in').prev().children('.panel-title').children().removeClass('fa-fa-angle-down').addClass('fa-fa-angle-right');
});

// FAQ Panel Toggle
$(document).ready(function() {
	$('#faq .panel-title').click(function() {
		$(this).children('i').toggleClass('fa-angle-down').toggleClass('fa-angle-right');
	});
});

// Dyanmically add the plus/minus toggle to the Agenda Day headers 
$(document).ready(function() {
	$('#agenda-day .panel-collapse').has('.panel-body').prev().children('.panel-title').prepend('<i class="fa fa-plus-circle"></i> ');
	$('#agenda-day .panel-collapse').has('in').prev().children('.panel-title').children().removeClass('fa-plus-circle').addClass('fa-minus-circle');
});

// Agenda Single Panel Toggle
$(document).ready(function() {
	$('#agenda-day .panel-title').click(function() {
		$(this).children('i').toggleClass('fa-plus-circle').toggleClass('fa-minus-circle');
	});
});

// Agenda Panel Show More/Less Toggle
$(document).ready(function() {
	$('#agenda-day #toggle').click(function() {
		if ($('.panel-collapse').hasClass('in')) {
			$('.panel-collapse').removeClass('in');
			$('#toggle').html('+ Show All Session Details');
			$('.panel-title').children('i').removeClass('fa-minus-circle').addClass('fa-plus-circle');
		} else {
			$('.panel-collapse').addClass('in');
			$('#toggle').html('- Hide All Session Details');
			$('.panel-title').children('i').removeClass('fa-plus-circle').addClass('fa-minus-circle');
		}
	});
});

// Theme Selector Drop Down
$('#theme-selector-options').change(function(){ 
  $('#stylelink').attr('href',$(this).val());
});
