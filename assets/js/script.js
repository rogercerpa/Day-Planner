//DATE AND TIME CODE
function dateTime() {
	setInterval(function() {
		var currentday = moment().format('MMMM Do YYYY, h:mm:ss a');
		$('#currentDay').text(currentday);
	}, 1000);
}
dateTime();

//SAVE BUTTON CODE - SAVING TASK TO LOCAL STORAGE
var saveButton9am = document.getElementById('#btn9am');
var taskinput = document.querySelector('#task9am');

$('#btn9am').on('click', function(savetask) {
	savetask.preventDefault();

	var task = taskinput.value.trim();

	localStorage.setItem('task', JSON.stringify(task));
	// if (typeof Storage !== 'undefined') {
	// 	localStorage.setItem('task', JSON.stringify(task));
	// 	localStorage.getItem('task');
	// } else {
	// 	displayMessage('error', 'Enter your task here...');
	// }
});
