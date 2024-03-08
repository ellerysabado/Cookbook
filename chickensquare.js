document.addEventListener("DOMContentLoaded", async function() {
    try {
      const response = await fetch("data.json");
      const data = await response.json();
      loadChickenSquare(data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  });
  
function loadChickenSquare(data) {
  const chickenSquare = data.Recipe.find(recipe => recipe.title === "Chicken Square");

  if (chickenSquare) {
    const ingredients = chickenSquare.ingredients.split('\n').map(item => `<li>${item}</li>`).join('');
    const directions = chickenSquare.directions.split('\n').map(item => `<p>${item}</p>`).join('');

    const ingredientsContainer = document.getElementById('ingredients-container');
    const directionsContainer = document.getElementById('directions-container');

    ingredientsContainer.innerHTML = `<ul>${ingredients}</ul>`;
    directionsContainer.innerHTML = directions;

    // Creating the image element
    const imageElement = document.createElement('img');
    imageElement.src = chickenSquare.url;
    imageElement.alt = chickenSquare.title;
    imageElement.classList.add('img-fluid', 'mb-4');

    // Adding image to the left of the text
    const imageContainer = document.createElement('div');
    imageContainer.classList.add('col-md-6', 'chicken-square-image');
    imageContainer.appendChild(imageElement);

    const textContainer = document.createElement('div');
    textContainer.classList.add('col-md-6', 'chicken-square-text');
    textContainer.innerHTML = `
      <h1 class="display-5 fw-bold" style="color: #ffffff;">${chickenSquare.title}</h1>
      <p class="col-md-8 fs-4" style="color: #ffffff">${chickenSquare.description}</p>
    `;

    const chickenSquareContainer = document.querySelector('.chicken-square-container');
    chickenSquareContainer.appendChild(imageContainer);
    chickenSquareContainer.appendChild(textContainer);

    // Adding event listener to chicken square container
    chickenSquareContainer.addEventListener('click', function() {
      window.location.href = chickenSquare.path;
    });
  }
}