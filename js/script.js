let passtCount = 0;
let count = document.getElementById("counter");

let increment = function () {
	passtCount = passtCount + 1;
	count.innerText = passtCount;
};

let save = function () {
	console.log(passtCount);
};
