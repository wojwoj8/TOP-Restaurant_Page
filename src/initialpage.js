import Icon from './flag.png';

function createPageContainer() {
  const pageContainer = document.createElement('div');
  pageContainer.classList.add('page-container');
  pageContainer.appendChild(createHeader());
  pageContainer.appendChild(createMain());
  return pageContainer;
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
function createParagraph(text) {
  const paragraph = document.createElement('p');
  paragraph.textContent = text;
  return paragraph;
}
function createMain() {
  const main = document.createElement('div');
  main.classList.add('main');
  const h3 = document.createElement('h3');
  h3.textContent = 'Welcome to Pizza Mariano Italiano, where we specialize in serving authentic Italian-style pizza made with the freshest ingredients.';
  main.appendChild(h3);
  main.appendChild(createParagraph('Our restaurant is located in the heart of the city, and we offer a cozy and inviting atmosphere where you can enjoy a delicious meal with family and friends. Our menu features a wide range of mouth-watering pizzas, including classic Margherita, pepperoni, vegetarian, and many more.'));
  main.appendChild(createParagraph('At Pizza Mariano Italiano, we take pride in using only the finest quality ingredients to create our pizzas. Our pizza dough is made fresh every day, and we use only the freshest vegetables and meats to top our pizzas.'));
  main.appendChild(createParagraph('In addition to our delicious pizzas, we also offer a variety of other Italian specialties, including homemade pasta dishes, salads, and appetizers. And for those with a sweet tooth, we have a selection of delicious desserts to choose from.'));
  main.appendChild(createParagraph('At Pizza Mariano Italiano, we strive to provide our customers with exceptional service and a dining experience they won\'t forget. So come visit us today and indulge in the flavors of Italy!'));
  return main;
}

function webInit() {
  const content = document.getElementById('content');

  content.appendChild(createPageContainer());
}
export default webInit;
