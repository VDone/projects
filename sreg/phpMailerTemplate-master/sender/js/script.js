// Tot top button
window.onscroll = function() {
  scrollFunction();
  stickyFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 120 || document.documentElement.scrollTop > 120) {
    document.querySelector(".scrollToTop").style.display = "block";
  } else {
    document.querySelector(".scrollToTop").style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}
document.querySelector(".scrollToTop").addEventListener('click', topFunction);

// sticky menu

//header__top

// When the user scrolls the page, execute myFunction
// window.onscroll = function() {
// };

// Get the navbar
let navbar = document.querySelector(".header__top");

// Get the offset position of the navbar
let sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function stickyFunction() {
  if (window.pageYOffset >= 100) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}


// slick

$(document).ready(function(){
  $('.slick').slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    prevArrow: $('.prev'),
    nextArrow: $('.next'),
    // responsive: [
    //   {
    //     breakpoint: 1200,
    //     settings: {
    //       slidesToShow: 2,
    //       slidesToScroll: 1,
    //       infinite: true,
    //       // dots: true
    //     }
    //   },
    //   {
    //     breakpoint: 768,
    //     settings: {
    //       slidesToShow: 2,
    //       slidesToScroll: 1
    //     }
    //   },
    //   {
    //     breakpoint: 320,
    //     settings: {
    //       slidesToShow: 1,
    //       slidesToScroll: 1
    //     }
    //   }]
});
});
 // modal


let modal = document.querySelector('.modal');
let open = document.querySelectorAll('.btn');
let close = document.querySelector('.close');
let buttons = Array.from(open);

function show() {
  modal.style.display = "block";
  // modal.style.opacity = 1;
}
function hide() {
  modal.style.display = "none";
  // modal.style.opacity = 0;
}
buttons.forEach(function (item) {
  item.addEventListener('click', show);
});

close.addEventListener('click', hide);


window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
