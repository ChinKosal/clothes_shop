const carousel = document.querySelector(".carousel");

let isDragStart = false , prevPgaeX, preScrollLeft;

const draStart = (e) => {
    isDragStart = true;
    prevPgaeX = e.pageX;
    preScrollLeft = carousel.scrollLeft;
}
const dragging = (e) => {
    if(!isDragStart) return;
    e.preventDefault();
    let podotionDiff = e.pageX - prevPgaeX;
    carousel.scrollLeft = e.pageX - podotionDiff;
}
const dragstop = () => {
    isDragStart = false;
}
carousel.addEventListener("mousedown", draStart);
carousel.addEventListener("mousemove", dragging);
carousel.addEventListener("mouseup", dragstop);
