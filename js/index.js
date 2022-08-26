import CanvasConfetti from 'https://cdn.skypack.dev/canvas-confetti';

const btnSubmit = document.getElementById('submit');
const btnList = document.querySelectorAll('.buttonItem');
let score;

const setActiveClass = (node) => {
	btnList.forEach((btn) => {
		btn.classList.remove('selected');
	});

	node.classList.add('selected');
};

document.addEventListener('DOMContentLoaded', () => {
	btnList.forEach((node) => {
		node.addEventListener('click', function () {
			score = this.value;
			setActiveClass(this);
		});
	});

	btnSubmit.addEventListener('click', () => {
		if (score) {
			document.querySelector('#thanks').classList.remove('hidden');
			document.querySelector('#rating').classList.add('hidden');

			document.querySelector(
				'.punctuation'
			).textContent = `You selected ${score} out of 5`;

			setTimeout(() => {
				CanvasConfetti();
			}, 500);
		}
	});
});
