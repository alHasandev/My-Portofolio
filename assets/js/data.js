// prepare HTML Element References
const menuInfo = document.getElementById('menu-info');
const menuProject = document.getElementById('menu-projects');
const projectContainer = document.getElementById('project-container');

// create dummy data / project
const projects = [{
    title: 'E-Commerce App',
    link: 'http://localhost/#android',
    tag: [
      'Android', 'Mobile', 'Java'
    ],
    img: './assets/images/projects/E-commerce-admin-panel.png'
  },
  {
    title: 'Dashboard Retail Shopz Web',
    link: 'http://localhost',
    tag: [
      'HTML', 'CSS', 'Javascript', 'PHP', 'MySQL'
    ],
    img: './assets/images/projects/RetailShopz-Dashboard.png'
  },
  {
    title: 'Desktop App Pos',
    link: 'http://localhost',
    tag: [
      'Java', 'Desktop', 'MySQL'
    ],
    img: './assets/images/projects/pos.jpg'
  },
  {
    title: 'Super Admin Design Template',
    link: 'http://localhost',
    tag: [
      'HTML', 'CSS', 'Javascript'
    ],
    img: './assets/images/projects/super-admin-design.png'
  },
  {
    title: 'E-Commerce App',
    link: 'http://localhost/#android',
    tag: [
      'Android', 'Mobile', 'Java'
    ],
    img: './assets/images/projects/E-commerce-admin-panel.png'
  },
  {
    title: 'Dashboard Retail Shopz Web',
    link: 'http://localhost',
    tag: [
      'HTML', 'CSS', 'Javascript', 'PHP', 'MySQL'
    ],
    img: './assets/images/projects/RetailShopz-Dashboard.png'
  }
];

// create dummy data / tags list
const tagsList = [
  'HTML',
  'CSS',
  'JavaScript',
  'PHP',
  'MySQL',
  'Bootstrap',
  'Java',
  'NodeJS',
  'Firebase',
  'MongoDB',
  'Laravel',
  'CodeIgniter'
];

// function / create Project Class / Blueprint
function Project(items) {
  this.items = items;
}

// add prototype method to Project Class -> Limit the output number
Project.prototype.limit = function (end, start = 0) {
  this.items = this.items.slice(start, end);
  return this;
}

// add prototype method to Project Class -> get certain data by searched property value "string"
Project.prototype.getBy = function ({
  search,
  value
}) {
  this.items = this.items.filter(item => item[search].toLowerCase().includes(value.toLowerCase()));

  return this;
}

// add prototype method to Project Class -> get certain data by searched property value "array"
Project.prototype.getByArray = function ({
  search,
  array
}) {
  this.items = this.items.filter(item => {
    // convert filter and array item to lowercase
    // let searched = item[search].map(value => value.toLowerCase());
    let selected = array.map(value => value.toLowerCase());
    let count = item[search].filter(searchValue => {
      return selected.includes(searchValue.toLowerCase());
    });
    // return filtered array
    // return searched.includes(tag.toLowerCase());
    if (count.length >= array.length) {
      // console.log(count);
      return true;
    } else {
      // console.log(count);
      return false;
    }
  });
  return this;
}

// initialize all projects data
let allProjects = new Project(projects).limit(6);

let ecommerceApp = new Project(projects).getBy({
  search: 'title',
  value: 'app'
});

let Javascript = new Project(projects).getByArray({
  search: 'tag',
  array: [
    'html', 'css', 'javascript', 'mysql'
  ]
});