function checkSpam(str) {
	let input = str.toLowerCase();
	if (input.includes('1xbet') || input.includes('xxx')) {
		return true;
	} else {
		return false;
	}

}