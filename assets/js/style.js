const descriptionCard = document.getElementById('description');
const skillsCard = document.getElementById('skills');
const statsCard = document.getElementById('statistics');
document.addEventListener('DOMContentLoaded', () => {
  let scrollPos = 0;
  // let scrollNum = 0;
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

    console.log('scroll pos = ' + scrollPos);
    // console.log('scroll num=' + scrollNum);

    //   if ((document.body.getBoundingClientRect()).top > scrollPos) {

    //   } else {

    //   }
    //   // saves the new position for iteration.
    //   scrollPos = (document.body.getBoundingClientRect()).top;
    // }

  }
});