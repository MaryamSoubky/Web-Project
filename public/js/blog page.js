document.addEventListener('DOMContentLoaded', function () {
    var fantasySwiper = new Swiper('.fantasy-swiper', {
        slidesPerView: 1,
        spaceBetween: 20,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        breakpoints: {
            640: {
                slidesPerView: 1,
                spaceBetween: 20,
            },
            768: {
                slidesPerView: 2,
                spaceBetween: 20,
            },
            1024: {
                slidesPerView: 3,
                spaceBetween: 20,
            },
        },
    });
    var memoirSwiper = new Swiper('.memoir-swiper', {
        slidesPerView: 1,
        spaceBetween: 20,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        breakpoints: {
            640: {
                slidesPerView: 1,
                spaceBetween: 20,
            },
            768: {
                slidesPerView: 2,
                spaceBetween: 20,
            },
            1024: {
                slidesPerView: 3,
                spaceBetween: 20,
            },
        },
    });

    document.querySelectorAll('.readMore').forEach(function (button) {
        button.addEventListener('click', function (e) {
            e.preventDefault();
            var details = this.parentNode;
            var paragraph = details.querySelector('.hiddenParagraph');
            var showLess = details.querySelector('.showLess');
            paragraph.style.display = 'block';
            this.style.display = 'none';
            showLess.style.display = 'inline';
        });
    });

    document.querySelectorAll('.showLess').forEach(function (button) {
        button.addEventListener('click', function (e) {
            e.preventDefault();
            var details = this.parentNode;
            var paragraph = details.querySelector('.hiddenParagraph');
            var readMore = details.querySelector('.readMore');
            paragraph.style.display = 'none';
            this.style.display = 'none';
            readMore.style.display = 'inline';
        });
    });
});
