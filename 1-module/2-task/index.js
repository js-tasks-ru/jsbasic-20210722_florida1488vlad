/**
 * Эту функцию трогать не нужно
 */
function print(text) {
	console.log(text);
}

/**
 * Эту функцию нужно поменять так,
 * чтобы функция sayHello работала корректно
 */
function isValid(name) {
	let userName = name;
	if (userName != null
		&& !userName.includes(' ')
		&& userName.length >= 4) {
		return true;
	}
	{
		return false;
	}

}


function sayHello() {
	let userName = prompt('Введите ваше имя');

	if (isValid(userName)) {
		print(`Welcome back, ${userName}!`);
	} else {
		print('Некорректное имя');
	}
}
