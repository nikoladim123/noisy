var servicesAnimTopContainer = document.getElementsByClassName('servicesAnimTopContainer');
var servicescirc = document.getElementsByClassName('servicescirc');
var servicesImg = document.getElementsByClassName('servicesImg');

// headerBG double hover header
var headerBG = document.getElementsByClassName('headerBG');
headerBG[0].src = 'assets/images/header/headerBG.jpg';
headerBG[0].addEventListener('load',()=>{
  setTimeout(function () {
    headerBG[0].style.filter = 'brightness(1)';
  }, 500);
  // console.log(123);
})


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

// side menu services
var servServicesButtonContainer = document.getElementsByClassName('servServicesButtonContainer');
var sideMenuBox = document.getElementsByClassName('sideMenuBox');
var sideMenuItem = document.getElementsByClassName('sideMenuItem');

servServicesButtonContainer[0].addEventListener('click',()=>{
  sideTextAnim();
  servServicesButtonContainer[0].style.left = '-20vw';
  setTimeout(function () {
    sideMenuBox[0].style.left = '0';
  }, 400);
});

sideMenuBox[0].addEventListener('mouseleave',()=>{
  sideTextAnimReset();
  sideMenuBox[0].style.left = '-20vw';
  setTimeout(function () {
    servServicesButtonContainer[0].style.left = '3vw';
  }, 400);
});

var sideTextAnimTime = 100;
var sideTextI = 0;
function sideTextAnim() {
  for (var i = 0; i < sideMenuItem.length; i++) {
    setTimeout(function () {
      console.log(sideTextI);
      sideMenuItem[sideTextI].style.top = '0';
      sideMenuItem[sideTextI].style.opacity = '1';
      sideTextI++;
    }, sideTextAnimTime);
    sideTextAnimTime+=100;
  }
}
function sideTextAnimReset() {
  sideTextAnimTime = 100;
  sideTextI = 0;
  for (var i = 0; i < sideMenuItem.length; i++) {
    sideMenuItem[i].style.top = '1vw';
    sideMenuItem[i].style.opacity = '0';
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
var popUpRight = document.getElementsByClassName('leftArrowpopup');
var popUpLeft = document.getElementsByClassName('rightArrowpopup');
var popUpCLoseBox = document.getElementsByClassName('popUpCLoseBox');
// imagePopup[3].scrollIntoView({block: "start",behavior:'smooth'})
// srvImages[0].dataset.srvimg
// popUpScrollableContainer[0].scrollBy(0,-5)

popUpCLoseBox[0].addEventListener('click',()=>{
  servicesPopUpContainer[0].style.top = "-100%";
  imagePopup[0].style.top = '-100vh';
  // popUpRight[0].style.opacity = '0';
  // popUpLeft[0].style.opacity = '0';
});

for (var i = 0; i < srvImages.length; i++) {
  srvImages[i].addEventListener('click',(e)=>{
    // popUpRight[0].style.opacity = '1';
    // popUpLeft[0].style.opacity = '1';

    servicesPopUpContainer[0].style.top = "0%";
    imagePopup[0].src = `assets/images/srv/${[e.target.dataset.srvimg]}.png`;
    popUpImgCoutner = (e.target.dataset.srvimg * 100) -1;
    setTimeout(function () {
      // imagePopup[e.target.dataset.srvimg].scrollIntoView({block: "start",behavior:'smooth'});
    }, 1500);
  });
}

servicesPopUpContainer[0].addEventListener('click',(e)=>{
  // e.currentTarget.style.top = "-100%";
  // servicesPopUpContainer[0]
});

function poUpPositionChecker() {
  if (popUpScrollableContainer[0].scrollHeight > window.innerHeight) {
    popUpScrollableContainer[0].style.alignItems = 'baseline';
  }else{
    popUpScrollableContainer[0].style.alignItems = 'center';
  }
}

setInterval(function () {
  if (imagePopup[0].clientHeight > window.innerHeight) {
    popUpRight[0].style.height = imagePopup[0].clientHeight + 'px';
    popUpLeft[0].style.height = imagePopup[0].clientHeight + 'px';
  }else{
    popUpRight[0].style.height = '100%';
    popUpLeft[0].style.height = '100%';
  }
  poUpPositionChecker();
}, 150);

var popUpImgCoutner = 100;
popUpLeft[0].addEventListener('click',()=>{
  popUpImgCoutner++;
  imagePopup[0].style.opacity = 0;
  setTimeout(function () {
    imagePopup[0].src = `assets/images/srv/${popUpImgCoutner%9 +1}.png`;
  }, 1000);
  console.log(popUpImgCoutner);
});
popUpRight[0].addEventListener('click',()=>{
  popUpImgCoutner--;
  imagePopup[0].style.opacity = 0;
  setTimeout(function () {
    imagePopup[0].src = `assets/images/srv/${popUpImgCoutner%9 +1}.png`;
  }, 1000);
});



// img load event
imagePopup[0].addEventListener('load',()=>{
  imagePopup[0].style.top = '0%';
  imagePopup[0].style.opacity = '1';
});




//  SAVE THIS FOR FIXED SCROLLED CONTAINER BOUNDING BOX
// function popUpCloseOnScroll() {
//   if (lastImagePopup[0].getClientRects()[0].bottom - popUpScrollableContainer[0].offsetHeight < 1 ) {
//     servicesPopUpContainer[0].style.top = "-100%";
//     popUpScrollableContainer[0].scrollBy(0,-5);
//     console.log(123);
//   }
// }










window.addEventListener('scroll', () => {
  servicesBrightnesFun();
});

window.addEventListener('load', () => {

});
