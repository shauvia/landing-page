function MenuItem (name, targetSectionId) {
  this.name = name;
  this.targetSectionId = targetSectionId;
}

const menuItemArray = [new MenuItem('Overview','overview'), new MenuItem('Start now!', 'start-now'), new MenuItem('How it works', 'how-it-works'), new MenuItem('Contact us!', 'contact-us') ];


function createsMenu(array) {
  let menu = document.querySelector('.menu');
  let menuList = document.createElement('ul');
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
createsMenu(menuItemArray);

let elements = document.querySelectorAll('li');

// element.addEventListener('click', function() {
//   window.scrollTo({
//     top: event.target.skoczdo,
//     left: 0,
//     behavior: 'smooth'
//   });
// });

function clickHandler(e){
  let target = e.target;
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

for (let el of elements) {
  el.addEventListener('click', clickHandler);
}

let headerRectangle = document.getElementById('header').getBoundingClientRect();
let headerHeight = headerRectangle.height;

function distanceFromPageTop(string){
  let elementRectangle = document.getElementById(string).getBoundingClientRect();
  let vieportTopToPageTop = window.scrollY;
  let elementTopToViewportTop = elementRectangle.top;
  let elementTopToPageTop = vieportTopToPageTop + elementTopToViewportTop - headerHeight; //odjąć jeszcze wysokość navbara do tego, aby się dobrze przewijało 
  // console.log('elementRectangle: ' + elementRectangle + ' elementScroll: ' + vieportTopToPageTop + ' vieportTopToPageTop: ' + vieportTopToPageTop + ' elementTopToViewportTop: ' + elementTopToViewportTop);
  return elementTopToPageTop;
}


function isInVieport(){
  let viewportHeight = window.innerHeight;
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

window.addEventListener('scroll', isInVieport);
