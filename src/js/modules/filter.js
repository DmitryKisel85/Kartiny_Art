export default function filter() {
	const menu = document.querySelector('.portfolio-menu');
	const items = menu.querySelectorAll('li');
	const btnAll = menu.querySelector('.all');
	const btnLovers = menu.querySelector('.lovers');
	const btnChef = menu.querySelector('.chef');
	const btnGirl = menu.querySelector('.girl');
	const btnGuy = menu.querySelector('.guy');
	const btnGrandmother = menu.querySelector('.grandmother');
	const btnGranddad = menu.querySelector('.granddad');
	const wrapper = document.querySelector('.portfolio-wrapper');
	const markAll = wrapper.querySelectorAll('.all');
	const markGirl = wrapper.querySelectorAll('.girl');
	const markLovers = wrapper.querySelectorAll('.lovers');
	const markChef = wrapper.querySelectorAll('.chef');
	const markGuy = wrapper.querySelectorAll('.guy');
	const no = document.querySelector('.portfolio-no');

	const typeFilter = (markType) => {
		markAll.forEach((mark) => {
			mark.style.display = 'none';
			mark.classList.remove('animated', 'fadeIn');
		});

		no.style.display = 'none';
		no.classList.remove('animated', 'fadeIn');

		if (markType) {
			markType.forEach((mark) => {
				mark.style.display = 'block';
				mark.classList.add('animated', 'fadeIn');
			});
		} else {
			no.style.display = 'block';
			no.classList.add('animated', 'fadeIn');
		}
	};

	btnAll.addEventListener('click', function () {
		typeFilter(markAll);
	});

	btnLovers.addEventListener('click', function () {
		typeFilter(markLovers);
	});

	btnChef.addEventListener('click', function () {
		typeFilter(markChef);
	});

	btnGuy.addEventListener('click', function () {
		typeFilter(markGuy);
	});

	btnGirl.addEventListener('click', function () {
		typeFilter(markGirl);
	});

	btnGrandmother.addEventListener('click', function () {
		typeFilter();
	});

	btnGranddad.addEventListener('click', function () {
		typeFilter();
	});

	menu.addEventListener('click', function (e) {
		let target = e.target;

		if (target && target.tagName == 'LI') {
			items.forEach((btn) => {
				btn.classList.remove('active');
			});
			target.classList.add('active');
		}
	});
}
