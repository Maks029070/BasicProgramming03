$(function() {
	// Task 1 

	let task1ID = 1;
	for (let i = 1000; i < 10000; i += 3) {
		if (i < 9997) {
			$('#task1').append(`<span class="element">№${task1ID}: ${i}</span>`);
		} else {
			$('#task1').append(`<span class="element" style="margin-right: 10%;">№${task1ID}: ${i}</span>`);
		}
		task1ID++;
	}

	// Task 2

	let task2ID = 1;
	let element = 1;
	for (task2ID; task2ID <= 55; task2ID++) {
		if (task2ID < 55) {
			$('#task2').append(`<span class="element">№${task2ID}: ${element}</span>`);
		} else {
			$('#task2').append(`<span class="element" style="margin-right: 10%;">№${task2ID}: ${element}</span>`);
		}
		element += 5;
	}

	// Task 3

	let task3ID = 1;
	for (let i = 90; i >= 0; i -= 5) {
		$('#task3').append(`<span class="element">№${task3ID}: ${i}</span>`);
		task3ID++;
	}

	// Task 4

	let task4ID = 1;
	let element2 = 2;
	for (task4ID; task4ID <= 20; task4ID++) {
		$('#task4').append(`<span class="element">№${task4ID}: ${element2}</span>`);
		element2 *= 2;
	}
});