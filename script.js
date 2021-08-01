const months = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь']

document.querySelector('button').addEventListener('click', () => {
	const div = document.querySelector('div')
	const selectCity = document.querySelector('select').value	
	setTimeout(repeat = () => {
		const dateSelectCity = (new Date().getTime()) + ((getTimeZoneSelectCity(selectCity)) * 60 * 1000)
		div.textContent = returnStringWithCityAndDate(selectCity, months, dateSelectCity)
		setTimeout(repeat,1000)
	}, 0);
})

function getTimeZoneSelectCity(value) {
	switch (value) {
		case 'Токио':	return 360
		case 'Москва': return 0
		case 'Лондон': return -120
		case 'Пекин':	return 300
	}
}

function returnStringWithCityAndDate(city, month, date) {
	const dateCurrentCity = new Date(date)
	return `${city}, ${month[dateCurrentCity.getMonth()]} ${dateCurrentCity.getDate()} - ${dateCurrentCity.getHours()} : ${dateCurrentCity.getMinutes()} : ${dateCurrentCity.getSeconds()}`
}
