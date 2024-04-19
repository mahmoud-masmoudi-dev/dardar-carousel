let slideIndex = 0;
const images = [
    "https://example.com/image1.jpg",
    "https://example.com/image2.jpg",
    "https://example.com/image3.jpg"
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
    setInterval(() => moveSlide(1), 3000); // Change image every 3 seconds
};
