const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);
const huhu = $('html')
const li = $$('li')
const hihi = $('.music')

huhu.onclick = function () {
    hihi.play();
}
li.onclick = function () {
    hihi.play();
}
huhu.onscroll = function () {
    hihi.play();
}
document.onscroll = function () {
    hihi.play();
}
huhu.onwheel = function () {
    hihi.play();
}
li.onwheel = function () {
    hihi.play();
}

huhu.onmouseup = function () {
    hihi.play();
}
li.onmouseup = function () {
    hihi.play();
}
huhu.onmouseover = function () {
    hihi.play();
}
document.onmouseover = function () {
    hihi.play();
}


