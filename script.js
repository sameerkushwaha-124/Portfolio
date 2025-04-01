function loadComponent(component, elementId) {
    fetch(component)
        .then(response => response.text())
        .then(data => {
            document.getElementById(elementId).innerHTML = data;
        });
}

// Load components
// loadComponent('header.html', 'header');
// loadComponent('about.html', 'about');
loadComponent('skills.html', 'skills');
// loadComponent('footer.html', 'footer');