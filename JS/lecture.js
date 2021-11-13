
obj = {
    0 : {
        '0': {
            img: "images/flower.jpg",
            name: "어드벤처 디자인",
            price: 5000,
            star: 5,
        },
        '1': {
            img: "images/flower.jpg",
            name: "꽃을 심어봐요",
            price: 5000,
            star: 4,
        },
        '2': {
            img: "images/flower.jpg",
            name: "꽃을 심어봐요",
            price: 5000,
            star: 3,
        },
        '3': {
            img: "images/flower.jpg",
            name: "꽃을 심어봐요",
            price: 5000,
            star: 2,
        },
        '4': {
            img: "images/flower.jpg",
            name: "꽃을 심어봐요",
            price: 5000,
            star: 1,
        },
        '5': {
            img: "images/flower.jpg",
            name: "꽃을 심어봐요",
            price: 5000,
            star: 0,
        },
        '6': {
            img: "images/flower.jpg",
            name: "꽃을 심어봐요",
            price: 5000,
            star: 5,
        },
        '7': {
            img: "images/flower.jpg",
            name: "꽃을 심어봐요",
            price: 5000,
            star: 5,
        },
        '8': {
            img: "images/flower.jpg",
            name: "꽃을 심어봐요",
            price: 5000,
            star: 4,
        },
        '9': {
            img: "images/flower.jpg",
            name: "꽃을 심어봐요",
            price: 5000,
            star: 5,
        },
        '10': {
            img: "images/flower.jpg",
            name: "꽃을 심어봐요",
            price: 5000,
            star: 5,
        },
    },
    1 : {
        '0': {
            img: "images/flower.jpg",
            name: "꽃을 심어봐요",
            progress: 15, // 15일 남음
        },
        '1': {
            img: "images/flower.jpg",
            name: "꽃을 심어봐요",
            progress: 25,
        },
        '2': {
            img: "images/flower.jpg",
            name: "꽃을 심어봐요",
            progress: 5,
        },
        '3': {
            img: "images/flower.jpg",
            name: "꽃을 심어봐요",
            progress: 4,
        },
        '4': {
            img: "images/flower.jpg",
            name: "꽃을 심어봐요",
            progress: 20,
        },
        '5': {
            img: "images/flower.jpg",
            name: "꽃을 심어봐요",
            progress: 7,
        },
        '6': {
            img: "images/flower.jpg",
            name: "꽃을 심어봐요",
            progress: 10,
        },
        '7': {
            img: "images/flower.jpg",
            name: "꽃을 심어봐요",
            progress: 3,
        },
        '8': {
            img: "images/flower.jpg",
            name: "꽃을 심어봐요",
            progress: 21,
        },
        '9': {
            img: "images/flower.jpg",
            name: "꽃을 심어봐요",
            progress: 12,
        },
        '10': {
            img: "images/flower.jpg",
            name: "꽃을 심어봐요",
            progress: 15,
        },
    }
}

const primary = document.querySelector('.primary');

function createLec(obj, str) {
    const lecContainer = document.createElement('div');
    lecContainer.classList.add('lecContainer');

    const lecListName = document.createElement('div');
    lecListName.classList.add('lecListName');
    lecListName.innerHTML = "# " + str +" "+`<i class="fas fa-chevron-right"></i>`;
    lecListName.style.fontWeight = 'bolder';

    // 리스트 이름 클릭 이벤트
    lecListName.addEventListener('click', function() {
        localStorage.setItem('obj', JSON.stringify(obj));
        localStorage.setItem('titleName', str);
        location.href = 'lectureList.html';
    });


    const lecList = document.createElement('div');
    lecList.classList.add('lecList');

    for (key in obj[0]) {
        const lec = document.createElement('div');
        lec.classList.add('lec');
        lec.dataset.key = key;

        const lecImg = document.createElement('div');
        lecImg.classList.add('lecImg');
        lecImg.style.backgroundImage = "url(" + obj[0][key].img + ")";


        const lecDesc = document.createElement('div');
        lecDesc.classList.add('lecDesc');

        const lectName = document.createElement('div');
        lectName.classList.add('lectName');
        lectName.innerHTML = obj[0][key].name;
        lecDesc.appendChild(lectName);

        const lectStar = document.createElement('div');
        lectStar.classList.add('lectStar');
        lecDesc.appendChild(lectStar);
        for (let i = 0; i < obj[0][key].star; i++) {   // 별 숫자만큼
            lectStar.insertAdjacentHTML("beforeend", `<i class="fas fa-star"></i>`);
        }
        for (let i = 0; i < 5 - obj[0][key].star; i++) {   // 별 숫자만큼
            lectStar.insertAdjacentHTML("beforeend", `<i class="far fa-star"></i>`);
        }


        const lecPrice = document.createElement('div');
        lecPrice.classList.add('lecPrice');
        lecPrice.innerHTML = "₩ " + obj[0][key].price;

        
        lecDesc.appendChild(lecPrice);
        lec.appendChild(lecImg);
        lec.appendChild(lecDesc);
        lecList.appendChild(lec);

        lec.addEventListener('click', function(e) {
    
    
            //console.log(e.target.parentNode);
            console.log(obj[0]);
            if (e.target.parentNode.classList.contains('lec') ) {
                console.log(e.target.parentNode.dataset.key);
                localStorage.setItem('key', e.target.parentNode.dataset.key);
            }
            else if (e.target.parentNode.classList.contains('lecDesc')) {
                console.log(e.target.parentNode.parentNode.dataset.key);
                localStorage.setItem('key', e.target.parentNode.parentNode.dataset.key);
            }
            else if (e.target.parentNode.classList.contains('lectStar')) {
                console.log(e.target.parentNode.parentNode.parentNode.dataset.key);
                localStorage.setItem('key', e.target.parentNode.parentNode.parentNode.dataset.key);
            }
            //console.log(e.currentTarget.dataset.flag);
            localStorage.setItem('obj', JSON.stringify(obj[0]));
            location.href = 'signUp.html';
        });
    }


    lecContainer.appendChild(lecListName);
    lecContainer.appendChild(lecList);
    primary.appendChild(lecContainer);

}



createLec(obj, "프로그래밍");
createLec(obj, "공예");
createLec(obj, "언어");


// 슬라이드 이벤트
const lecList = document.querySelector('.lecList');
let isMouseDown = false;
let startX, scrollLeft;

lecList.addEventListener('mousedown', (e) => {
    isMouseDown = true;
    lecList.classList.add('active');

    startX = e.pageX - lecList.offsetLeft;
    scrollLeft = lecList.scrollLeft;
});

lecList.addEventListener('mouseleave', () => {
    isMouseDown = false;
    lecList.classList.remove('active');
});

lecList.addEventListener('mouseup', () => {
    isMouseDown = false;
    lecList.classList.remove('active');
});

lecList.addEventListener('mousemove', (e) => {
    if (!isMouseDown) return;

    e.preventDefault();
    const x = e.pageX - lecList.offsetLeft;
    const walk = (x - startX) * 1;
    lecList.scrollLeft = scrollLeft - walk;
});



