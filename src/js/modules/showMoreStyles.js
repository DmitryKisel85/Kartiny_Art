import { getResource } from '../services/requests';

export default function showMoreStyles(trigger, wrapper) {
	const btn = document.querySelector(trigger);

	// cards.forEach((card) => {
	// 	card.classList.add('animated', 'bounceInLeft');
	// });

	// // btn.addEventListener('click', function () {});
	// btn.addEventListener('click', function () {
	// 	cards.forEach((card) => {
	// 		card.classList.remove('hidden-lg', 'hidden-md', 'hidden-sm', 'hidden-xs');
	// 		card.classList.add('col-sm-3', 'col-sm-offset-0', 'col-xs-10', 'col-xs-offset-1');
	// 	});
	// 	btn.remove();
	// });

	btn.addEventListener('click', function () {
		// getResource('assets/db.json')
		getResource('http://localhost:3000/styles')
			.then((res) => createCards(res))
			.catch((err) => {
				console.log(err);
			});
		this.remove();
	});

	function createCards(response) {
		response.forEach(({ src, title, link }) => {
			let card = document.createElement('div');
			card.classList.add('col-sm-3', 'col-sm-offset-0', 'col-xs-10', 'col-xs-offset-1', 'animated', 'bounceInLeft');

			card.innerHTML = `
            <div class="styles-block">
				<img src=${src} alt="style">
				<h4>${title}</h4>
                <a href=${link}>Подробнее</a>
	 		</div>
            `;

			document.querySelector(wrapper).appendChild(card);
		});
	}
}
