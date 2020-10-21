// Write your Pizza Builder JavaScript in this file.

// Constants
let basePrice = 10;
let ingredients = {
  pepperoni: { name: 'pepperoni', price: 1 },
  mushrooms: { name: 'Mushrooms', price: 1 },
  greenPeppers: { name: 'Green Peppers', price: 1 },
  whiteSauce: { name: 'White sauce', price: 3 },
  glutenFreeCrust: { name: 'Gluten-free crust', price: 5 }
};

// Initial value of the state (the state values can change over time)
let state = {
  pepperoni: true,
  mushrooms: true,
  greenPeppers: true,
  whiteSauce: false,
  glutenFreeCrust: false
};

// This function takes care of rendering the pizza based on the state
// This function is triggered once at the beginning and every time the state is changed
function renderEverything() {
  renderPepperoni();
  renderMushrooms();
  renderGreenPeppers();
  renderWhiteSauce();
  renderGlutenFreeCrust();

  renderButtons();
  renderPrice();
}

function renderPepperoni() {
  document.querySelectorAll('.pep').forEach(onePep => {
    if (state.pepperoni) {
      onePep.style.visibility = 'visible';
    } else {
      onePep.style.visibility = 'hidden';
    }
  });
}

function renderMushrooms() {
  // Iteration 1: set the visibility of `<section class="mushroom">`
  document.querySelectorAll('.mushroom').forEach(oneMushroom => {
    if (state.mushrooms) {
      oneMushroom.style.visibility = 'visible';
    } else {
      oneMushroom.style.visibility = 'hidden';
    }
  });
}

function renderGreenPeppers() {
  // Iteration 1: set the visibility of `<section class="green-pepper">`
  document.querySelectorAll('.green-pepper').forEach(oneGreenPepper => {
    if (state.greenPeppers) {
      oneGreenPepper.style.visibility = 'visible';
    } else {
      oneGreenPepper.style.visibility = 'hidden';
    }
  });
}

function renderWhiteSauce() {
  // Iteration 2: add/remove the class "sauce-white" of `<section class="sauce">`

   oneWhiteSauce = document.querySelector('.sauce')
     if (state.whiteSauce) {
      oneWhiteSauce.classList.add('sauce-white');
     } else {
        oneWhiteSauce.classList.remove('sauce-white');
     }
 }

function renderGlutenFreeCrust() {
  // Iteration 2: add/remove the class "crust-gluten-free" of `<section class="crust">`

  gfCrust = document.querySelector('.crust')
    if (state.glutenFreeCrust) {
      gfCrust.classList.add('crust-gluten-free');
    } else {
      gfCrust.classList.remove('crust-gluten-free');
    }
 }

function renderButtons() {
  // Iteration 3: add/remove the class "active" of each `<button class="btn">`

  activePep = document.querySelector('.btn.btn-pepperoni')
  if (state.pepperoni) {
    activePep.classList.add('active');
  } else {
    activePep.classList.remove('active');
  }

  activeMushrooms = document.querySelector('.btn.btn-mushrooms')
  if (state.mushrooms) {
    activeMushrooms.classList.add('active');
  } else {
    activeMushrooms.classList.remove('active');
  }

  activeGP = document.querySelector('.btn.btn-green-peppers')
  if (state.greenPeppers) {
    activeGP.classList.add('active');
  } else {
    activeGP.classList.remove('active');
  }

  activeWS = document.querySelector('.btn.btn-sauce')
  if (state.whiteSauce) {
    activeWS.classList.add('active');
  } else {
    activeWS.classList.remove('active');
  }

  activeGF = document.querySelector('.btn.btn-crust')
  if (state.glutenFreeCrust) {
    activeGF.classList.add('active');
  } else {
    activeGF.classList.remove('active');
  }

}


function renderPrice() {
  // Iteration 4: change the HTML of `<aside class="panel price">`
  let totalPrice = basePrice;
  document.querySelector('aside ul').innerHTML = ''
  if (state.pepperoni) {
    document.querySelector('aside ul').innerHTML += `<li>$${ingredients.pepperoni.price} pepperoni</li>`;
    totalPrice += ingredients.pepperoni.price
  }
  if (state.mushrooms) {
    document.querySelector('aside ul').innerHTML += `<li>$${ingredients.mushrooms.price} mushrooms</li>`;
    totalPrice += ingredients.mushrooms.price
  }
  if (state.greenPeppers) {
    document.querySelector('aside ul').innerHTML += `<li>$${ingredients.greenPeppers.price} green peppers</li>`;
    totalPrice += ingredients.greenPeppers.price
  }
  if (state.whiteSauce) {
    document.querySelector('aside ul').innerHTML += `<li>$${ingredients.whiteSauce.price} white sauce</li>`;
    totalPrice += ingredients.whiteSauce.price
  }
  if (state.glutenFreeCrust) {
    document.querySelector('aside ul').innerHTML += `<li>$${ingredients.glutenFreeCrust.price} gluten-free crust</li>`;
    totalPrice += ingredients.glutenFreeCrust.price
  }

  document.querySelector('aside strong').innerHTML = `$${totalPrice}`;
}


renderEverything();

// Iteration 1: Example of a click event listener on `<button class="btn btn-pepperoni">`
document.querySelector('.btn.btn-pepperoni').addEventListener('click', () => {
  state.pepperoni = !state.pepperoni;
  renderEverything();
});

// Iteration 1: Add click event listener on `<button class="btn btn-mushrooms">`
document.querySelector('.btn.btn-mushrooms').addEventListener('click', () => {
  state.mushrooms = !state.mushrooms;
  renderEverything();
});

// Iteration 1: Add click event listener on `<button class="btn btn-green-peppers">`
document.querySelector('.btn.btn-green-peppers').addEventListener('click', () => {
  state.greenPeppers = !state.greenPeppers;
  renderEverything();
});
// Iteration 2: Add click event listener on `<button class="btn btn-sauce">`
document.querySelector('.btn.btn-sauce').onclick = function() {
  state.whiteSauce = !state.whiteSauce
  renderEverything()
}
// Iteration 2: Add click event listener on `<button class="btn btn-crust">`
document.querySelector('.btn.btn-crust').onclick = function() {
  state.glutenFreeCrust = !state.glutenFreeCrust;
  renderEverything();
}
