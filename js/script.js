let header = document.querySelector('.header');
let headerToggle = document.querySelector('.header__toggle');

headerToggle.addEventListener('click', () => {
	header.classList.toggle('header_active');
});

let filterToggle = document.querySelectorAll('.filter-group__head');

filterToggle.forEach(filter => {
	filter.addEventListener('click', () => {
		filter.parentElement.classList.toggle('filter-group__category_active');
	})
});

const anchors = document.querySelectorAll('a[href*="#"]');
for (let anchor of anchors) {
	anchor.addEventListener('click', function (e) {
		e.preventDefault()
		const blockID = anchor.getAttribute('href').substr(1)
		console.log(blockID);
		headerToggle.innerHTML = anchor.innerHTML;
		header.classList.remove('header_active');
		document.getElementById(blockID).scrollIntoView({
			behavior: 'smooth',
			block: 'start',
			inline: 'start'
		})
	})
}