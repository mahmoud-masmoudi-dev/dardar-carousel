let slideIndex = 0;
const images = [
    "https://daradar-data.s3.eu-west-1.amazonaws.com/pictures/Moalla+immobili%C3%A8re/id%3D1267fe1195e3dcf48a06a3205e8b9e9593130d16/pic1.jpeg",
    "https://daradar-data.s3.eu-west-1.amazonaws.com/pictures/Moalla+immobili%C3%A8re/id%3D1267fe1195e3dcf48a06a3205e8b9e9593130d16/pic2.jpeg",
    "https://daradar-data.s3.eu-west-1.amazonaws.com/pictures/Moalla+immobili%C3%A8re/id%3D1267fe1195e3dcf48a06a3205e8b9e9593130d16/pic3.jpeg",
];

function showSlides() {
    let i;
    const slides = document.getElementsByClassName("carousel-images")[0];
    slides.innerHTML = ''; // Clear existing images
    for (i = 0; i < images.length; i++) {
        let img = document.createElement("img");
        img.src = images[i];
        slides.appendChild(img);
    }
    if (images.length > 0) {
        slides.children[slideIndex].style.display = "block";
    }
}

function moveSlide(n) {
    slideIndex += n;
    if (slideIndex >= images.length) { slideIndex = 0; }
    if (slideIndex < 0) { slideIndex = images.length - 1; }
    showSlides();
}

window.onload = () => {
    showSlides();
};
