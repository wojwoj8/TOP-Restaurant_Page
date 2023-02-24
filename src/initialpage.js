import Icon from './flag.png';
import loadMenu from './menu';
import loadHome from './home';
import loadContact from './contact';

function createPageContainer() {
  const pageContainer = document.createElement('div');
  pageContainer.classList.add('page-container');
  pageContainer.appendChild(createNav());
  pageContainer.appendChild(createHeader());
  pageContainer.appendChild(createMain());
  return pageContainer;
}

function createNav() {
  const nav = document.createElement('nav');
  const home = document.createElement('button');
  const menu = document.createElement('button');
  const contact = document.createElement('button');
  contact.textContent = 'Contact';
  contact.classList = 'Contact-button';
  menu.textContent = 'Menu';
  menu.classList = 'menu-button';
  home.textContent = 'Home';
  home.classList = 'home-button';
  nav.appendChild(home);
  nav.appendChild(menu);
  nav.appendChild(contact);
  home.addEventListener('click', () => {
    loadHome();
  });

  menu.addEventListener('click', () => {
    loadMenu();
  });

  contact.addEventListener('click', () => {
    loadContact();
  });
  return nav;
}
function createHeader() {
  const header = document.createElement('div');
  const myIcon = new Image();
  const myIcon2 = new Image();
  const title = document.createElement('h1');

  title.textContent = 'Pizza Mariano Italiano';
  myIcon.src = Icon;
  myIcon2.src = Icon;
  header.classList.add('header');
  header.appendChild(myIcon);
  header.appendChild(title);
  header.appendChild(myIcon2);

  return header;
}

function createMain() {
  const main = document.createElement('div');
  main.classList.add('main');

  return main;
}

function webInit() {
  const content = document.getElementById('content');

  content.appendChild(createPageContainer());
  loadHome();
}
export default webInit;
