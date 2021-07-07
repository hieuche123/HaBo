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
