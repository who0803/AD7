

(() => {
    const demandlecDesc = document.querySelector('.demandlecDesc');
    const demandteacherDesc = document.querySelector('.demandteacherDesc');
    const obj = JSON.parse(localStorage.getItem('obj'));
    const key = localStorage.getItem('key');

    const lecName = document.querySelector('.lecName');
    const demandDay = document.querySelector('.demandDay');
    console.log(obj);
    console.log(key);
    lecName.innerHTML = obj[key].name;
    demandDay.innerHTML = "D - " + obj[key].progress;

    const demandBtn = document.querySelector('.fa-check');
    const input = document.querySelector('input');

    const bin = document.querySelector('.bin');

    demandBtn.addEventListener('click', function () {
        input.value = '';
    });

    demandlecDesc.addEventListener('click', function () {
        demandlecDesc.classList.add('act');
        demandteacherDesc.classList.remove('act');

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
    demandteacherDesc.addEventListener('click', function () {
        demandteacherDesc.classList.add('act');
        demandlecDesc.classList.remove('act');

        bin.innerHTML = '';
        const desc = document.createElement('div');
        desc.classList.add('desc');
        desc.innerHTML = 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sed mollitia obcaecati, nemo in recusandae itaque accusamus dolorum ipsum autem quibusdam est enim, fuga repudiandae aliquam hic nesciunt ducimus voluptatem nihil. Perspiciatis pariatur voluptate sint consequuntur aliquam, totam, nesciunt ea facere, quasi cumque maxime id enim ratione nobis necessitatibus delectus! Animi?Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sed mollitia obcaecati, nemo in recusandae itaque accusamus dolorum ipsum autem quibusdam est enim, fuga repudiandae aliquam hic nesciunt ducimus voluptatem nihil. Perspiciatis pariatur voluptate sint consequuntur aliquam, totam, nesciunt ea facere, quasi cumque maxime id enim ratione nobis necessitatibus delectus! Animi?Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sed mollitia obcaecati, nemo in recusandae itaque accusamus dolorum ipsum autem quibusdam est enim, fuga repudiandae aliquam hic nesciunt ducimus voluptatem nihil. Perspiciatis pariatur voluptate sint consequuntur aliquam, totam, nesciunt ea facere, quasi cumque maxime id enim ratione nobis necessitatibus delectus! Animi?Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sed mollitia obcaecati, nemo in recusandae itaque accusamus dolorum ipsum autem quibusdam est enim, fuga repudiandae aliquam hic nesciunt ducimus voluptatem nihil. Perspiciatis pariatur voluptate sint consequuntur aliquam, totam, nesciunt ea facere, quasi cumque maxime id enim ratione nobis necessitatibus delectus! Animi?';
        bin.appendChild(desc);
    });

    const arrow = document.querySelector('.arrow');


    arrow.addEventListener('click', function () {
        location.href = 'index.html';
    });

    demandlecDesc.click();
})();