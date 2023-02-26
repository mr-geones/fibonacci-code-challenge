function f(n) {
	let arr;
	
	if(n === 1) {
		arr = [0];
	}
	if(n === 2) {
		arr = [0,1];
	}
	if(n > 2) {
		arr = [0,1];
		for(let i = 2; i < n; i++) {
			arr.push(arr[i -1] + arr[i - 2]);
		}
	}
	return arr;
}
