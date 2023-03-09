// menu background active

let menus = document.getElementById("Link");
let navBtns = menus.getElementsByClassName("navBtn");
for (let i = 0; i < navBtns.length; i++) {
	navBtns[i].addEventListener("click", function () {
		let a = document.getElementsByClassName("navActive");
		a[0].className = a[0].className.replace(" navActive", "");
		this.className += " navActive";
	});
}
