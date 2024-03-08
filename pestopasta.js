document.addEventListener("DOMContentLoaded", async function() {
    try {
      const response = await fetch("data.json");
      const data = await response.json();
      loadPestoPasta(data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  });
  
  function loadPestoPasta(data) {
    const pestoPasta = data.Recipe.find(recipe => recipe.title === "Pesto Pasta");
    
    if (pestoPasta) {
      const ingredients = pestoPasta.ingredients.split('\n').map(item => `<li>${item}</li>`).join('');
      const directions = pestoPasta.directions.split('\n').map(item => `<p>${item}</p>`).join('');
  
      const ingredientsContainer = document.getElementById('ingredients-container');
      const directionsContainer = document.getElementById('directions-container');
  
      ingredientsContainer.innerHTML = `<ul>${ingredients}</ul>`;
      directionsContainer.innerHTML = directions;
  
      // Creating the image element
      const imageElement = document.createElement('img');
      imageElement.src = pestoPasta.url;
      imageElement.alt = pestoPasta.title;
      imageElement.classList.add('img-fluid', 'mb-4');
  
      // Adding image to the left of the text
      const imageContainer = document.createElement('div');
      imageContainer.classList.add('col-md-6', 'pesto-pasta-image');
      imageContainer.appendChild(imageElement);
  
      const textContainer = document.createElement('div');
      textContainer.classList.add('col-md-6', 'pesto-pasta-text');
      textContainer.innerHTML = `
        <h1 class="display-5 fw-bold" style="color: #ffffff;">${pestoPasta.title}</h1>
        <p class="col-md-8 fs-4" style="color: #ffffff">${pestoPasta.description}</p>
      `;
  
      const pestoPastaContainer = document.querySelector('.pesto-pasta-container');
      pestoPastaContainer.appendChild(imageContainer);
      pestoPastaContainer.appendChild(textContainer);
    }
  }