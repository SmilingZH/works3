window.addEventListener('wheel', function (event) {
    if (event.deltaY > 0) {
        // 向下滚动，切换到下一个轮播图项目
        swiper.slideNext();
    } else if (event.deltaY < 0) {
        // 向上滚动，切换到上一个轮播图项目
        swiper.slidePrev();
    }
});
var swiper = new Swiper(".swiper", {
    direction: "vertical",
    loop: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
    }
});
swiper.on('slideChangeTransitionStart', function () {
    anime({
        targets: ".zuopin",
        translateY: [-60, 0],
        opacity: [0, 1],
        duration: 300,
        easing: 'easeInOutSine',
        delay: 200
    });
    anime({
        targets: ".slideInfo",
        translateX: [-60, 0],
        opacity: [0, 1],
        duration: 300,
        easing: 'easeInOutSine',
        delay: 500
    });
});


// 
let animation = anime({
    targets: "header",
    translateX: [180, 0],
    opacity: [0, 1],
    duration: 800,
    easing: 'easeInOutSine',
});

anime({
    targets: ".daohang",
    opacity: [0, 1],
    duration: 800,
    easing: 'easeInOutSine',
    delay: 300
});
anime({
    targets: ".socialIcon",
    opacity: [0, 1],
    duration: 800,
    easing: 'easeInOutSine',
    delay: 300
});

anime({
    targets: ".sideTitle",
    opacity: [0, 1],
    duration: 800,
    easing: 'easeInOutSine',
    delay: 300
});

anime({
    targets: ".slideInfo h2",
    translateY: [-50, 0],
    opacity: [0, 1],
    duration: 800,
    easing: 'easeInOutSine',
    delay: 500
});

anime({
    targets: ".slideInfo h1",
    scale: [1.2, 1],
    opacity: [0, 1],
    duration: 800,
    easing: 'easeInOutSine',
    delay: 500
});

anime({
    targets: ".slideInfo p",
    translateX: [100, 0],
    opacity: [0, 1],
    duration: 800,
    easing: 'easeInOutSine',
    delay: 500
});

anime({
    targets: ".slideInfo .gengduo",
    translateY: [60, 0],
    opacity: [0, 1],
    duration: 800,
    easing: 'easeInOutSine',
    delay: 500
});

anime({
    targets: ".zuopin",
    translateY: [100, 0],
    opacity: [0, 1],
    duration: 800,
    easing: 'easeInOutSine',
    delay: 800
});

anime({
    targets: ".zuopin img",
    translateY: [100, 0],
    opacity: [0, 1],
    duration: 800,
    easing: 'easeInOutSine',
    delay: 1000
});
document.addEventListener('DOMContentLoaded', function () {
    var qq = document.querySelector('.qq');
    var weixin = document.querySelector('.weixin');
    var bilibili = document.querySelector('.bilibili');
    var erweimaqq = document.querySelector('.erweimaqq');
    var erweimaweixin = document.querySelector('.erweimaweixin');
    var erweimabilibili = document.querySelector('.erweimabilibili');

    qq.addEventListener('mouseover', function () {
        erweimaqq.style.display = 'flex';
    });
    weixin.addEventListener('mouseover', function () {
        erweimaweixin.style.display = 'flex';
    });
    bilibili.addEventListener('mouseover', function () {
        erweimabilibili.style.display = 'flex';
    });

    qq.addEventListener('mouseout', function () {
        erweimaqq.style.display = 'none';
    });
    weixin.addEventListener('mouseout', function () {
        erweimaweixin.style.display = 'none';
    });
    bilibili.addEventListener('mouseout', function () {
        erweimabilibili.style.display = 'none';
    });
});