const btn = document.querySelector('.mainSearch');
const input = document.querySelector('input');
btn.addEventListener('click', function () {
    localStorage.setItem('search', input.value)
    location.href = 'search.html';
});