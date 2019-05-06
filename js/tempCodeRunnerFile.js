let deck = document.getElementsByClassName('deck');

function flip() {
  console.log('clicked');
}

deck.forEach(cards => cards.addEventListener('click', flip));