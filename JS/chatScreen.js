const primaryFrame = document.querySelector('.primaryFrame');
const primary = document.querySelector('.primary');
const arrow = document.querySelector('.arrow');
const btn = document.querySelector('.mainchatt');
const textarea = document.querySelector('textarea');
const teacherName = localStorage.getItem('teacherName');
const websiteTitle = document.querySelector('.website-title');
websiteTitle.innerHTML = teacherName;

arrow.addEventListener('click', function () {
    location.href = 'chat.html';
});

let flag = 0;

const teacherSay = ['그래 안녕~', '무슨 일이니?', '아 그거는 이렇게 하는거야'];
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
            if (flag == 3) {
                flag = 0;
            }

            primary.scrollTop = primary.scrollHeight;
        }, 1000);

        primary.scrollTop = primary.scrollHeight;
    }

});
