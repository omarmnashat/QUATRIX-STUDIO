// Function to handle language change
function changeLanguage(lang) {
    // Save the selected language to local storage
    localStorage.setItem("selectedLanguage", lang);

    // Fetch the language file
    fetch("lang.json")
        .then(response => response.json())
        .then(data => {
            // Update text content for elements with 'data-lang'
            const elements = document.querySelectorAll("[data-lang]");

            elements.forEach(element => {
                const key = element.getAttribute("data-lang");
                if (data[lang][key]) {
                    element.textContent = data[lang][key];
                }
            });
        })
        .catch(error => console.error("Error loading language file:", error));
}

// Check if language is already selected in local storage
document.addEventListener("DOMContentLoaded", () => {
    const selectedLanguage = localStorage.getItem("selectedLanguage") || 'en';
    changeLanguage(selectedLanguage);
});
