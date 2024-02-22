let menu = document.getElementById('menu');
let menuItems = document.getElementsByClassName("topnav");

menu.addEventListener('click', () => {
    // Loop through each element with class "topnav"
    for (let i = 0; i < menuItems.length; i++) {
        // Check if the element is initially hidden
        if (getComputedStyle(menuItems[i]).display === 'none') {
            menuItems[i].style.display = 'block'; // Override the display property
        } else {
            menuItems[i].style.display = 'none'; // Toggle display between block and none
        }
    }
});
