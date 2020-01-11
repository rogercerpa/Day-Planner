//DATE AND TIME CODE
function dateTime() {
	setInterval(function() {
		var currentday = moment().format('MMMM Do YYYY, h:mm:ss a');
		$('#currentDay').text(currentday);
	}, 1000);
}
dateTime();

//SAVE BUTTON CODE - SAVING TASK TO LOCAL STORAGE
var saveButton9am = $('#btn9am');
var taskinput = $('#task9am').val();

$('#btn9am').on('click', function(savetask) {
	savetask.preventDefault();

	var task = taskinput.value.trim();

	localStorage.setItem('input9am', taskinput);

	// if (taskinput === '') {
	// 	localStorage.setItem('task', JSON.stringify(task));
	// 	// localStorage.getItem('task');
	// } else {
	// 	displayMessage('task', 'Enter your task here...');
	// }
	// renderLastRegistered();
});

//Row color changing code
var rowgreen = document.querySelector('.future');
var rowred = document.querySelector('.past');
var rowgray = document.querySelector('.preset');
