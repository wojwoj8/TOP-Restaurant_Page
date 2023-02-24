function createParagraph(text) {
  const paragraph = document.createElement('p');
  paragraph.textContent = text;
  return paragraph;
}
function addParagraph() {
  const description = document.createElement('div');
  description.classList.add('description');
  const h3 = document.createElement('h3');
  h3.textContent = 'Welcome to Pizza Mariano Italiano, the home of authentic Italian-style pizza made with the freshest ingredients. If you have any questions or would like to make a reservation, we would love to hear from you.';
  description.appendChild(h3);
  description.appendChild(createParagraph('You can contact us by phone at 555-1234 or by email at info@pizzamarianoitaliano.com. Our friendly staff will be happy to assist you with any inquiries you may have.'));
  description.appendChild(createParagraph('You can also visit us in person at our restaurant, located in the heart of the city. Our address is John Paul II 137, and we are open seven days a week for lunch and dinner.'));
  description.appendChild(createParagraph('At Pizza Mariano Italiano, we take pride in providing our customers with exceptional service and a dining experience they won\'t forget. So whether you\'re in the mood for a classic Margherita pizza or one of our delicious homemade pasta dishes, we look forward to seeing you soon.'));

  return description;
}

function loadContact() {
  const main = document.querySelector('.main');
  main.textContent = '';
  main.appendChild(addParagraph());
}
export default loadContact;
