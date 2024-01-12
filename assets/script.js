// // set up local storage
// // set up api's
// // define variables
// // set up button listener
// // set up winners modal
// // create event listener
// // 



// document.addEventListener('DOMContentLoaded', () => {
//     // Functions to open and close a modal
//     function openModal($el) {
//       $el.classList.add('is-active');
//     }
  
//     function closeModal($el) {
//       $el.classList.remove('is-active');
//     }
  
//     function closeAllModals() {
//       (document.querySelectorAll('.modal') || []).forEach(($modal) => {
//         closeModal($modal);
//       });
//     }
  
//     // Add a click event on buttons to open a specific modal
//     (document.querySelectorAll('.js-modal-trigger') || []).forEach(($trigger) => {
//       const modal = $trigger.dataset.target;
//       const $target = document.getElementById(modal);
  
//       $trigger.addEventListener('click', () => {
//         openModal($target);
//       });
//     });
  
//     // Add a click event on various child elements to close the parent modal
//     (document.querySelectorAll('.modal-background, .modal-close, .modal-card-head .delete, .modal-card-foot .button') || []).forEach(($close) => {
//       const $target = $close.closest('.modal');
  
//       $close.addEventListener('click', () => {
//         closeModal($target);
//       });
//     });
  
//     // Add a keyboard event to close all modals
//     document.addEventListener('keydown', (event) => {
//       if (event.code === 'Escape') {
//         closeAllModals();
//       }
//     });
//   });


// set up local storage
// set up api's
// define variables
// set up button listener
// set up winners modal
// create event listener
// 



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
  
function renderCat(data) {
  console.log(data);

  var containerOne = document.querySelector('#vote-cat');
  var pasteCat = document.createElement("img")
  
    catPicture = data[0].url
    pasteCat.src = catPicture

    containerOne.append(pasteCat)


  
}

function renderDog(data) {
  console.log(data);

  var containerTwo = document.querySelector('#vote-dog');
  var pasteDog = document.createElement("img")

    dogPicture = data[0].url
    pasteDog.src = dogPicture

    containerTwo.append(pasteDog)
  
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

var catNumber = 0;
var catClick = document.querySelector("#vote-cat");
var catCount = document.querySelector("#cat-count");

var dogNumber = 0;
var dogClick = document.querySelector("#vote-dog");
var dogCount = document.querySelector("#dog-count");

// Updates count on page
function catCounterText() {
  catCount.textContent = catNumber;
}
// Attach event listener to increment button element
catClick.addEventListener("click", function() {
  if (catNumber < 3) {
    catNumber++;
    catCounterText();
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
  }
});
