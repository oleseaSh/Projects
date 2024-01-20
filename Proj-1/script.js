let offsetLeft = 0;
const sliderContent = document.querySelector('.slider-wrapper');
const nextButton = document.querySelector('#next');
const prevButton = document.querySelector('#prev');

nextButton.addEventListener('click', () => {
     offsetLeft += 1140; // offsetLeft = offsetLeft + 256
    if(offsetLeft > 3420) {
        offsetLeft = 0;
    }
    sliderContent.style.left = -offsetLeft + 'px';
});

prevButton.addEventListener('click', ()=> {
    offsetLeft -= 1140;
    if(offsetLeft < 0) {
        offsetLeft = 3420;
    }
    sliderContent.style.left = -offsetLeft + 'px';
})