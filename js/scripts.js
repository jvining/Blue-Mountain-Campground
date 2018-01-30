// Enable Tool Tips Globally 
$(function() {
	$('[data-toggle="tooltip"]').tooltip()
})

// Enable Modal Gallery Globally 
$(document).delegate('*[data-toggle="lightbox"]', 'click', function(event) {
	event.preventDefault();
	$(this).ekkoLightbox();
});

// Theme Selector Drop Down
$('#theme-selector-options').change(function(){ 
  $('#stylelink').attr('href',$(this).val());
});
