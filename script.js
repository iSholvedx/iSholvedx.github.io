// script.js
document.addEventListener("DOMContentLoaded", function() {
    var loadingScreen = document.getElementById('loading-screen');
    var content = document.getElementById('content');

    // Simulate loading time (remove this in production)
    setTimeout(function() {
        loadingScreen.style.display = 'none';
        content.style.display = 'block';
    }, 2000); // Adjust time as needed

    // For production use, you can simply use the following lines without the timeout
    // loadingScreen.style.display = 'none';
    // content.style.display = 'block';
});
