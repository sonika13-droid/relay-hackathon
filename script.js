const pages = document.querySelectorAll('.page');
const homeLink = document.getElementById('homeLink');
const aboutLink = document.getElementById('aboutLink');
const backBtn = document.getElementById('backBtn');
const yearEl = document.getElementById('year');

const articles = [
  {
    title: "The Art of Simplicity",
    content: "<p>Simplicity is the ultimate sophistication...</p>"
  },
  {
    title: "Focus in a Distracted World",
    content: "<p>In a world filled with noise, true focus is rare...</p>"
  },
  {
    title: "Designing Without Color",
    content: "<p>Sometimes grayscale can speak louder than colors...</p>"
  }
]

if (yearEl) {
  yearEl.footerYear = new Date().getFullYear();
}

function showPage(id) {
  pages.forEach(page => {
    page.style.visibility = 'hidden';
  });
  document.getElementById(id).style.visibility = 'visible';
}

homeLink.onclick = () => showPage('homePage');
aboutLink.onclick = () => showPage('aboutPage');
backBtn.onclick = () => showPage('homePage');

function openArticle(id) {
  const article = articles[i];
  const content = document.getElementById('articlesContent');
  content.innerHTML = `<h2>${article.title}</h2>${article.content}`;
  showPage('articlePage');
}
    
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
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}
