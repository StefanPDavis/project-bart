document.addEventListener('DOMContentLoaded', () => {
    // Functions to open and close a modal
    function openModal($el) {
      $el.classList.add('is-active');
    }
  
    function closeModal($el) {
      $el.classList.remove('is-active');
    }
  
    function closeAllModals() {
      (document.querySelectorAll('.modal') || []).forEach(($modal) => {
        closeModal($modal);
      });
    }
  
    // Add a click event on buttons to open a specific modal
    (document.querySelectorAll('.js-modal-trigger') || []).forEach(($trigger) => {
      const modal = $trigger.dataset.target;
      const $target = document.getElementById(modal);
  
      $trigger.addEventListener('click', () => {
        openModal($target);
      });
    });
  
    // Add a click event on various child elements to close the parent modal
    (document.querySelectorAll('.modal-background, .modal-close, .modal-card-head .delete, .modal-card-foot .button') || []).forEach(($close) => {
      const $target = $close.closest('.modal');
  
      $close.addEventListener('click', () => {
        closeModal($target);
      });
    });
  
    // Add a keyboard event to close all modals
    document.addEventListener('keydown', (event) => {
      if (event.code === 'Escape') {
        closeAllModals();
      }
    });

    // Enable draggable functionality on any DOM element. Move the draggable object by clicking on it with the mouse and dragging it anywhere within the viewport.

  $( function() {
    $( "#draggableCat" ).draggable();
  } );

    $( function() {
    $( "#draggableDog" ).draggable();
  } );

    $( function() {
    $( "#datepicker" ).datepicker();
  } );

    $( function() {
    $( "#sortable" ).sortable();
  } );

  });

document.addEventListener('DOMContentLoaded', () => {
    // Functions to open and close a modal
    function openModal($el) {
      $el.classList.add('is-active');
    }
  
    function closeModal($el) {
      $el.classList.remove('is-active');
    }
  
    function closeAllModals() {
      (document.querySelectorAll('.modal') || []).forEach(($modal) => {
        closeModal($modal);
      });
    }
  
    // Add a click event on buttons to open a specific modal
    (document.querySelectorAll('.js-modal-trigger') || []).forEach(($trigger) => {
      const modal = $trigger.dataset.target;
      const $target = document.getElementById(modal);
  
      $trigger.addEventListener('click', () => {
        openModal($target);
      });
    });
  
    // Add a click event on various child elements to close the parent modal
    (document.querySelectorAll('.modal-background, .modal-close, .modal-card-head .delete, .modal-card-foot .button') || []).forEach(($close) => {
      const $target = $close.closest('.modal');
  
      $close.addEventListener('click', () => {
        closeModal($target);
      });
    });
  
    // Add a keyboard event to close all modals
    document.addEventListener('keydown', (event) => {
      if (event.code === 'Escape') {
        closeAllModals();
      }
    });

    // Enable draggable functionality on any DOM element. Move the draggable object by clicking on it with the mouse and dragging it anywhere within the viewport.

  $( function() {
    $( "#draggableCat" ).draggable();
  } );

    $( function() {
    $( "#draggableDog" ).draggable();
  } );

    $( function() {
    $( "#datepicker" ).datepicker();
  } );

    $( function() {
    $( "#sortable" ).sortable();
  } );

  });

  var containerOne = document.querySelector('#vote-cat');
  var pasteCat = document.createElement("img")
  var containerTwo = document.querySelector('#vote-dog');
  var pasteDog = document.createElement("img")

  
function renderCat(data) {
  catPicture = data[0].url;
  pasteCat.src = catPicture;
  containerOne.append(pasteCat);
}

function renderDog(data) {
  dogPicture = data[0].url;
  pasteDog.src = dogPicture;
  containerTwo.append(pasteDog);
}

function fetchPictures() {
  var urlOne = 'https://api.thecatapi.com/v1/images/search'
  var urlTwo = 'https://api.thedogapi.com/v1/images/search'

  fetch(urlOne)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      renderCat(data)
    });
  
    fetch(urlTwo)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      renderDog(data)
    });
}

fetchPictures();

