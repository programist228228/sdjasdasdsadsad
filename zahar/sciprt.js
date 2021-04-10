const leftArrow = document.getElementsByClassName('arrow left')[0];
const rightArrow = document.getElementsByClassName('arrow right')[0];

const slide = document.getElementsByClassName('slide');
const dotsArea = document.querySelector('.dots');
const dots = document.getElementsByClassName('dot');
const slides = document.getElementsByClassName('slide');

let = index = 0;

function  showSlide(i){
    for (let j = 0; j < slides.length; j++) {
     slides[j].classList.remove('active')
    }
    slides[i].classList.add('active')
    index = i;
     dots[index].checked = true;
 }

    

leftArrow.addEventListener('click', () => {
let currentIndex = index === 0 ? slides.length - 1 : index - 1;
showSlide(currentIndex);
})

rightArrow.addEventListener('click', () => {
    let currentIndex = index === slides.length - 1 ? 0 : index + 1;
    showSlide(currentIndex);
    })



    dotsArea.addEventListener('click', (e) => {
        for (let i = 0; i < dots.length; i++) {
            if (dots[i] === e.target) {
                showSlide(i);
                break;
            }
        }
    })

    setInterval(() => {

   let currentIndex = index === slides.length - 1 ? 0 : index + 1;
   showSlide(currentIndex);    
   }, 15000);