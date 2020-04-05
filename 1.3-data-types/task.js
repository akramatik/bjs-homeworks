"use strict";

function calculateTotalMortgage(percent, contribution, amount, date) {
	if(isNaN(percent)) {
		return `Параметр <Процентная ставка> содержит неверное значение: ${percent}`;
	} 
	if(isNaN(contribution)) { 
		return "Параметр <Начальный взнос> содержит неверное значение: " + String(contribution);
    } 
    if(isNaN(amount)) { 
		return "Параметр <Общая стоимость> содержит неверное значение: " + String(amount);
    } else { 
		let creditDate = new Date().getTime();
		let creditBody = amount - contribution;
		let p = (percent / 100) / 12;
		let months = Math.floor((date.getTime() - creditDate) / (1000 * 3600 * 24 * 30));
		let monthAmount = creditBody * (p + p / (Math.pow(1 + p, months) - 1));
		let totalAmount = +(months * monthAmount).toFixed(2);
		console.log(`Общая сумма платежа ${totalAmount}`);

		return totalAmount;
	}
}

function getGreeting(name) {
	return (`Привет, мир! Меня зовут ${name||"Аноним"}`);
}