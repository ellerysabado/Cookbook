// Function to generate HTML for each recipe
function generateRecipeHTML(recipe) {
    return `
      <div class="card shadow-sm">
        <img src="${recipe.url}" alt="${recipe.title}">
        <div class="card-body">
          <p class="card-text">${recipe.title}</p>
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
}

// Function to insert recipes into the HTML
function insertRecipes() {
    var recipeContainer = document.getElementById("recipeContainer");
    if (recipeContainer) {
        // Clear any existing content
        recipeContainer.innerHTML = "";

        // Loop through each recipe and insert into the container
        recipeData.Recipe.forEach(function(recipe) {
            var recipeHTML = generateRecipeHTML(recipe);
            recipeContainer.innerHTML += `<div class="col">${recipeHTML}</div>`;
        });
    }
}

// Call the insertRecipes function to populate the HTML with recipes
insertRecipes();