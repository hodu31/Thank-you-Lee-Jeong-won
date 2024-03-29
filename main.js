'use strict'

// Make navbar transparent when it is on the top
const navbar = document.querySelector('#navbar');
const navbarHeight = navbar.getBoundingClientRect().height;
document.addEventListener('scroll', () => {
    if(window.scrollY > navbarHeight) {
        navbar.classList.add('navbar--dark')
    } else {
        navbar.classList.remove('navbar--dark')
    }
});

// Handle scrolling when tapping in the navbar menu
const navbarMenu = document.querySelector('.navbar__menu');
navbarMenu.addEventListener('click', (event) => {
    const target = event.target;
    const link = target.dataset.link;
    if(link == null) {
        return;
    }
    
    navbarMenu.classList.remove('open');
    scrollIntoView(link)
}); 

// Navbar togggle button for small screen
const navbarToggleBtn = document.querySelector('.navbar__toggle-btn');
navbarToggleBtn.addEventListener('click', ()=> {
    navbarMenu.classList.toggle('open');
});

// Handle click on "contact me" button on home
const homeContactBtn = document.querySelector('.home__contact');
homeContactBtn.addEventListener('click', () => {
    scrollIntoView('#about')
})

// Make home slowly fade to transparent as the window scrolls down
const home = document.querySelector('.home__container');
const homeHeight = home.getBoundingClientRect().height;
document.addEventListener('scroll', () => {
    home.style.opacity = 1 - window.scrollY / homeHeight;
});

// Show "arrow up" button when scrolling down
const arrowUp = document.querySelector('.arrow-up');
document.addEventListener('scroll', () => {
    if (window.scrollY > homeHeight /2) {
        arrowUp.classList.add('visible');
    } 
    else {
        arrowUp.classList.remove('visible');
    }
});

//Handle click on the "arrow up" button
arrowUp.addEventListener('click', () => {
    scrollIntoView('#home');
})

//Projects
const workBtnContainer = document.querySelector('.work__categories');
const projectsContainer = document.querySelector('.work__projects');
const projects = document.querySelectorAll('.project');
workBtnContainer.addEventListener('click', (e) => {
    const filter = e.target.dataset.filter || e.target.parentNode.dataset.filter;
    if(filter == null) {
        return;
    }

    projectsContainer.classList.add('anim-out');
    setTimeout(() => {
        projects.forEach((projects) => {
            console.log(projects.dataset.type);
            if(filter =='*' || filter === projects.dataset.type) {
              projects.classList.remove('invisible');
            }  else {
              projects.classList.add('invisible');
            }
          });
        projectsContainer.classList.remove('anim-out');
    }, 300)

});

function scrollIntoView(selector) {
    const scrollTO = document.querySelector(selector);
    scrollTO.scrollIntoView({behavior: "smooth"});
}

document.getElementById('messageForm').addEventListener('submit', function(event){
    event.preventDefault();

    var message = document.getElementById('messageInput').value.trim();
    if(message) {
        var messagesContainer = document.getElementById('messages');
        var newMessage = document.createElement('p');
        newMessage.textContent = message;
        messagesContainer.appendChild(newMessage);

        document.getElementById('messageInput').value = ''; // 입력 필드 초기화
    }
});