// create dummy data

// projects
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

// function / create Project Object
function Project(items) {
  this.items = items;
}

Project.prototype.getBy = function ({
  search,
  value
}) {
  this.items = this.items.filter(item => item[search].toLowerCase().includes(value.toLowerCase()));

  return this;
}

Project.prototype.getByArray = function ({
  search,
  array
}) {
  this.items = this.items.filter(item => array.some(tag => item[search].includes(tag)));
  return this;
}

let allProjects = new Project(projects);

let ecommerceApp = new Project(projects).getBy({
  search: 'title',
  value: 'E-Commerce App'
});

let Javascript = new Project(projects).getByArray({
  search: 'tag',
  array: [
    'HTML', 'CSS', 'Javascript'
  ]
});