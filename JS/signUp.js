(() => {
    const lectureDesc = document.querySelector('.lectureDesc');
    const teacherDesc = document.querySelector('.teacherDesc');
    const feedback = document.querySelector('.feedback');
    const obj = JSON.parse(localStorage.getItem('obj'));
    const key = localStorage.getItem('key');
    const lecName = document.querySelector('.lecName');
    const lecPrice = document.querySelector('.lecPrice');
    console.log(obj);
    console.log(key);
    lecName.innerHTML = obj[key].name;
    lecPrice.innerHTML = "₩ " + obj[key].price;

    const bin = document.querySelector('.bin');

    const evalObj = {
        '0': '재밌습니다.',
        '1': '정말 유익해요',
        '2': '강사님 최고의 강의입니다',
        '3': '다음 강의가 기다려져요!',
        '4': '돈이 아깝지 않은 강의예요',
        '5': '가성비 최고',
        '6': '재밌습니다.',
        '7': '정말 유익해요',
        '8': '강사님 최고의 강의입니다',
        '9': '다음 강의가 기다려져요!',
        '10': '돈이 아깝지 않은 강의예요',
        '11': '가성비 최고',
    };

    lectureDesc.addEventListener('click', function () {
        lectureDesc.classList.add('act');
        teacherDesc.classList.remove('act');
        feedback.classList.remove('act');
        bin.innerHTML = '';

        if (obj[key].badge) {
            const certification = document.createElement('div');
            certification.classList.add('certification');
            bin.appendChild(certification);
        }

        const desc = document.createElement('div');
        desc.classList.add('desc');
        desc.innerHTML = 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sed mollitia obcaecati, nemo in recusandae itaque accusamus dolorum ipsum autem quibusdam est enim, fuga repudiandae aliquam hic nesciunt ducimus voluptatem nihil. Perspiciatis pariatur voluptate sint consequuntur aliquam, totam, nesciunt ea facere, quasi cumque maxime id enim ratione nobis necessitatibus delectus! Animi?Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sed mollitia obcaecati, nemo in recusandae itaque accusamus dolorum ipsum autem quibusdam est enim, fuga repudiandae aliquam hic nesciunt ducimus voluptatem nihil. Perspiciatis pariatur voluptate sint consequuntur aliquam, totam, nesciunt ea facere, quasi cumque maxime id enim ratione nobis necessitatibus delectus! Animi?Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sed mollitia obcaecati, nemo in recusandae itaque accusamus dolorum ipsum autem quibusdam est enim, fuga repudiandae aliquam hic nesciunt ducimus voluptatem nihil. Perspiciatis pariatur voluptate sint consequuntur aliquam, totam, nesciunt ea facere, quasi cumque maxime id enim ratione nobis necessitatibus delectus! Animi?Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sed mollitia obcaecati, nemo in recusandae itaque accusamus dolorum ipsum autem quibusdam est enim, fuga repudiandae aliquam hic nesciunt ducimus voluptatem nihil. Perspiciatis pariatur voluptate sint consequuntur aliquam, totam, nesciunt ea facere, quasi cumque maxime id enim ratione nobis necessitatibus delectus! Animi?';
        bin.appendChild(desc);
    });
    teacherDesc.addEventListener('click', function () {
        teacherDesc.classList.add('act');
        lectureDesc.classList.remove('act');
        feedback.classList.remove('act');

        bin.innerHTML = '';
        const desc = document.createElement('div');
        desc.classList.add('desc');
        desc.innerHTML = 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sed mollitia obcaecati, nemo in recusandae itaque accusamus dolorum ipsum autem quibusdam est enim, fuga repudiandae aliquam hic nesciunt ducimus voluptatem nihil. Perspiciatis pariatur voluptate sint consequuntur aliquam, totam, nesciunt ea facere, quasi cumque maxime id enim ratione nobis necessitatibus delectus! Animi?Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sed mollitia obcaecati, nemo in recusandae itaque accusamus dolorum ipsum autem quibusdam est enim, fuga repudiandae aliquam hic nesciunt ducimus voluptatem nihil. Perspiciatis pariatur voluptate sint consequuntur aliquam, totam, nesciunt ea facere, quasi cumque maxime id enim ratione nobis necessitatibus delectus! Animi?Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sed mollitia obcaecati, nemo in recusandae itaque accusamus dolorum ipsum autem quibusdam est enim, fuga repudiandae aliquam hic nesciunt ducimus voluptatem nihil. Perspiciatis pariatur voluptate sint consequuntur aliquam, totam, nesciunt ea facere, quasi cumque maxime id enim ratione nobis necessitatibus delectus! Animi?Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sed mollitia obcaecati, nemo in recusandae itaque accusamus dolorum ipsum autem quibusdam est enim, fuga repudiandae aliquam hic nesciunt ducimus voluptatem nihil. Perspiciatis pariatur voluptate sint consequuntur aliquam, totam, nesciunt ea facere, quasi cumque maxime id enim ratione nobis necessitatibus delectus! Animi?';
        bin.appendChild(desc);
    });
    feedback.addEventListener('click', function () {
        feedback.classList.add('act');
        teacherDesc.classList.remove('act');
        lectureDesc.classList.remove('act');

        bin.innerHTML = '';
        for (let key in evalObj) {
            const evaluation = document.createElement('div');
            evaluation.classList.add('evaluation');
            evaluation.innerHTML = evalObj[key];
            bin.appendChild(evaluation);
        }

    });

    const arrow = document.querySelector('.arrow');


    arrow.addEventListener('click', function () {
        location.href = 'index.html';
    });

    lectureDesc.click();
})();