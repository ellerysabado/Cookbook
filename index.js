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
        let path = recipe.path;
        let cardId = "recipe-card-" + index;

        let recipeCard = document.createElement("div");
        recipeCard.classList.add("col");
        recipeCard.innerHTML = `
            <div id=${cardId} class="card shadow-sm">
                <img src="${url}" alt="${title}" class="bd-placeholder-img card-img-top" width="400px" height="400px">
                <div class="card-body">
                    <p class="card-text">${title}</p>
                    <div class="d-flex justify-content-between align-items-center">
                    </div>
                </div>
            </div>
        `;

        // Add event listener to the recipe card based on path
        if (path === "tacoring.html") {
            recipeCard.addEventListener("click", function() {
                window.location.href = path;
            });
        }
        if (path === "chickensquare.html") {
            recipeCard.addEventListener("click", function() {
                window.location.href = path;
            });
        }

        recipeContainer.appendChild(recipeCard);
    });
}