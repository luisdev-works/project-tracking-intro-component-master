const burger = document.getElementById('burger');
burger.onclick = () => {
	document.getElementById('burger-icon').src = toggleBurgerIcon();
	document.getElementById('nav-items-mobile').classList.toggle('show');
};

function toggleBurgerIcon() {
	let icon_src = document.getElementById('burger-icon').src;
	let if_closed = icon_src.includes('icon-close');
	let icon_switch = {
		true: './images/icon-hamburger.svg',
		false: './images/icon-close.svg',
	}[if_closed];
	return icon_switch;
}
