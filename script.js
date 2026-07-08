document.getElementById("btn").addEventListener("click", function () {
    const num = Number(document.getElementById("ip").value);
    const output = document.getElementById("output");

    new Promise((resolve) => {
        setTimeout(() => {
            output.textContent = `Result: ${num}`;
            resolve(num);
        }, 2000);
    })
    .then((value) => {
        return new Promise((resolve) => {
            setTimeout(() => {
                value *= 2;
                output.textContent = `Result: ${value}`;
                resolve(value);
            }, 1000);
        });
    })
    .then((value) => {
        return new Promise((resolve) => {
            setTimeout(() => {
                value -= 3;
                output.textContent = `Result: ${value}`;
                resolve(value);
            }, 1000);
        });
    })
    .then((value) => {
        return new Promise((resolve) => {
            setTimeout(() => {
                value /= 2;
                output.textContent = `Result: ${value}`;
                resolve(value);
            }, 1000);
        });
    })
    .then((value) => {
        return new Promise((resolve) => {
            setTimeout(() => {
                value += 10;
                output.textContent = `Final Result: ${value}`;
                resolve(value);
            }, 1000);
        });
    });
});