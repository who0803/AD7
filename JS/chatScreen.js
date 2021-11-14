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

const teacherSay = ['무슨일이니?', '그럼 처음접하는 수강생들도 쉽게 따라갈 수 있도록 강의를 구성해놓았단다.', '그래 공부 열심히 하렴~'];
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
