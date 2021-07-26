// Target Variables
const button = document.getElementById('button')
const links = document.querySelector('.links');

// Add event listener that toggles the class needed to show the links back and forth.
button.addEventListener('click', () => {
    links.classList.toggle('toggle-button')
})