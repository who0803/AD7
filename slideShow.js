let curPos = 0;
let postion = 0;
let start_x, end_x;

const images = document.querySelector(".images");
const slideImg = document.querySelectorAll(".images img");
const album = document.querySelector(".album");
const albumWidth = getStyle(album, "width", "width");
const IMAGE_WIDTH = parseInt(albumWidth);
const imgOrder = document.querySelector(".imgOrder");
console.log(IMAGE_WIDTH);
let slideCount = slideImg.length;

images.addEventListener('touchstart', touch_start);
images.addEventListener('touchend', touch_end);

makeClone(); // 처음이미지와 마지막 이미지 복사 함수 
initfunction();

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
    images.style.left = postion + "px";
    imgOrder.innerHTML = `${curPos + 1}/${slideCount}`;
}



function prev() {
    
    if (curPos >= 0) {
        postion += IMAGE_WIDTH;
        images.style.left = postion + "px";
        //images.style.transform = `translateX(${postion}px)`;
        images.style.transition = `${0.5}s ease-out`;
    }
    if (curPos === 0) {
        setTimeout(function () {
            postion = -((slideCount) * IMAGE_WIDTH);
            images.style.left = postion + "px";
            //images.style.transform = `translateX(${postion}px)`;
            images.style.transition = `${0}s ease-out`;
        }, 500);
        curPos = slideCount;
    }
    curPos = curPos - 1;
    imgOrder.innerHTML = `${curPos + 1}/${slideCount}`;
}
function next() {
    if (curPos <= slideCount - 1) {
        postion -= IMAGE_WIDTH;
        images.style.left = postion + "px";
        //images.style.transform = `translateX(${postion}px)`;
        images.style.transition = `${0.5}s ease-out`;
    }
    if (curPos === slideCount - 1) {
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
