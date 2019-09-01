document.addEventListener('DOMContentLoaded', () => {
  onhashchange = (ev) => {
    // get new url after hashchange triggered
    let url = ev.newURL;

    // ev.preventDefault();

    // console.log(getLastParam(location.hash));

    if (getLastParam(url, 2) == '#tag') {
      console.log(getLastParam(url, 1));
    } else {
      let hash = location.hash;
      let oldHash = getLastParam(ev.oldURL, 1);
      // console.log(oldHash);

      // set start
      let start = getHashNum(oldHash) + 1;
      console.log(start);

      // set end
      let end = getHashNum(hash);
      console.log(end);

      cardsArrange(start, end);
    }
  }



  if (location.hash) {
    let hash = location.hash;
    // set start = 1;
    let start = 1;
    // set end
    let end = getHashNum(hash);

    cardsArrange(start, end);
  }
});

const allCards = document.querySelectorAll('.card');

// function / hashChangeHandler
function hashChangeHandler(hash, callback) {
  if (location.hash == hash) {
    callback(hash);
  } else {
    return false;
  }
}

// function / get last url param
function getLastParam(url, n) {
  let lastParam = url.split('/');
  lastParam = lastParam[lastParam.length - n];

  return lastParam;
}

function getHashNum(hash) {
  switch (hash) {
    case '#profile':
      result = 0;
      break;
    case '#education':
      result = 1;
      break;
    case '#skill':
      result = 2;
      break;
    case '#stats':
      result = 3;
      break;

    default:
      result = 0;
      break;
  }

  return result;
}

function cardsArrange(start, end) {
  let time = 1000;
  if (start <= end) {
    let stamp = 0;
    // console.log('stamp=' + stamp);
    for (let i = start; i <= end; i++) {

      setTimeout(() => {
        let no = 0;
        let setInter = setInterval(() => {
          // console.log(allCards[i]);

          if (no == 100) clearInterval(setInter);
          allCards[i].style.width = '378px';
          allCards[i].style.position = 'absolute';
          allCards[i].style.top = `${100-no}%`;
          no++;
          console.log(no);
        }, 8);
      }, time * stamp);

      stamp++;
    }
  } else {
    let stamp = 0;
    // console.log('stamp=' + stamp);
    for (let i = start - 1; i > end; i--) {

      setTimeout(() => {
        let no = 0;
        let setInter = setInterval(() => {
          // console.log(allCards[i]);

          if (no == 110) clearInterval(setInter);
          allCards[i].style.width = '378px';
          allCards[i].style.position = 'absolute';
          allCards[i].style.top = `${0+no}%`;
          no++;
          console.log(no);
        }, 8);
      }, time * stamp);

      stamp++;
    }
  }
}

// cardsArrange(2);