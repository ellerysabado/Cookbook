document.addEventListener("DOMContentLoaded", async function() {
    try {
      const response = await fetch("data.json");
      const data = await response.json();
      loadTacoRing(data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  });
  
  function loadTacoRing(data) {
    const tacoRing = data.Recipe.find(recipe => recipe.title === "TacoRing");
    
    if (tacoRing) {
      const ingredients = tacoRing.ingredients.split('\n').map(item => `<li>${item}</li>`).join('');
      const directions = tacoRing.directions.split('\n').map(item => `<p>${item}</p>`).join('');
  
      const ingredientsContainer = document.getElementById('ingredients-container');
      const directionsContainer = document.getElementById('directions-container');
  
      ingredientsContainer.innerHTML = `<ul>${ingredients}</ul>`;
      directionsContainer.innerHTML = directions;
  
      // Creating the image element
      const imageElement = document.createElement('img');
      imageElement.src = tacoRing.url;
      imageElement.alt = tacoRing.title;
      imageElement.classList.add('img-fluid', 'mb-4');
  
      // Adding image to the left of the text
      const imageContainer = document.createElement('div');
      imageContainer.classList.add('col-md-6', 'taco-ring-image');
      imageContainer.appendChild(imageElement);
  
      const textContainer = document.createElement('div');
      textContainer.classList.add('col-md-6', 'taco-ring-text');
      textContainer.innerHTML = `
        <h1 class="display-5 fw-bold" style="color: #ffffff;">${tacoRing.title}</h1>
        <p class="col-md-8 fs-4" style="color: #ffffff">${tacoRing.description}</p>
      `;
  
      const tacoRingContainer = document.querySelector('.taco-ring-container');
      tacoRingContainer.appendChild(imageContainer);
      tacoRingContainer.appendChild(textContainer);
    }
  }