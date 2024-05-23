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
let lastContainer=document.querySelector('.lastContainer')
destinaton.addEventListener('click',function(){
  bodyText.style.display='none'
  container.classList.add('des')
  block2.style.display='block'
  container.classList.remove('hidden')
  moon.style.display='flex'
  mars.style.display='none'
  titan.style.display='none'
  container.classList.remove('cre')
  blockText.style.display='none'
  carousel.style.display='none'
  container.classList.remove('tech')
  lastContainer.style.display='none'
  document.body.style.backgroundImage='url(picture/background-destination-desktop.jpg)'


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
    lastContainer.style.display='none'
    document.body.style.backgroundImage='url(picture/background-home-desktop.jpg)'

        // Check if the .active section is displayed (based on its computed style)
        const activeDisplayStyle = window.getComputedStyle(active).getPropertyValue('display');
        if (activeDisplayStyle === 'flex' || activeDisplayStyle === 'block') {
            blockText.style.display = 'block'; // Return .block01-text to its normal position
        }

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
  lastContainer.style.display='none'
  document.body.style.backgroundImage='url(picture/background-crew-desktop.jpg)'
})
technolgyBtn.addEventListener('click',function(){
  container.classList.add('tech')
  container.classList.remove('cre')
  mars.style.display='none'
  titan.style.display='none'
  europa.style.display='none'
  block2.style.display='none'
  bodyText.style.display='none' 
  carousel.style.display='none'
  blockText.style.display='none'
  lastContainer.style.display='block'
  document.body.style.backgroundImage='  url(picture/background-technology-desktop.jpg'
})
const lastItems = document.querySelectorAll('.menuLast li');

lastItems.forEach(li => {
  li.addEventListener('click', function() {

    lastItems.forEach(items => {
      items.classList.remove('clicked');
     
    });
    this.classList.add('clicked');
  });
});


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
const option1=document.querySelector('.option1')
const option2=document.querySelector('.option2')
const option3=document.querySelector('.option3')
const launch=document.querySelector('.launch')
const launch2=document.querySelector('.launch2')
const launch3=document.querySelector('.launch3')

option2.addEventListener('click',function(){
 launch.style.display='none'
 launch2.style.display='flex'
 launch3.style.display='none'
})
option1.addEventListener('click',function(){
  launch.style.display='flex'
  launch2.style.display='none'
  launch3.style.display='none'
 })
 option3.addEventListener('click',function(){
  launch.style.display='none'
  launch3.style.display='flex'
  launch2.style.display='none'
 })