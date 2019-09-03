const descriptionCard = document.getElementById('description');
const skillsCard = document.getElementById('skills');
const statsCard = document.getElementById('statistics');
document.addEventListener('DOMContentLoaded', () => {
  // let scrollPos = 0;
  // let scrollNum = 0;

  // call function if width device > 968px
  deviceHandler('min-width: 968px', dekstopDevice, mobileDevice);

  // console.log('scroll pos = ' + scrollPos);
  // console.log('scroll num=' + scrollNum);

  //   if ((document.body.getBoundingClientRect()).top > scrollPos) {

  //   } else {

  //   }
  //   // saves the new position for iteration.
  //   scrollPos = (document.body.getBoundingClientRect()).top;
  // }


});

function deviceHandler(deviceWidth, callback, callelse) {
  // ex: max-width: 700px

  var x = window.matchMedia(`(${deviceWidth})`);
  myFunction(x) // Call listener function at run time
  x.addListener(myFunction) // Attach listener function on state changes

  function myFunction(x) {
    if (x.matches) { // If media query matches
      callback();
    } else {
      if (callelse !== undefined) {
        callelse();
      } else {
        return false;
      }
    }
  }
}

function dekstopDevice() {
  document.onscroll = (ev) => {
    let scrollTop = document.scrollingElement.scrollTop;
    // console.log(scrollTop);
    if (scrollTop >= 73 && scrollTop <= 200) {

      document.getElementById('float').style.position = 'fixed';
      document.getElementById('float').style.top = '-1px';
      document.getElementById('float').style.height = '100vh';
      document.getElementById('float').style.overflow = 'hidden';
      document.body.style.height = '200vh';
    } else if (scrollTop < 73) {
      // console.log(scrollTop);
      document.getElementById('float').style.position = 'unset';
      document.getElementById('float').style.height = 'unset';
    }
  }
}

function mobileDevice() {
  const float = document.getElementById('float');
  float.style.position = 'unset';
  float.style.height = 'unset';
  float.style.overflowY = 'auto';
  float.style.overflowX = 'hidden';
}

function myFunctionElse(x) {
  if (x.matches) { // If media query matches
    document.body.style.backgroundColor = "yellow";
  } else {
    document.body.style.backgroundColor = "pink";
  }
}