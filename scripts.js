function showBio(name, details) {
    document.getElementById('bioName').textContent = name;
    document.getElementById('bioDetails').textContent = details;
    document.getElementById('bioOverlay').style.display = 'flex';
}

function closeBio() {
    document.getElementById('bioOverlay').style.display = 'none';
}

function showPhoto(title, description, imageUrl) {
    document.getElementById('photoTitle').textContent = title;
    document.getElementById('photoDescription').textContent = description;
    document.getElementById('photoImage').src = imageUrl;
    document.getElementById('photoOverlay').style.display = 'flex';
}

function closePhoto() {
    document.getElementById('photoOverlay').style.display = 'none';
}

// Slideshow JavaScript
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) {slideIndex = 1}    
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";  
    dots[slideIndex-1].className += " active";
}
