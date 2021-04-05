
const popup = document.querySelector('.popup');
const close = document.querySelector('.close');

window.onload = function() {
setTimeout(function() {
popup.style.display = 'block';
}, 3000)
}

close.addEventListener('click', () => {
popup.style.display = 'none';

})
