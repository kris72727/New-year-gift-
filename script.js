function nextScreen(screenId) {
    // Hide all screens
    document.querySelectorAll('.screen').forEach(screen => {
        screen.classList.remove('active');
    });
    
    // Show the specific screen
    document.getElementById(screenId).classList.add('active');
}
