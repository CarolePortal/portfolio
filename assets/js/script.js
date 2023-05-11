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

// open menu
let burgerMenu = document.querySelector(".navLinkMobile");
let navLink = document.querySelector(".navLink");
burgerMenu.addEventListener("click", () => {
	burgerMenu.classList.toggle("open");
	navLink.classList.toggle("block");
});

// année copyright
const year = new Date().getFullYear();
document.getElementById("copy").innerHTML = year;

// Back to top
// https://codepen.io/BlogFire/pen/GRqdKaM
let scrollToTopBtn = document.querySelector(".scrollToTopBtn");
let rootElement = document.documentElement;

function handleScroll() {
	// Do something on scroll - 0.15 is the percentage the page has to scroll before the button appears
	// This can be changed - experiment
	let scrollTotal = rootElement.scrollHeight - rootElement.clientHeight;
	if (rootElement.scrollTop / scrollTotal > 0.15) {
		// Show button
		scrollToTopBtn.classList.add("showBtn");
	} else {
		// Hide button
		scrollToTopBtn.classList.remove("showBtn");
	}
}

function scrollToTop() {
	// Scroll to top logic
	rootElement.scrollTo({
		top: 0,
		behavior: "smooth",
	});
}
scrollToTopBtn.addEventListener("click", scrollToTop);
document.addEventListener("scroll", handleScroll);
