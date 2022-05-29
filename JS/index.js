(() => {
    const btn = document.querySelector('.mainSearch');
    const input = document.querySelector('input');
    const howToUse = document.querySelector('.howToUse');
    const iframebox = document.querySelector('.iframebox');
    let flag = true;

    btn.addEventListener('click', function () {
        localStorage.setItem('search', input.value)
        location.href = 'search.html';
    });

    howToUse.addEventListener('click', function () {
        if (flag) {
            iframebox.style.display = 'block';
            howToUse.innerHTML = '접 기'
            flag = false;
        }
        else {
            iframebox.style.display = 'none';
            howToUse.innerHTML = '노하우 사용법을 알아봐요!'
            flag = true;
        }
        
    });
})();