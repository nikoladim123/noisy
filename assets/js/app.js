var servicesAnimTopContainer = document.getElementsByClassName('servicesAnimTopContainer');
var servicescirc = document.getElementsByClassName('servicescirc');
var servicesImg = document.getElementsByClassName('servicesImg');

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

window.addEventListener('scroll', () => {
  servicesBrightnesFun();
});
