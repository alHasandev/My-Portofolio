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

const menuLink = function (tag) {
  return htmltag({
    tag: 'li',
    innerHtml: htmltag({
      tag: 'a',
      classNames: [
        'nav-link'
      ],
      attributes: {
        href: `#tag/${tag}`
      },
      innerHtml: tag
    })
  });
}

// prepare HTMLElement References
// const main = document.getElementById('main');

renderHtml(projectContainer, getStringOf(createProjects(allProjects.items)));
renderHtml(menuProject, getStringOf(createMenu(tagsList)), false);

// console.log(createProjects(allProjects.items));