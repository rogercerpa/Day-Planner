//DATE AND TIME CODE
function dateTime() {
	setInterval(function() {
		var currentday = moment().format('MMMM Do YYYY, h:mm:ss a');
		$('#currentDay').text(currentday);
	}, 1000);
}
dateTime();

//SAVE BUTTON CODE - SAVING TASK TO LOCAL STORAGE
// var saveButton9am = $('#btn9am');
// var taskinput = $('#task9am').val();

$('button').on('click', function(savetask) {
	savetask.preventDefault();
	var taskinput = $('textarea').val();
	console.log(taskinput);
	// var data = $(this).val(JSON.stringify('data-task'));
	// localStorage.setItem(this, data);
	// localStorage.getItem('task');

	// if (taskinput === '') {
	// 	localStorage.setItem('task', JSON.stringify(task));
	// 	// localStorage.getItem('task');
	// } else {
	// 	displayMessage('task', 'Enter your task here...');
	// }
	// renderLastRegistered();
});

//Row color changing code

// var rowgreen = document.querySelector('.future');
// var rowred = document.querySelector('.past');
// var rowgray = document.querySelector('.preset');

var time = moment();
var format = 'hh:mm:ss';
var time8am = moment('8:00:00', format);
var time9am = moment('09:00:00', format);
var time10am = moment('10:00:00', format);
var time11am = moment('11:00:00', format);

var task9am = $('#task9am');

// if (time.isBetween(time9am, time10am)) {
// 	$('#task9am').addClass('present');
// }
if (time.isBetween(time8am, time9am)) {
	$('#task9am').addClass('past');
}
// else if (time.isBetween(time10am, time11am)) {
// 	$('#task9am').addClass('future');
// }
