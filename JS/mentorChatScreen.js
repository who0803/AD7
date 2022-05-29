(() => {
    const primaryFrame = document.querySelector('.primaryFrame');
    const primary = document.querySelector('.primary');
    const arrow = document.querySelector('.arrow');
    const btn = document.querySelector('.mainbtn');
    const textarea = document.querySelector('textarea');
    const teacherName = localStorage.getItem('teacherName');
    const websiteTitle = document.querySelector('.website-title');
    websiteTitle.innerHTML = teacherName;

    arrow.addEventListener('click', function () {
        location.href = 'mentorChatList.html';
    });

    let flag = 0;
    let teacherSay = JSON.parse(localStorage.getItem('userSay'));

    const chatBox = document.createElement('div');
    chatBox.classList.add('teacherChatBox');
    chatBox.innerHTML = teacherSay[flag];
    primaryFrame.appendChild(chatBox);
    flag++;

    primary.scrollTop = primary.scrollHeight;

    btn.addEventListener('click', function () {
        if (textarea.value !== '') {
            const text = textarea.value;
            textarea.value = ''

            const chatBox = document.createElement('div');
            chatBox.classList.add('chatBox');
            chatBox.innerHTML = text;
            primaryFrame.appendChild(chatBox);


            setTimeout(function () {
                const chatBox = document.createElement('div');
                chatBox.classList.add('teacherChatBox');
                chatBox.innerHTML = teacherSay[flag];
                primaryFrame.appendChild(chatBox);
                flag++;
                if (flag == teacherSay.length) {
                    flag = 0;
                }

                primary.scrollTop = primary.scrollHeight;
            }, 1000);

            primary.scrollTop = primary.scrollHeight;
        }

    });
})();

