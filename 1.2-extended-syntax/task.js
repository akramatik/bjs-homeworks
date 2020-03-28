"use strict";

function getResult(a,b,c){
	let x = [];
	let d = Math.pow(b, 2) - 4 * a *c;
	if (d == 0) {
		x[0] = -b / 2 * a;
	} else if (d > 0) {
		x[0] = (-b + Math.sqrt(d)) / 2 * a;
		x[1] = (-b - Math.sqrt(d)) / 2 * a;
	}

	return x;
}

function getAverageMark(marks){
	let sum = 0;
	let averageMark;

	if (marks.length == 0) {
		return 0;
	} else if (marks.length > 5) {
		console.log(`В массив оценок находится ${marks.length} значений. Для расчета мы возьмем только первые 5`);
		marks.splice(5, marks.length - 5);
	}
		for (let i = 0; i < marks.length; i++) {
			sum += marks[i];
			averageMark = sum / marks.length;
	    }
	
	
	return averageMark;
}

function askDrink(name,dateOfBirthday){
	let message;
	(new Date().getFullYear() - dateOfBirthday.getFullYear()) >= 18 ? message = `Не желаете ли олд-фэшн, ${name}?` : message = `Сожалею, ${name}, но я не могу вам продать алкоголь. Зато могу предложить вам замечательный клюквенный компот!`;
	return message;		
}