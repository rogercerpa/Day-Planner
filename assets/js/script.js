$(document).ready(function() {
	var currentdayp = $('#currentDay');
	$(currentdayp).text(moment().format('LLLL'));
});
