function createMenuItem(name, description) {
  const menuItem = document.createElement('div');
  const itemName = document.createElement('p');
  const itemDescription = document.createElement('p');
  itemDescription.classList.add('item-description');
  itemDescription.textContent = description;
  itemName.classList.add('item-name');
  itemName.textContent = name;
  menuItem.classList.add('menu-container');
  menuItem.appendChild(itemName);
  menuItem.appendChild(itemDescription);
  return menuItem;
}
function addMenuItem() {
  const menu = document.createElement('div');
  menu.classList.add('menu');
  menu.appendChild(createMenuItem('Margarita', 'cheese, basil, tomato sauce'));
  menu.appendChild(createMenuItem('Capriciosa', 'ham, champignons, cheese, basil, tomato sauce'));
  menu.appendChild(createMenuItem('Diavola', 'ham, champignons, jalapeno, cheese, basil, tomato sauce'));
  menu.appendChild(createMenuItem('Kebap', 'kebap, cheese, basil, tomato sauce'));
  return menu;
}
function loadMenu() {
  const main = document.querySelector('.main');
  main.textContent = '';
  main.appendChild(addMenuItem());
}
export default loadMenu;
