const $ = (v,el = document) => el.querySelector(v);
const $$ = (v,el = document) => el.querySelectorAll(v);
const carousel = $("#carousel");
const carouselItems = $$("img",carousel);
const prev = $("#prev");
const next = $("#next");
let currentIndex = 0;
let interval = setInterval(run,1000);
// let interval = mySetInterval(run,1000);
// why use this method can't achieve the desired effect?
// function mySetInterval(handler,time = 1000){
//     let timer = null;
//     const interval = () => {
//         handler();
//         timer = setTimeout(interval,time);
//     }
//     interval();
//     return {
//         clearMyInterval(){
//             clearTimeout(timer);
//         }
//     }
// }
function run(){
    currentIndex++;
    changeCarouselItem();
}
function changeCarouselItem(){
    if(currentIndex > carouselItems.length - 1){
        currentIndex = 0;
    }else if(currentIndex < 0){
        currentIndex = carouselItems.length - 1;
    }
    carousel.style.transform = `translateX(-${ currentIndex * 500 }px)`;
}
function resetInterval(){
    clearInterval(interval);
    interval = setInterval(run,1000);
    // interval.clearMyInterval();
    // interval = mySetInterval(run,1000);
}
prev.addEventListener("click",() => {
    currentIndex--;
    changeCarouselItem();
    resetInterval();
});
next.addEventListener("click",() => {
    currentIndex++;
    changeCarouselItem();
    resetInterval();
});