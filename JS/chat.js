const primary = document.querySelector('.primary');
        const arrow = document.querySelector('.arrow');
        arrow.addEventListener('click', function () {
            location.href = 'index.html';
        });
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

        function createChat(obj) {
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

                chat.addEventListener('click', function() {
                    // 나중에 시간 나면 구현
                    localStorage.setItem('teacherName', obj[chat.dataset.key].teacher);
                    location.href = 'chatScreen.html';
                });

                
            }


            chatContainer.appendChild(chatList);
            primary.appendChild(chatContainer);

        }
        createChat(obj);