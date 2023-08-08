let x = document.querySelector(".btn");
let y = document.querySelector(".ok");

document.querySelector(".calculator").addEventListener("click", function () {
	y.innerHTML = x.value;
	// console.log(x.value);
});
