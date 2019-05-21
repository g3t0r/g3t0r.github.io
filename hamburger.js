function hideMenu() {
	let links = document.getElementsByClassName("navbar__link");
	document.getElementsByClassName("navbar__menu")[0].className = "navbar__menu";
}

function showMenu() {
	let links = document.getElementsByClassName("navbar__link");
	document.getElementsByClassName("navbar__menu")[0].className += " navbar__menu--open";
}

document.getElementsByClassName("navbar__hamburger")[0].onclick = function() {
	var hamburger = document.getElementsByClassName("navbar__hamburger")[0];
	if (hamburger.className.includes("navbar__hamburger--rotated")) {
		hideMenu();
		hamburger.className = "navbar__hamburger";
	} else {
		showMenu();
		hamburger.className += " navbar__hamburger--rotated";
	}
};

var linki = document.getElementsByClassName("navbar__link");
for (var i = 0; i < linki.length; i++) {
	linki[i].onclick = function() {
		document.getElementsByClassName("navbar__hamburger")[0].className = "navbar__hamburger";
		hideMenu();
	};
}
