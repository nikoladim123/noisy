var servicesAnimTopContainer = document.getElementsByClassName('servicesAnimTopContainer');
var servicescirc = document.getElementsByClassName('servicescirc');
var servicesImg = document.getElementsByClassName('servicesImg');

// headerBG double hover header
var headerBG = document.getElementsByClassName('headerBG');
function headerBGFun() {
  headerBG[0].style.filter = 'brightness(1)'
}

// services
function servicesBrightnesFun() {
  if (servicesAnimTopContainer[0].getClientRects()[0].top < -window.innerHeight / 100 * 1) {
    servicescirc[0].style.filter = 'brightness(1)';
    servicesImg[0].style.filter = 'brightness(1)';
  } else {
    servicescirc[0].style.filter = 'brightness(0)';
    servicesImg[0].style.filter = 'brightness(0)';
  }
}

// carousel three
var carouselThree = document.getElementById('carouselThree');
var carThreeLeftArrow = document.getElementById('carThreeLeftArrow');
var carThreeRightArrow = document.getElementById('carThreeRightArrow');
carThreeLeftArrow.addEventListener('click', function() {
  leftArrowThree();
  console.log('do i work?');
});
carThreeRightArrow.addEventListener('click', function() {
  rightArrowThree();
  console.log('do i work?');
});
var moduloThree = 1002;

function leftArrowThree() {
  moduloThree--;
  carMoveThree();
}

function rightArrowThree() {
  moduloThree++;
  carMoveThree();
}

function carMoveThree() {
  if (moduloThree % 2 === 0) {
    carouselThree.style.left = '0%'
  }
  if (moduloThree % 2 === 1) {
    carouselThree.style.left = '-50%'
  }
}


// OP UP SERVICES
var servicesPopUpContainer = document.getElementsByClassName('servicesPopUpContainer');
var popUpScrollableContainer = document.getElementsByClassName('popUpScrollableContainer');
var srvImages = document.getElementsByClassName('srvImages');
var lastImagePopup = document.getElementsByClassName('lastImagePopup');
var imagePopup = document.getElementsByClassName('imagePopup');
// imagePopup[3].scrollIntoView({block: "start",behavior:'smooth'})
// srvImages[0].dataset.srvimg
// popUpScrollableContainer[0].scrollBy(0,-5)

for (var i = 0; i < srvImages.length; i++) {
  srvImages[i].addEventListener('click',(e)=>{
    servicesPopUpContainer[0].style.top = "0%";
    setTimeout(function () {
      imagePopup[e.target.dataset.srvimg].scrollIntoView({block: "start",behavior:'smooth'});
    }, 1500);
  });
}

servicesPopUpContainer[0].addEventListener('click',()=>{
  servicesPopUpContainer[0].style.top = "-100%";
});

function popUpCloseOnScroll() {
  if (lastImagePopup[0].getClientRects()[0].bottom - popUpScrollableContainer[0].offsetHeight < 1 ) {
    servicesPopUpContainer[0].style.top = "-100%";
    popUpScrollableContainer[0].scrollBy(0,-5);
    console.log(123);
  }
}

popUpScrollableContainer[0].addEventListener('scroll', () => {
  popUpCloseOnScroll();
  // console.log(123);
});








window.addEventListener('scroll', () => {
  servicesBrightnesFun();
});

window.addEventListener('load', () => {
  headerBGFun();
});
