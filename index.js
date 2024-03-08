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
        <div class="container py-10">
            <div class="row justify-content-center">
                <div class="col">
                <div class="card shadow-sm" style="background-color: #E78895;">

                    <div class="card-img-container">
                        <img src="${url}" alt="${title}" class="card-img-top" >
                    </div>
                    <div class="card-body text-center" style="background-color: #E78895;">
                        <p class="card-text" style="font-size: 24px;"><strong>${title}</strong></p>
                        <div class="d-flex justify-content-between align-items-center">

                        </div>
                    </div>
                </div>
                </div>
            </div>
        </div>
        `;

        // Add event listener to the recipe card based on path
        recipeCard.addEventListener("click", function() {
            window.location.href = `recipe.html?recipeId=${recipe.recipeId}`;
        });

        recipeContainer.appendChild(recipeCard);
    });
}