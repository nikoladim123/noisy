var servicesAnimTopContainer = document.getElementsByClassName('servicesAnimTopContainer');
var servicescirc = document.getElementsByClassName('servicescirc');
var servicesImg = document.getElementsByClassName('servicesImg');

// services
function servicesBrightnesFun() {
  if (servicesAnimTopContainer[0].getClientRects()[0].top < -window.innerHeight/100 *1) {
    servicescirc[0].style.filter = 'brightness(1)';
    servicesImg[0].style.filter = 'brightness(1)';
  }else{
    servicescirc[0].style.filter = 'brightness(0)';
    servicesImg[0].style.filter = 'brightness(0)';
  }
}

window.addEventListener('scroll',()=>{
  servicesBrightnesFun();
})
