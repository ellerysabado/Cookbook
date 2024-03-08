document.addEventListener("DOMContentLoaded", async function() {
    try {
      const response = await fetch("data.json");
      const data = await response.json();
      const urlParams = new URLSearchParams(window.location.search);
      const recipeId = urlParams.get('recipeId');
      const recipe = data.Recipe.find(recipe => recipe.recipeId === recipeId);

      if (recipe) {
        loadRecipe(recipe);
      } else {
        console.error('Recipe not found');
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  });
  
  function loadRecipe(recipe) {
    const ingredients = recipe.ingredients.split('\n').map(item => `<li>${item}</li>`).join('');
    const directions = recipe.directions.split('\n').map(item => `<p>${item}</p>`).join('');

    const ingredientsContainer = document.getElementById('ingredients-container');
    const directionsContainer = document.getElementById('directions-container');

    ingredientsContainer.innerHTML = `<ul>${ingredients}</ul>`;
    directionsContainer.innerHTML = directions;

    // Creating the image element
    const imageElement = document.createElement('img');
    imageElement.src = recipe.url;
    imageElement.alt = recipe.title;
    imageElement.classList.add('img-fluid', 'mb-4');

    // Adding image to the left of the text
    const imageContainer = document.createElement('div');
    imageContainer.classList.add('col-md-6', 'recipe-image');
    imageContainer.appendChild(imageElement);

    const textContainer = document.createElement('div');
    textContainer.classList.add('col-md-6', 'recipe-text');
    textContainer.innerHTML = `
      <h1 class="display-5 fw-bold" style="color: #ffffff;">${recipe.title}</h1>
      <p class="col-md-8 fs-4" style="color: #ffffff">${recipe.description}</p>
    `;

    const recipeContainer = document.querySelector('.recipe-container');
    recipeContainer.appendChild(imageContainer);
    recipeContainer.appendChild(textContainer);
  }