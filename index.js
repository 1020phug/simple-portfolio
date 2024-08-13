const themeBtn = document.querySelector(".header-theme");

themeBtn.addEventListener("click", () => {
	document.body.attributes[0].value === "light"
		? document.body.setAttribute("data-theme", "dark")
		: document.body.setAttribute("data-theme", "light");
});
