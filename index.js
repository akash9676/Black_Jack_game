let player = {
    name : "Akash",
    chips : 410 
}
let cards = [];
let sum = 0;
let hasblackjack = false;
let isalive = false;
let message;
let start_game = document.getElementById("start-btn");
let message_el = document.getElementById("message-el");
let sum_el = document.getElementById("sum-el");
let card_el = document.getElementById("card-el");
let new_card_el = document.getElementById("newcard-btn");
let player_el = document.getElementById("player-el");

player_el.textContent = player.name + " :" + player.chips


new_card_el.addEventListener("click", () => {
	newcard();
});
start_game.addEventListener("click", () => {
	startgame();
});

function getrandomnumber() {
	let result = Math.floor(Math.random() * 13) + 1;

	if (result > 10) {
		return 10;
	} else if (result < 2) {
		return 1;
	} else {
		return result;
	}
}

function startgame() {
	let firstCard = getrandomnumber();
	let secondCard = getrandomnumber();
	cards = [firstCard, secondCard];
	sum = firstCard + secondCard;

	rendergame();
}

function rendergame() {
	card_el.textContent = "cards:";
	for (let i = 0; i < cards.length; i++) {
		card_el.textContent += cards[i] + " ";
	}

	if (sum <= 20) {
		message = "Do you want to draw a new card? 🙂";
        isalive = true;
	} else if (sum === 21) {
		message = "Wohoo! You've got Blackjack! 🥳";
		hasblackjack = true;
	} else {
		message = "You're out of the game! 😭";
        isalive = false;
	}

	sum_el.textContent = "sum:" + sum;
	message_el.textContent = message;
}

function newcard() {
	if (isalive === true && hasblackjack === false) {
		let new_card = getrandomnumber();
		cards.push(new_card);
		sum += new_card;
		rendergame();
	}
}
