(() => {
    let curPos = 0;
    let postion = 0;
    let start_x, end_x;

    const images = document.querySelector(".images");   // 리스트
    const slideImg = document.querySelectorAll(".images img");  // 하나 하나의 노티스들의 배열
    const album = document.querySelector(".album"); // 뷰포트
    const albumWidth = getStyle(album, "width", "width");   // 뷰포트 넓이
    const IMAGE_WIDTH = parseInt(albumWidth);   // 뷰포트 넓이
    const imgOrder = document.querySelector(".imgOrder");
    //console.log(IMAGE_WIDTH);
    let slideCount = slideImg.length;   // 슬라이드 길이

    images.addEventListener('touchstart', touch_start);
    images.addEventListener('touchend', touch_end);

    makeClone(); // 처음이미지와 마지막 이미지 복사 함수 
    initfunction();

    // 스타일 얻어오는 함수
    function getStyle(elem, cssprop, cssprop2) {

        //IE
        if (elem.currentStyle) {
            return elem.currentStyle[cssprop];

            //다른 브라우저    
        } else if (document.defaultView && document.defaultView.getComputedStyle) {
            return document.defaultView.getComputedStyle(elem, null).getPropertyValue(cssprop2);

            //대비책    
        } else {
            return null;
        }
    }


    function makeClone() { //slideImg.firstElementChild.cloneNode(true); 
        let cloneSlide_first = slideImg[0].cloneNode(true);
        let cloneSlide_last = images.lastElementChild.cloneNode(true);
        images.append(cloneSlide_first);
        images.insertBefore(cloneSlide_last, images.firstElementChild);
        console.log(images);
    }

    function initfunction() {
        images.style.width = IMAGE_WIDTH * (slideCount + 2) + "px";
        postion = -IMAGE_WIDTH;
        //images.style.transform = `translateX(${postion}px)`;
        images.style.left = postion + "px"; // 앞에 마지막 거가 추가됐으니 처음에는 한칸 땡겨야지
        imgOrder.innerHTML = `${curPos + 1}/${slideCount}`;
    }


    // 이전으로
    function prev() {

        if (curPos >= 0) {
            postion += IMAGE_WIDTH; // 뷰포트만큼 이동
            images.style.left = postion + "px";
            //images.style.transform = `translateX(${postion}px)`;
            images.style.transition = `${0.5}s ease-out`;
        }
        if (curPos === 0) { // 현재 페이지가 앞부분에 추가한 마지막 이미지 다음거라면
            setTimeout(function () {    //0.5초동안 복사한 마지막 이미지에서, 진짜 마지막 위치로 이동 
                postion = -((slideCount) * IMAGE_WIDTH);
                images.style.left = postion + "px";
                //images.style.transform = `translateX(${postion}px)`;
                images.style.transition = `${0}s ease-out`;
            }, 500);
            curPos = slideCount;
        }
        curPos = curPos - 1;    // 현재 포지션이 몇 번째인지
        imgOrder.innerHTML = `${curPos + 1}/${slideCount}`;
    }
    // 다음으로
    function next() {
        if (curPos <= slideCount - 1) {
            postion -= IMAGE_WIDTH;
            images.style.left = postion + "px";
            //images.style.transform = `translateX(${postion}px)`;
            images.style.transition = `${0.5}s ease-out`;
        }
        if (curPos === slideCount - 1) {    // 현재 페이지가 뒷부분에 추가한 첫 이미지면 전거라면
            console.log('5');
            setTimeout(function () { //0.5초동안 복사한 첫번째 이미지에서, 진짜 첫번째 위치로 이동 
                postion = -IMAGE_WIDTH;
                console.log(postion);
                images.style.left = postion + "px";
                //images.style.transform = `translateX(${postion}px)`;
                images.style.transition = `${0}s ease-out`;
            }, 500);
            curPos = -1;
        }
        curPos = curPos + 1;
        imgOrder.innerHTML = `${curPos + 1}/${slideCount}`;
    }

    function touch_start(event) {
        start_x = event.touches[0].pageX
    }

    function touch_end(event) {
        end_x = event.changedTouches[0].pageX;
        if (start_x > end_x) {
            next();
        } else {
            prev();
        }
    }


})();