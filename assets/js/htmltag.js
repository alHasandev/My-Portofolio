function htmltag({
  tag,
  classNames,
  attributes,
  innerHtml
}, closeTag = true) {

  classNames = 'class="' + getStringOf(classNames) + '"';

  let attrs = '';
  if (attributes != undefined) {
    for (let attr in attributes) {
      // skip if property not belong to attibutes object / is from its prototype
      if (!attributes.hasOwnProperty(attr)) continue;
      // else
      attrs += attr + '="' + attributes[attr] + '" ';
    }
  }
  innerHtml = getStringOf(innerHtml);

  return `<${tag} ${classNames} ${attrs}>${innerHtml}` + (closeTag ? `</${tag}>` : '');
}

function getStringOf(listItems) {
  return listItems != undefined ? (Array.isArray(listItems) ? listItems.join(' ') : listItems) : '';
}