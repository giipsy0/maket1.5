const slider = document.querySelector('.brands__swiper');

let mySwiper;

function mobileSlider() {
    if (window.innerWidth < 767 && slider.dataset.mobile == 'false') {
        mySwiper = new Swiper(slider, {
            slidesPerView: 1.3,
            spaceBetween: 16,
            wrapperClass: 'brands__swiper-wrapper',
            slideClass: 'brands__swiper-slide',
            pagination: {
                el: '.pagination',
                clickable: true,
            },
            breakpoints: {
                480: {
                    slidesPerView: 2,
                },

                720: {
                    slidesPerView: 3,
                }
            }
        });

        slider.dataset.mobile = 'true';
    }

    if (window.innerWidth > 767) {
        slider.dataset.mobile = 'false';
        
        if (slider.classList.contains('swiper-initialized')) {
         mySwiper.destroy();   
        }
        
    }
}

mobileSlider();

window.addEventListener('resize', () => {
    mobileSlider();
})

let slidesList = document.querySelector('.brands__swiper');
let showButton = document.querySelector('.brands__arrows-btn');

showButton.addEventListener ('click', function () {
    slidesList.classList.toggle('swiper-toggle')
    if(showButton.dataset.trigger == 'false'){
        showButton.textContent = 'Скрыть';
        showButton.style.marginTop = '30px';
        showButton.style.paddingBottom = '14px';
        showButton.dataset.trigger = true;
        showButton.classList.add('brands__arrows-btn--clicked');
    } else{
        showButton.textContent = showButton.dataset.text;
        showButton.style.marginTop = '8px';
        showButton.style.paddingBottom = '34px';
        showButton.dataset.trigger = false;
        showButton.classList.remove('brands__arrows-btn--clicked');
    } 
});