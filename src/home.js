function createParagraph(text) {
  const paragraph = document.createElement('p');
  paragraph.textContent = text;
  return paragraph;
}
function addParagraph() {
  const description = document.createElement('div');
  description.classList.add('description');
  const h3 = document.createElement('h3');
  h3.textContent = 'Welcome to Pizza Mariano Italiano, where we specialize in serving authentic Italian-style pizza made with the freshest ingredients.';
  description.appendChild(h3);
  description.appendChild(createParagraph('Our restaurant is located in the heart of the city, and we offer a cozy and inviting atmosphere where you can enjoy a delicious meal with family and friends. Our menu features a wide range of mouth-watering pizzas, including classic Margherita, pepperoni, vegetarian, and many more.'));
  description.appendChild(createParagraph('At Pizza Mariano Italiano, we take pride in using only the finest quality ingredients to create our pizzas. Our pizza dough is made fresh every day, and we use only the freshest vegetables and meats to top our pizzas.'));
  description.appendChild(createParagraph('In addition to our delicious pizzas, we also offer a variety of other Italian specialties, including homemade pasta dishes, salads, and appetizers. And for those with a sweet tooth, we have a selection of delicious desserts to choose from.'));
  description.appendChild(createParagraph('At Pizza Mariano Italiano, we strive to provide our customers with exceptional service and a dining experience they won\'t forget. So come visit us today and indulge in the flavors of Italy!'));
  return description;
}

function loadHome() {
  const main = document.querySelector('.main');
  main.textContent = '';
  main.appendChild(addParagraph());
}
export default loadHome;