function fetchCat() {
  var urlOne = 'https://api.thecatapi.com/v1/images/search'

  fetch(urlOne)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      renderCat(data)
    });
}

function fetchDog() {
  var urlTwo = 'https://api.thedogapi.com/v1/images/search'
    
  fetch(urlTwo)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      renderDog(data)
    });
}

var catNumber = 0;
var catClick = document.querySelector("#vote-cat");
var catCount = document.querySelector("#cat-count");

var dogNumber = 0;
var dogClick = document.querySelector("#vote-dog");
var dogCount = document.querySelector("#dog-count");

function resetCat() {
  document.getElementById('cat-count').innerHTML = 0;
}

function resetDog() {
  document.getElementById('dog-count').innerHTML = 0;
}

// Updates count on page
function catCounterText() {
  catCount.textContent = catNumber;
}
// Attach event listener to increment button element
catClick.addEventListener("click", function() {
  if (catNumber < 3) {
    catNumber++;
    catCounterText();
    fetchDog();
    dogNumber = 0;
    resetDog();
    renderWinner();
  } else {
    fetchDog();
    dogNumber = 0;
    resetDog();
    fetchCat();
    catNumber = 0;
    resetCat();
  }
});

// Updates count on page
function dogCounterText() {
  dogCount.textContent = dogNumber;
}
// Attach event listener to increment button element
dogClick.addEventListener("click", function() {
  if (dogNumber < 3) {
    dogNumber++;
    dogCounterText();
    fetchCat();
    catNumber = 0;
    resetCat();
    renderWinner();
  } else {
    fetchDog();
    dogNumber = 0;
    resetDog();
    fetchCat();
    catNumber = 0;
    resetCat();
  }
});

var catWinner = document.getElementById('winner-cat');
var dogWinner = document.getElementById('winner-dog');
var winner = document.getElementById('last-winner');

let catDogWiners;

function renderWinner() {
  if (catNumber === 3) {

    catWinner.src = catPicture
    winner.src = catPicture
    storeCatWinner();

  } 
  else if (dogNumber === 3) {

    dogWinner.src = dogPicture
    winner.src = dogPicture
    storeDogWinner();
  }
}


function storeCatWinner() {
  catWinner = catPicture
  localStorage.setItem("catWin", catWinner);
  catDogWiners=JSON.parse(localStorage.getItem("catDogWiners"))?JSON.parse(localStorage.getItem("catDogWiners")):[];
  catDogWiners.push(catWinner);
  localStorage.setItem("catDogWiners", JSON.stringify(catDogWiners));
}

function storeDogWinner() {
  dogWinner = dogPicture
  localStorage.setItem("dogWin", dogWinner);
  catDogWiners=JSON.parse(localStorage.getItem("catDogWiners"))?JSON.parse(localStorage.getItem("catDogWiners")):[];
  catDogWiners.push(dogWinner);
  localStorage.setItem("catDogWiners", JSON.stringify(catDogWiners));

}

function getCatWinner() {
  var storedCats = localStorage.getItem("catWin");
  catWinner.src = storedCats
}

function getDogWinner() {
  var storedDogs = localStorage.getItem("dogWin");
  dogWinner.src = storedDogs
}

function init() {
  getCatWinner();
  getDogWinner();
  tableBody();

}
 
 // function express to filter out the undefined
  const filterUndefine = truthy => truthy !== undefined;

  const tableBody =()=>{
    let tbodyEl = document.getElementById('sortable');
    // Local data
    let allWinners = JSON.parse(localStorage.getItem("catDogWiners")).filter(filterUndefine);
    console.log(allWinners);
    let leng = allWinners.length;
    for (let i = 0; i <leng ; i++) {
      let liEl = document.createElement('li');
      let spanEl = document.createElement('span');
      liEl.setAttribute("class","ui-state-default");
      spanEl.setAttribute("class", "ui-icon ui-icon-arrowthick-2-n-s")
      liEl.append(spanEl);
      liEl.textContent = (i+1)+ "."+allWinners[i];
      tbodyEl.append(liEl);
    }
  }

init();

 

