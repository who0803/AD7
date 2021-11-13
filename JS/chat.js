const primary = document.querySelector('.primary');
        const arrow = document.querySelector('.arrow');
        arrow.addEventListener('click', function () {
            location.href = 'index.html';
        });
        obj = {
            '0': {
                img: "images/flower.jpg",
                lecName: "꽃을 심어봐요",
                teacher: "홍길동"
            },
            '1': {
                img: "images/flower.jpg",
                lecName: "꽃을 심어봐요",
                teacher: "홍길동"
            },
            '2': {
                img: "images/flower.jpg",
                lecName: "꽃을 심어봐요",
                teacher: "홍길동"
            },
            '3': {
                img: "images/flower.jpg",
                lecName: "꽃을 심어봐요",
                teacher: "홍길동"
            },
            '4': {
                img: "images/flower.jpg",
                lecName: "꽃을 심어봐요",
                teacher: "홍길동"
            },
            '5': {
                img: "images/flower.jpg",
                lecName: "꽃을 심어봐요",
                teacher: "홍길동"
            },
            '6': {
                img: "images/flower.jpg",
                lecName: "꽃을 심어봐요",
                teacher: "홍길동"
            },
            '7': {
                img: "images/flower.jpg",
                lecName: "꽃을 심어봐요",
                teacher: "홍길동"
            },
            '8': {
                img: "images/flower.jpg",
                lecName: "꽃을 심어봐요",
                teacher: "홍길동"
            },
            '9': {
                img: "images/flower.jpg",
                lecName: "꽃을 심어봐요",
                teacher: "홍길동"
            },
            '10': {
                img: "images/flower.jpg",
                lecName: "꽃을 심어봐요",
                teacher: "홍길동"
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
                    localStorage.setItem('teacherName', obj[key].teacher);
                    location.href = 'chatScreen.html';
                });

                
            }


            chatContainer.appendChild(chatList);
            primary.appendChild(chatContainer);

        }
        createChat(obj);