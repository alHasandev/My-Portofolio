function renderHtml(parent, element) {
  parent = parent || HTMLElement;
  parent.innerHTML = element;
}

function createProjects(array) {
  return array.map(item => projectCard(item.img, item.tag));
}

const image = function (src, classNames) {
  return htmltag({
    tag: 'img',
    classNames: classNames,
    attributes: {
      src: src
    }
  }, false);
}

const tag = function (text) {
  return htmltag({
    tag: 'span',
    classNames: 'tag',
    innerHtml: text
  });
}

const anchor = function (href, text) {
  return htmltag({
    tag: 'a',
    attributes: {
      href: href
    },
    innerHtml: text
  });
}

const projectCard = function (imgSrc, tags) {
  tags = tags.map(tag);

  return htmltag({
    tag: 'div',
    classNames: ['project'],
    innerHtml: [
      htmltag({
        tag: 'div',
        classNames: 'image',
        innerHtml: anchor('#', image(imgSrc))
      }),
      htmltag({
        tag: 'div',
        classNames: 'desc',
        innerHtml: tags
      })
    ]
  });
}

// prepare HTMLElement References
// const main = document.getElementById('main');
const projectContainer = document.getElementById('project-container');

renderHtml(projectContainer, getStringOf(createProjects(allProjects.items)));

// console.log(createProjects(allProjects.items));