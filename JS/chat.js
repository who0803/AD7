(() => {
    obj = {
        '0': {
            img: "images/pro/1.png",
            lecName: "프로그래밍?파이썬으로 시작!",
            teacher: "이민규"
        },
        '1': {
            img: "images/rare/5.jpg",
            lecName: "카페사장의 바리스타 특강",
            teacher: "김민수"
        },
        '2': {
            img: "images/rare/8.jpg",
            lecName: "토익독학으로 990점달성, 노하우공유!",
            teacher: "정토익"
        },
        '3': {
            img: "images/pro/9.png",
            lecName: "신부자의 c#기초 강의",
            teacher: "신부자"
        },
        '4': {
            img: "images/rare/9.jpg",
            lecName: "과거 대기업 면접관의 자기소개특강",
            teacher: "유삼성"
        },
        '5': {
            img: "images/pro/10.png",
            lecName: "비전공자들을 위한 JS클래스!",
            teacher: "박여사"
        },

    }

    const primary = document.querySelector('.primary');
    const arrow = document.querySelector('.arrow');

    const option1 = document.querySelector('.option1');
    const option2 = document.querySelector('.option2');

    const websiteTitle = document.querySelector('.website-title');

    let flag = true;

    arrow.addEventListener('click', function () {
        location.href = 'index.html';
    });

    option1.addEventListener('click', function () {
        websiteTitle.innerHTML = '채 팅';
        option1.classList.add('actBorderBot');
        option2.classList.remove('actBorderBot');
        primary.innerHTML = '';
        createChat(obj, flag);
        flag = false;
    });

    option2.addEventListener('click', function () {
        websiteTitle.innerHTML = '커뮤니티';
        option1.classList.remove('actBorderBot');
        option2.classList.add('actBorderBot');
        primary.innerHTML = '';
        createChat(obj, flag);
        flag = true;
    });
    option1.click();

    

    function createChat(obj, flag) {
        const chatContainer = document.createElement('div');
        chatContainer.classList.add('chatContainer');

        const chatList = document.createElement('div');
        chatList.classList.add('chatList');

        for (key in obj) {
            const chat = document.createElement('div');
            chat.classList.add('chat');
            chat.dataset.key = key;

            const chatImg = document.createElement('div');
            chatImg.classList.add('chatImg');
            chatImg.style.backgroundImage = "url(" + obj[key].img + ")";


            const chatDesc = document.createElement('div');
            chatDesc.classList.add('chatDesc');

            const chatLecName = document.createElement('div');
            chatLecName.classList.add('chatLecName');
            chatLecName.innerHTML = obj[key].lecName;

            const chatTeacherName = document.createElement('div');
            chatTeacherName.classList.add('chatTeacherName');
            chatTeacherName.innerHTML = obj[key].teacher;

            chatDesc.appendChild(chatLecName);
            chatDesc.appendChild(chatTeacherName);
            chat.appendChild(chatImg);
            chat.appendChild(chatDesc);
            chatList.appendChild(chat);

            chat.addEventListener('click', function () {
                // 나중에 시간 나면 구현
                if (flag) { // 채팅
                    localStorage.setItem('teacherName', obj[chat.dataset.key].teacher);
                    location.href = 'chatScreen.html';
                }
                else {
                    localStorage.setItem('lecName', obj[chat.dataset.key].lecName);
                    location.href = 'community.html';
                }
            });


        }


        chatContainer.appendChild(chatList);
        primary.appendChild(chatContainer);

    }
    
})();

