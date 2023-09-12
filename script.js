refs = {
  menu: document.querySelector('#menu-bars'),
  navbar: document.querySelector('.navbar'),
  searchEl: document.querySelector('#search-icon'),
  formEl: document.querySelector('#search-form'),
  closeForm: document.querySelector('#close'),
  section: document.querySelectorAll('section'),
  navLinks: document.querySelectorAll('header .navbar a')
}

window.onscroll = () => {
  refs.menu.classList.remove('fa-times')
  refs.navbar.classList.remove('active')

  // refs.section.forEach(sec => {
  //   let top = window.scrollY ; 
  //   let height = sec.offsetHeight;
  //   let offset = sec.offsetTop - 150;
  //   let id = sec.getAttribute('id')

  //   console.log( top < offset + height);
  //   if (top < offset + height) {
  //     refs.navLinks.forEach(links => {
  //       links.classList.remove("active")
    
  //     })
  //   }
  // });
}

refs.menu.onclick = () => {
  refs.menu.classList.toggle('fa-times')
  refs.navbar.classList.toggle('active-navbar')
}

refs.searchEl.onclick = () => {
  refs.formEl.classList.toggle('active')
}
refs.closeForm.onclick = () => {
  refs.formEl.classList.remove('active')
}

var swiper = new Swiper(".mySwiper", {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 7500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    loop: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

});
var swiper = new Swiper(".review-slider", {
  spaceBetween: 30,
  freeMode: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1200: {
      slidesPerView: 3,
    },
  },
});