    // Example of hiding the preloader after the page content is loaded
    window.addEventListener('load', function () {
        var preloaderOverlay = document.querySelector('.preloader-overlay');
        if (preloaderOverlay) {
            preloaderOverlay.style.display = 'none';
        }
    });