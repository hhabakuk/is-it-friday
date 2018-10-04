function getDay() {
	var now = new Date()
	var day = now.getDay();

	if (day === 5) {
		return 'YES'
	} else {
		return 'NO'
	}

}

var day = getDay()

document.querySelector('h1').innerHTML = day