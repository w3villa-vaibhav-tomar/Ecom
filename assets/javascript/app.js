var dropdownMenubar = document.getElementById("dropdown-menubar")
dropdownMenubar.onclick = function (e) {
  console.log(1)
  var menubar = document.getElementById("menubar");
  e.preventDefault();
  menubar.classList.toggle("show")
  console.log(1)
}

document.getElementById("mobile-search-button").onclick = function (e) {
  e.preventDefault();
  var searchMobile = document.getElementById("search-mobile")
  searchMobile.classList.toggle("search-mobile")
}
document.getElementById("login-logout").onclick = function (e) {
  e.preventDefault();
  var navbarDropdown = document.getElementById("navbar-dropdown")
  navbarDropdown.classList.toggle("navbar-dropdown")
}
document.getElementById("nav-dropdown").onclick = function (e) {
  e.preventDefault();
  var navbaroptionsMobile = document.getElementById("navbaroptions-mobile")
  navbaroptionsMobile.classList.toggle("navbaroptions-mobile")
}

$(document).ready(function () {
  $('.cartItems').slick({
    dots: true,
    infinite: true,
    slidesToShow: 4, 
    slidesToScroll: 1,
    autoplay: true,
    swipe: true,
    arrows:false,
    autoplaySpeed: 1000,
    responsive:[
      {
        breakpoint: 1060,
        settings:{
          slidesToShow:3,
        }
      },
      {
        breakpoint: 745,
        settings:{
          slidesToShow:2,
        }
      },
      {
        breakpoint: 400,
        settings:{
          slidesToShow:1,
        }
      }
    ]
  });
});

$(document).ready(function () {
  $('.catCards').slick({
    dots: true,
    infinite: true,
    slidesToShow: 4, 
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
    swipe: true,
    arrows:false,
    responsive:[
      {
        breakpoint: 1060,
        settings:{
          slidesToShow:2,
        }
      }
    ]
  });
});

$(document).ready(function () {
  $('.allbrands').slick({
    dots: true,
    infinite: true,
    slidesToShow: 7, 
    arrows:false,
    slidesToScroll: 2,
    autoplay: true,
    swipe: true,
    autoplaySpeed: 1000,
    responsive:[
      {
        breakpoint: 1060,
        settings:{
          slidesToShow:3,
        }
      }
    ]
  });
});

$(document).ready(function () {
  $('.latest').slick({
    dots: true,
    infinite: true,
    slidesToShow: 2, 
    slidesToScroll: 1,
    autoplay: true,
    swipe: true,
    arrows:false,
    autoplaySpeed: 1000,
    responsive:[
      {
        breakpoint: 1060,
        settings:{
          slidesToShow:1,
        }
      },
      {
        breakpoint: 750,
        settings:{
          slidesToShow:1,
        }
      }
    ]
  });
});
