let defaultCount = 0;
let count = document.getElementById("counter");

let increment = function () {
	defaultCount += 1;
	count.innerText = defaultCount;
};
