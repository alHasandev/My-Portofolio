// prepare HTML Element References
const selectedTag = new State('Selected Tag', []);
// check media width
let matches = window.matchMedia("(min-width: 968px)").matches;
console.log(matches);

document.addEventListener('DOMContentLoaded', () => {



  if (matches) {
    onhashchange = (ev) => {
      // get new url after hashchange triggered
      let url = ev.newURL;
      let hash = location.hash;


      // ev.preventDefault();

      // console.log(getLastParam(location.hash));

      if (getLastParam(url, 2) == '#tag') {
        let tag = getLastParam(url, 1);
        console.log(tag);
        // menuPointer(hash, menuProject);
        // selectTag(tag);
      } else {
        let oldHash = getLastParam(ev.oldURL, 1);
        // console.log(oldHash);

        // set start
        let start = getHashNum(oldHash) + 1;
        // console.log(start);

        // set end
        let end = getHashNum(hash);
        // console.log(end);

        menuPointer(hash, menuInfo);
        cardsArrange(start, end);


      }

    }
  }



  if (matches) {
    if (location.hash) {
      let hash = location.hash;
      // set start = 1;
      let start = 1;
      // set end
      let end = getHashNum(hash);

      menuPointer(hash, menuInfo);
      cardsArrange(start, end);
    }

    // get selected tag
    // listen to event click : menuProjects li a
    menuProject.addEventListener('click', (ev) => {
      // prevent Default
      ev.preventDefault();

      // call function / filter tag
      filterTag(ev.target);
    });
  }
});

const allCards = document.querySelectorAll('.card');

// function / hashChangeHandler
function hashChangeHandler(hash, callback) {
  // check if hash changed
  if (location.hash == hash) {
    callback(hash);
  } else {
    return false;
  }
}

// function / change marked menu link
function menuPointer(hash, parent) {
  // get HTML Element References of parent
  let allLink = parent.querySelectorAll('a');
  let target = parent.querySelector(`a[href="${hash}"`);

  // remove class active from all menu link
  allLink.forEach(link => {
    link.classList.remove('active');
  });

  // add class active for clicked link / target click
  target.classList.add('active');
  // console.log(parent.querySelector(`a[href="${hash}"`));
}

// function / show based on selected tag menu
function selectTag(tag) {
  let result = new Project(projects).limit(6);
  if (tag !== 'all') {
    result = new Project(projects).getByArray({
      search: 'tag',
      array: tag
    }).limit(6);
  }


  renderHtml(projectContainer, getStringOf(createProjects(result.items)));
  // console.log(result.items);
}

// function / tag filter handler
function filterTag(target) {
  // get HTML Element References of parent
  const tagAll = document.getElementById('all');

  if (target.classList.contains('nav-link') || target.classList.contains('tag-all')) {

    let tag = target.classList.contains('nav-link') ? getLastParam(target.href, 1) : 'all';

    if (target === tagAll || target.classList.contains('tag-all')) {
      // console.log(target);
      // reset state to null
      selectedTag.stateChange({
        stateValue: []
      });
    } else
    if (target.classList.contains('active')) {
      target.classList.remove('active');
      selectedTag.stateChange({
        stateValue: tag,
        method: 'remove'
      });
    } else {
      target.classList.add('active');
      selectedTag.stateChange({
        stateValue: tag,
        method: 'add'
      });
    }

    if (selectedTag.stateValues.length > 0) {

      tagAll.classList.remove('active');
    } else {
      menuPointer('#tag/all', menuProject);
    }

    // console.log(selectedTag.stateValues);
    selectTag(selectedTag.stateValues);
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
          // console.log(no);
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
          // console.log(no);
        }, 8);
      }, time * stamp);

      stamp++;
    }
  }
}

// object Class / State
function State(stateName, initialValue) {
  this.stateName = stateName;
  this.stateValues = initialValue;
}

// add prototype Method to State Class Object
State.prototype.stateChange = function ({
  stateName,
  stateValue,
  method = 'change'
}) {
  if (stateName !== undefined) {
    this.stateName = stateName;
  }

  if (stateValue !== undefined) {
    switch (method) {
      case 'change':
        if (Array.isArray(stateValue)) {
          this.stateValues = stateValue;
        } else {
          this.stateValues = [stateValue];
        }
        break;
      case 'add':
        if (Array.isArray(stateValue)) {
          this.stateValues = this.stateValues.concat(stateValue);
        } else {
          this.stateValues.push(stateValue);
        }
        break;
      case 'remove':
        if (Array.isArray(stateValue)) {
          stateValue = stateValue.map(value => value.toLowerCase());
          this.stateValues = this.stateValues.filter(tag => !stateValue.includes(tag.toLowerCase()));
        } else {
          let index = this.stateValues.indexOf(stateValue);
          this.stateValues.splice(index, 1);
        }
        break;

      default:
        break;
    }
  }
}

// cardsArrange(2);