// Function to load safety tips
function loadSafetyTips(data) {
    const safetyContainer = document.getElementById("safety-tips-container");

    data.Cooking.forEach(safetyTip => {
        const tipCard = document.createElement("div");
        tipCard.classList.add("card", "mb-4");
        tipCard.style.backgroundColor = "#E78895"; // Set background color here

        const tipImg = document.createElement("img");
        tipImg.classList.add("card-img-top");
        tipImg.src = safetyTip.url;
        tipImg.alt = safetyTip.title;
        tipImg.style.marginTop = "20px"; // Adjust margin-top here

        const tipCardBody = document.createElement("div");
        tipCardBody.classList.add("card-body");

        const tipTitle = document.createElement("h5");
        tipTitle.classList.add("card-title");
        tipTitle.textContent = safetyTip.title;
        tipTitle.style.color = "#ffffff"; // Set text color to white
        tipTitle.style.fontWeight = "bold";

        const tipDescription = document.createElement("p");
        tipDescription.classList.add("card-text");
        tipDescription.textContent = safetyTip.description;
        tipDescription.style.color = "#ffffff"; // Set text color to white

        const tipRemember = document.createElement("p");
        tipRemember.classList.add("card-text");
        tipRemember.classList.add("text-white");
        tipRemember.textContent = safetyTip.remember;
        tipRemember.style.color = "#ffffff!important"; // Set text color to white

        tipCardBody.appendChild(tipTitle);
        tipCardBody.appendChild(tipDescription);
        tipCardBody.appendChild(tipRemember);

        tipCard.appendChild(tipImg);
        tipCard.appendChild(tipCardBody);

        safetyContainer.appendChild(tipCard);
    });
}

// Fetch the safety tips data from safety.json
fetch("./safety.json")
    .then(response => {
        if (!response.ok) {
            throw new Error("Failed to load safety tips.");
        }
        return response.json();
    })
    .then(data => loadSafetyTips(data))
    .catch(error => console.error("Error loading safety tips:", error));