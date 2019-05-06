let icon = document.getElementsByTagName("i");
let deck = document.querySelector(".deck");
let li = document.querySelectorAll(".card");
let array = [];
let countMoves = document.querySelector(".moves");
const restart = document.querySelector(".restart");
const stars = document.querySelector(".stars");
const sCard = shuffle(Array.from(li));

// Flipping the cards

function flip(e) {
  if (!e.target.classList.contains("open") && e.target.nodeName === "LI") {
    e.target.classList.add("open");
    e.target.classList.add("show");
    array.push(e.target);
  }
  
  if (array.length === 2) {
    open(array);
  }
}

deck.addEventListener('click', flip);

// Comparing the cards

function open(e){
  if (array[0].innerHTML === array[1].innerHTML) {
    matched(e);
  } else {
    setTimeout(notMatched, 1000);
  }
  movesCounter();
  winner();
}

function notMatched() {
  array[0].classList.remove("show", "open");
  array[1].classList.remove("show", "open");
  array = [];
}

function matched() {
  array[0].classList.add("match");
  array[1].classList.add("match");
  array = [];
}

// Counting moves

function movesCounter() {
  let moves = countMoves.textContent;
  moves++;
  countMoves.textContent = moves;
  if (moves == 10) {
    stars.children[0].remove();
  } else if (moves == 15) {
    stars.children[0].remove();
  } else if (moves == 17) {
    stars.children[0].remove();
  }
} 

// Declaring winner

function winner() {
  if (matched.length === array.length) {
    swal({
      title: "Good job!",
      text: "Congratulations! Your cards matched.",
      icon: "success",
    });
  }
}

//Restart

restart.addEventListener('click', function() {
  location.reload();
  shuffle(array);
});


// Shuffle 

for (let x = 0; x <li.length; x++) {
  deck.removeChild(li[x]);
} 
for (let x = 0; x <li.length; x++) {
  deck.appendChild(sCard[x]);
} 

function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;
  
  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }
  
  return array;
} 

