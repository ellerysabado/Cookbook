function generateRecipeCards(data) {
    const container = document.querySelector('.row.row-cols-1.row-cols-sm-2.row-cols-md-3.g-3');
  
    data.forEach(recipe => {
      const card = document.createElement('div');
      card.classList.add('col');
  
      card.innerHTML = `
        <div class="card shadow-sm">
          <svg class="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg"
            role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false">
            <title>Placeholder</title>
            <rect width="100%" height="100%" fill="#55595c" /><text x="50%" y="50%" fill="#eceeef"
              dy=".3em">Thumbnail</text>
          </svg>
          <div class="card-body">
            <h5 class="card-title">${recipe.title}</h5>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <div class="d-flex justify-content-between align-items-center">
              <div class="btn-group">
                <button type="button" class="btn btn-sm btn-outline-secondary">View</button>
                <button type="button" class="btn btn-sm btn-outline-secondary">Edit</button>
              </div>
              <small class="text-body-secondary">9 mins</small>
            </div>
          </div>
        </div>
      `;
  
      container.appendChild(card);
    });
  }
  
  // Call the function to generate recipe cards
  generateRecipeCards(recipeData);