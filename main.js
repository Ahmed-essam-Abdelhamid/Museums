var btn = document.getElementById('mode-btn');

btn.onclick = function() {
    document.body.classList.toggle('light-mode');
    
    if (document.body.classList.contains('light-mode')) {
        btn.innerHTML = 'Dark Mode';
    } else {
        btn.innerHTML = 'Light Mode';
    }
};