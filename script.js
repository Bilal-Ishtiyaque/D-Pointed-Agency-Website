const navbar = document.querySelector("nav");
const navToggler = document.querySelectorAll("[data-menu-toggler]");
const navbarLinks = document.querySelectorAll(".menu_link");
const overlay = document.querySelector("[data-overlay]");



// FUNCTION FOR ADDING EVENT LISTENER ON ELEMENTS
const addEventOnElement = function (elem, type, callback) {
    if (elem.length > 1) {
      for (let i = 0; i < elem.length; i++) {
        elem[i].addEventListener(type, callback);
      }
    } else {
      elem.addEventListener(type, callback);
    }
  }
  
  // xxxxxxxx
  
  //FUNCTIONS FOR MENU BAR OPEN AND CLOSE
  const toggleMenu = function () {
    navbar.classList.toggle("active");
    overlay.classList.toggle("active");
  }
  const closeMenu = function () {
    navbar.classList.remove("active");
    overlay.classList.remove("active");
  }
  
  // xxxxxxxx



  // ---------------------------------------------
// ADDING EVENT LISTENERS:
// ---------------------------------------------

//ADDING EVENT LISTENERS ON MENU HAMBURGER BUTTON AND ON THE CLOSE "X" MENU BUTTON
navbarLinks.forEach((menuLink)=>{
    menuLink.addEventListener("click", closeMenu);
  })
  navToggler.forEach((toggleBtn)=>{
    toggleBtn.addEventListener("click", toggleMenu);
  });
  