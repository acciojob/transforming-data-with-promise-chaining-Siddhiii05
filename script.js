//your JS code here. If required.
document.getElementById("btn").addEventListener("click", function () {
	const num = Number(document.getElementById("ip").value);
    const output = document.getElementById("output");

	new Promise((resolve) => {
		setTimeout(() => {
			output.textContext = `Result: ${num}`;
			resolve(num);
		}, 2000);
	})
	.then((value) => {
		return new Promise((resolve) => {
			setTimeout(() => {
				value = value * 2;
				output.textContent = `Result: ${value}`;
				resolve(value);
			}, 1000);
		})
	})
	.then((value) => {
		return new Promise((resolve) => {
			setTimeout(() => {
				value = value - 3;
				output.textContent = `Result: ${value}`;
				resolve(value);
			}, 1000);
		})
	})
	.then((value) => {
		return new Promise((resolve) => {
			setTimeout(() => {
				value = value / 2;
				output.textContent = `Result: ${value}`;
				resolve(value);
			}, 1000);
		})
	})
	.then((value) => {
		return new Promise((resolve) => {
			setTimeout(() => {
				value = value + 10;
				output.textContent = `Final Result: ${value}`;
				resolve(value);
			}, 1000);
		})
	})
}