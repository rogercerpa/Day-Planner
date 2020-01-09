$(document).ready(function() {
	function dateTime() {
		setInterval(function() {
			var currentday = moment().format('MMMM Do YYYY, h:mm:ss a');
			$('#currentDay').text(currentday);
		}, 1000);
	}

	dateTime();
});
