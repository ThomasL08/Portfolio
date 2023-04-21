const mainMenu = document.querySelector('.mainMenu');
const closeMenu = document.querySelector('.closeMenu');
const openMenu = document.querySelector('.openMenu');
const menu_items = document.querySelectorAll('nav .mainMenu li a');




openMenu.addEventListener('click',show);
closeMenu.addEventListener('click',close);

// close menu when you click on a menu item 
menu_items.forEach(item => {
    item.addEventListener('click',function(){
        close();
    })
})

function show(){
    mainMenu.style.display = 'flex';
    mainMenu.style.top = '0';
}
function close(){
    mainMenu.style.top = '-100%';
}
window.addEventListener('scroll', function() {
  var scrollPosition = window.scrollY;
  var windowHeight = window.innerHeight;
  var fullHeight = document.body.scrollHeight;
  
  if (scrollPosition > windowHeight / 2) {
    document.getElementById('scroll-up-button').style.display = 'block';
  } else {
    document.getElementById('scroll-up-button').style.display = 'none';
  }
  
  if (scrollPosition >= fullHeight - windowHeight) {
    document.getElementById('scroll-up-button').style.bottom = '70px';
  } else {
    document.getElementById('scroll-up-button').style.bottom = '20px';
  }
});

document.getElementById('scroll-up-button').addEventListener('click', function() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});

