function MenuItem (name, targetSectionId) {
  this.name = name;
  this.targetSectionId = targetSectionId;
}

const menuItemArray = [new MenuItem('Overview','overview'), new MenuItem('Start now!', 'start-now'), new MenuItem('How it works', 'how-it-works'), new MenuItem('Contact us!', 'contact-us') ];

const headerRectangle = document.getElementById('header').getBoundingClientRect();
const headerHeight = headerRectangle.height;

// function that creates menu based on menuItemArray;
function createMenu(array) {
  const menu = document.querySelector('.menu');
  const menuList = document.createElement('ul');
  menu.appendChild(menuList);
  for (let el of array) {
    // let menuAnchor = document.createElement('a');
    // menuAnchor.setAttribute('myId', el.href);
    // menuAnchor.setAttribute('href', el.href);
    let menuItem = document.createElement('li');
    menuItem.textContent = el.name;
    // menuList.appendChild(menuAnchor);
    menuList.appendChild(menuItem);
  }
}

// function that returns the distance between the element and page top;
function distanceFromPageTop(string){
  const elementRectangle = document.getElementById(string).getBoundingClientRect();
  const vieportTopToPageTop = window.scrollY;
  const elementTopToViewportTop = elementRectangle.top;
  const elementTopToPageTop = vieportTopToPageTop + elementTopToViewportTop - headerHeight; //o
  return elementTopToPageTop;
}

// function that handles the click event on the menu item and scroll to the correct page section;
function clickHandler(e){
  const target = e.target;
  console.log('el clicked ' + target.tagName + ' ' + target.textContent);
  if (target === elements[0]){
    window.scrollTo({
      top: distanceFromPageTop(menuItemArray[0].targetSectionId),
      left: 0,
      behavior: 'smooth'
    });
  }  
  if (target === elements[1]){
    window.scrollTo({
      top: distanceFromPageTop(menuItemArray[1].targetSectionId),
      left: 0,
      behavior: 'smooth'
    });  
  }
  if (target === elements[2]){
    window.scrollTo({
      top: distanceFromPageTop(menuItemArray[2].targetSectionId),
      left: 0,
      behavior: 'smooth'
    });
  }  
  if (target === elements[3]){
    window.scrollTo({
      top: distanceFromPageTop(menuItemArray[3].targetSectionId),
      left: 0,
      behavior: 'smooth'
    }); 
  }
}

// function that checks if the element is in a vieport;
function isInVieport(){
  const viewportHeight = window.innerHeight;
  for (let object of menuItemArray){
    let element = document.getElementById(object.targetSectionId);
    let elementRect = element.getBoundingClientRect();
    let elementTop = elementRect.top;
    if ((elementTop > -viewportHeight * 0.15 + headerHeight) && (elementTop < viewportHeight * 0.4 + headerHeight)) {
      element.className = 'inViewport';
    } else {
      element.className = '';
    }
  }
}

createMenu(menuItemArray);

const elements = document.querySelectorAll('li');
for (let el of elements) {
  el.addEventListener('click', clickHandler);
}

window.addEventListener('scroll', isInVieport);
