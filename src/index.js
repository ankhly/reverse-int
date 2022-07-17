module.exports = function reverse(num) {
	let arr = [];
	arr.push(num);
	let a = arr.join().split('').reverse();
	if (a.indexOf('-') !== -1) {
		a.splice(a.indexOf('-'), 1)
	}
	let b = a.map(function (v) { return v = v * 1 }).join('') * 1;
	return b;
}
