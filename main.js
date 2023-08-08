var x = document.querySelector(".btn");
var y = document.querySelector(".ok");

console.log(x.value);

document.querySelector(".calculator").addEventListener("click", function () {
	y.innerHTML = x.value;
	console.log(x.value);
});
