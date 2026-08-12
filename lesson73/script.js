const toggleBtn = document.querySelector(".eye-button");
const passwordField = document.getElementById("password");

toggleBtn.addEventListener("click", (e) => {
	e.preventDefault();
	if (password.type === "password") {
		password.type = "text";
	} else {
		password.type = "password";
	}
});
