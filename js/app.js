
function createsMenu() {
  let menuItemsArray = ['Overview', 'How it works', 'Start now!', 'Contact us!']
  let menu = document.querySelector('.menu');
  let menuTable = document.createElement('ul');
  menu.appendChild(menuTable);
  for (el of menuItemsArray) {
    let menuItem = document.createElement('li');
    menuItem.textContent = el;
    menuTable.appendChild(menuItem);
  }
}

createsMenu();

// nanodegreeCard.textContent = "I will be the updated text for the nanodegreeCard element!";

