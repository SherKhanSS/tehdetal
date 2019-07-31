window.mySwipe = new Swipe(document.querySelector('.slider'), {
    startSlide: 0,
    speed: 600,
    continuous: true,
    disableScroll: false,
    stopPropagation: false,
    callback: function(index, elem) {},
    transitionEnd: function(index, elem) {}
});

document.querySelector('.btn-prev').addEventListener('click', function () {
    mySwipe.prev();
});

document.querySelector('.btn-next').addEventListener('click', function () {
    mySwipe.next();
});
