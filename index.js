let destinaton =document.querySelector('.destination')
let crew =document.querySelector('.crew')
let active=document.querySelector('.active')
let bodyText=document.querySelector('.body-text')
let container=document.querySelector('.container')
const block2=document.querySelector('.block2')
const blockText =document.querySelector('.block01-text')
const moonBtn=document.querySelector('.moonBtn')
const marsBtn=document.querySelector('.marsBtn')
const europaBtn=document.querySelector('.europaBtn')
const titanBtn=document.querySelector('.titanBtn')
let moon=document.querySelector('.block2-container')
let mars=document.querySelector('.block3-container')
let europa=document.querySelector('.block4-container')
let titan=document.querySelector('.block5-container')
let carousel=document.querySelector('.carousel')
let technolgyBtn=document.querySelector('.technolgyBtn')
destinaton.addEventListener('click',function(){
  bodyText.style.display='none'
  container.classList.add('des')
  block2.style.display='block'
  moon.style.display='flex'
  mars.style.display='none'
  titan.style.display='none'
  container.classList.remove('cre')
  blockText.style.display='none'
  carousel.style.display='none'
  container.classList.remove('tech')

})
active.addEventListener('click',function(){
    bodyText.style.display='flex' 
    container.classList.remove('des')
    block2.style.display='none'
    mars.style.display='none'
    moon.style.display='none'
    europa.style.display='none'
    titan.style.display='none'
    container.classList.remove('cre')
    blockText.style.display='none'
    carousel.style.display='none'
    container.classList.remove('tech')

})
moonBtn.addEventListener('click',function(){
  moon.style.display='flex'
  mars.style.display='none'
  europa.style.display='none'
  titan.style.display='none'
})
marsBtn.addEventListener('click',function(){
  moon.style.display='none'
  mars.style.display='flex'
  europa.style.display='none'
  titan.style.display='none'
  carousel.style.display='none'
})

const liItems = document.querySelectorAll('.menus ul li');

liItems.forEach(li => {
  li.addEventListener('click', function() {

    liItems.forEach(item => {
      item.classList.remove('clicked');
    });
    this.classList.add('clicked');
  });
});
europaBtn.addEventListener('click',function(){
  europa.style.display='flex'
  mars.style.display='none'
  moon.style.display='none'
  titan.style.display='none'
  carousel.style.display='none'
})
titanBtn.addEventListener('click',function(){
  europa.style.display='none'
  mars.style.display='none'
  moon.style.display='none'
  titan.style.display='flex'
  carousel.style.display='none'
})
crew.addEventListener('click',function(){
  container.classList.add('cre')
  mars.style.display='none'
  titan.style.display='none'
  europa.style.display='none'
  block2.style.display='none'
  bodyText.style.display='none' 
  blockText.style.display='block'
  carousel.style.display='block'
  container.classList.remove('tech')
})
technolgyBtn.addEventListener('click',function(){
  container.classList.add('tech')
  container.classList.remove('cre')
  mars.style.display='none'
  titan.style.display='none'
  europa.style.display='none'
  block2.style.display='none'
  bodyText.style.display='none' 
  blockText.style.display='block'
  carousel.style.display='none'
})
const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.dot');
let currentSlideIndex = 0;
let intervalId;

function showSlide(index) {
  const previousSlideIndex = currentSlideIndex;
  currentSlideIndex = index;

  slides[previousSlideIndex].classList.remove('active-slide');
  slides[currentSlideIndex].classList.add('active-slide');

  dots[previousSlideIndex].classList.remove('active-dot');
  dots[currentSlideIndex].classList.add('active-dot');
}

function showNextSlide() {
  const nextSlideIndex = (currentSlideIndex + 1) % slides.length;
  showSlide(nextSlideIndex);
  slides[nextSlideIndex].classList.add('fade-in');
}

dots.forEach((dot, index) => {
  dot.addEventListener('click', () => {
    clearInterval(intervalId);

    slides.forEach(slide => slide.classList.remove('fade-in'));
    showSlide(index);

    intervalId = setInterval(showNextSlide, 5000);
  });
});

intervalId = setInterval(showNextSlide, 5000);