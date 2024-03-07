fetch("./data.json")
    .then(response => response.json())
    .then(data => loadRecipes(data));

function loadRecipes(data) {
    var recipeContainer = document.getElementById("recipe-container");
    var recipeArray = data.Recipe;

    recipeArray.forEach((recipe, index) => {
        let recipeId = recipe.recipeId;
        let title = recipe.title;
        let url = recipe.url;
        let cardId = "recipe-card-" + index;

        let recipeCard = document.createElement("div");
        recipeCard.classList.add("col");
        recipeCard.innerHTML = `
            <div id=${cardId} class="card shadow-sm">
                <img src="${url}" alt="${title}" class="bd-placeholder-img card-img-top">
                <div class="card-body">
                    <p class="card-text">${title}</p>
                    <div class="d-flex justify-content-between align-items-center">
                        <div class="btn-group">
                            <button type="button" class="btn btn-sm btn-outline-secondary">View</button>
                            <button type="button" class="btn btn-sm btn-outline-secondary">Edit</button>
                        </div>
                        <small class="text-muted">DATE_HERE</small>
                    </div>
                </div>
            </div>
        `;

        recipeContainer.appendChild(recipeCard);
    });
}
