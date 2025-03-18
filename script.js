//your code here

// Function to swap between light and dark themes
function swapTheme() {
    // Get the elements
    const app = document.getElementById("app");
    const button = document.getElementById("swap");
    
    // Check the current theme and toggle it
    if (app.classList.contains("day")) {
        app.classList.remove("day");
        app.classList.add("night");
        
        button.classList.remove("button_day");
        button.classList.add("button_night");
    } else {
        app.classList.remove("night");
        app.classList.add("day");
        
        button.classList.remove("button_night");
        button.classList.add("button_day");
    }
}
