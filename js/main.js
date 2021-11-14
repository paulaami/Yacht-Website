const navBtn = document.querySelector('.burger-btn');
const nav = document.querySelector('.nav__items');
const navItems = document.querySelectorAll('.nav__item');
const navBtnBars = document.querySelector('.burger-btn__bars');
const allSections = document.querySelectorAll('.section');
const footerYear = document.querySelector('.footer__year');

const showMenu = () => {
 nav.classList.toggle('nav--active');

 navBtnBars.classList.remove('black-bars-color');

 navItems.forEach(item => {
  item.addEventListener('click', () => {
   nav.classList.remove('nav--active');
  })
 })

 animationMenu();
}

const animationMenu = () => {
 let delayTime = 0;

 navItems.forEach(item => {
  item.classList.toggle('nav-items-animation');
  item.style.animationDelay = '.' + delayTime + 's';
  delayTime++;
 })
}

const deleteAnimation = () => {
 navItems.forEach(item => {
  item.classList.remove('nav-items-animation');
 })
}

Array.from(navItems).forEach(item => {
 item.addEventListener('click', deleteAnimation)
});

const handleCurrentYear = () => {
 const year = (new Date).getFullYear();
 footerYear.innerText = ` ${year}`;
}

const handleObserver = () => {
 const currentSection = window.scrollY;
 allSections.forEach(section => {

  if (section.classList.contains('white-section') && section.offsetTop <= currentSection + 60) {
   navBtnBars.classList.add('black-bars-color');
  } else if (!section.classList.contains('white-section') && section.offsetTop <= currentSection + 60) {
   navBtnBars.classList.remove('black-bars-color');
  }

 })
}

handleCurrentYear();


navBtn.addEventListener('click', showMenu);
window.addEventListener('scroll', handleObserver);