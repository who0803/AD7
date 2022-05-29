

(() => {
    const obj = JSON.parse(localStorage.getItem('obj'));
    const key = localStorage.getItem('key');
    const lecName = document.querySelector('.lecName');
    const list = document.querySelector('.list');


    // nav 버튼
    const exitBtn = document.querySelector('.exitBtn');
    const backBtn = document.querySelector('.backBtn');
    const nextBtn = document.querySelector('.nextBtn');

    exitBtn.addEventListener('click', function () {
        location.href = 'myLecList.html';
    });


    console.log(obj);
    console.log(key);







    // 강의 목록을 배열로 받아옴
    let currentLec;
    function createList(lecArr) {
        for (let i = 0; i < lecArr.length; i++) {
            const lec = document.createElement('div');
            lec.classList.add('lec');
            lec.dataset.index = i;
            lec.insertAdjacentHTML("beforeend", `<i class="fa fa-play-circle" aria-hidden="true"></i>`);

            const lecListLecName = document.createElement('div');
            lecListLecName.classList.add('lecListLecName');
            console.log(lecArr[i]);
            lecListLecName.innerHTML = i + 1 + '. ' + lecArr[i];

            lec.appendChild(lecListLecName);
            list.appendChild(lec);
        }

        //처음에 만들 때 첫번째 강의 켜줌
        const lec = document.querySelectorAll('.lec');
        const lecListLecName = document.querySelectorAll('.lecListLecName');
        lecName.innerHTML = lecListLecName[0].innerText;
        lec[0].classList.add('actlect');
        currentLec = lec[0];

        list.addEventListener('click', function (e) {


            if (e.target.classList.contains("lec")) {
                lecName.innerHTML = lecListLecName[e.target.dataset.index].innerText;
                e.target.classList.add('actlect');
                currentLec.classList.remove('actlect');
                currentLec = e.target;
            }
            else if (e.target.parentNode.classList.contains("lec")) {
                lecName.innerHTML = lecListLecName[e.target.parentNode.dataset.index].innerText;
                e.target.parentNode.classList.add('actlect');
                currentLec.classList.remove('actlect');
                currentLec = e.target.parentNode;
            }

        });

        nextBtn.addEventListener('click', function () {
            if (parseInt(currentLec.dataset.index) + 1 === lec.length) {
            }
            else {
                console.log(parseInt(currentLec.dataset.index) + 1);
                lec[parseInt(currentLec.dataset.index) + 1].click();
            }

        });

        backBtn.addEventListener('click', function () {
            if (parseInt(currentLec.dataset.index) - 1 === -1) {
            }
            else {
                console.log(parseInt(currentLec.dataset.index) - 1);
                lec[parseInt(currentLec.dataset.index) - 1].click();
            }

        });
    }





    createList(obj[key].lecArr);
    //console.log(obj[key].lecArr);
})();