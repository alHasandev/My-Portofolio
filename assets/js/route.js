document.addEventListener('DOMContentLoaded', () => {
  onhashchange = (ev) => {
    let n = 0;
    let hash = location.hash;
    let oldHash = ev.oldURL;
    oldHash = oldHash.split('/');
    oldHash = oldHash[oldHash.length - 1];
    console.log(oldHash);

    // set start
    let start = getHashNum(oldHash) + 1;
    console.log(start);

    // set end
    let end = getHashNum(hash);
    console.log(end);

    cardsArrange(start, end);
    // ev.preventDefault();
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