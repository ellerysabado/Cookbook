function generateRecipeHTML(recipe) {
    return `
    <div class="col">
        <div class="card shadow-sm">
            <img src="${recipe.url}" alt="${recipe.title}" class="bd-placeholder-img card-img-top">
            <div class="card-body">
                <p class="card-text">${recipe.title}</p>
                <div class="d-flex justify-content-between align-items-center">
                    <div class="btn-group">
                        <button type="button" class="btn btn-sm btn-outline-secondary">View</button>
                        <button type="button" class="btn btn-sm btn-outline-secondary">Edit</button>
                    </div>
                    <small class="text-muted">${new Date().toLocaleDateString()}</small>
                </div>
            </div>
        </div>
    </div>
    `;
}

// Function to generate HTML for all recipes
function generateAllRecipesHTML(recipes) {
    let html = '';
    recipes.forEach(recipe => {
        html += generateRecipeHTML(recipe);
    });
    return html;
}

// Function to render recipes HTML on the page
function renderRecipes(recipes) {
    const recipesContainer = document.getElementById('recipes-container');
    recipesContainer.innerHTML = generateAllRecipesHTML(recipes);
}

// Render recipes on page load
window.onload = function() {
    renderRecipes(recipesData.Recipe);
};