document.addEventListener('alpine:init', () => {
  const sections = document.querySelectorAll('section');

  // Set initial state
  sections.forEach(el => {
    el.style.opacity = 0;
  });

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = 1;
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  sections.forEach(el => observer.observe(el));
});


if (document.querySelector('.slideshow_slider')) {
  var swiper = new Swiper(".slideshow_slider", {
    slidesPerView: 1,
    loop: true,
    effect: "fade",
    allowTouchMove: false,
    autoplay: {
      delay: 50,
      disableOnInteraction: false,
    },
  });
}

if (document.querySelector('.gallery_slider')) {
  var swiper = new Swiper(".gallery_slider", {
    slidesPerView: 1,
    spaceBetween: '5px',
    loop: true,
    breakpoints: {
      490: {
        slidesPerView: 2,
        spaceBetween: 10,
      },
      735: {
        slidesPerView: 3,
        spaceBetween: 15,
      },
      980: {
        slidesPerView: 4,
        spaceBetween: 20,
      },
      1225: {
        slidesPerView: 5,
        spaceBetween: 20,
      },
      1470: {
        slidesPerView: 6,
        spaceBetween: 20,
      },
      1715: {
        slidesPerView: 7,
        spaceBetween: 20,
      },
    },
  });
}

if (document.querySelector('.client_slider')) {
  var swiper = new Swiper(".client_slider", {
    slidesPerView: 2,
    spaceBetween: 32,
    loop: true,
    speed: 1000,
    autoplay: {
      delay: 4000,
      disableOnInteraction: false,
    },
    breakpoints: {
      576: {
        slidesPerView: 3,
        spaceBetween: 50,
      },
      768: {
        slidesPerView: 4,
        spaceBetween: 50,
      },
      992: {
        slidesPerView: 5,
        spaceBetween: 50,
      },
      1200: {
        slidesPerView: 6,
        spaceBetween: 50,
      },
      1400: {
        slidesPerView: 7,
        spaceBetween: 50,
      },
      1600: {
        slidesPerView: 8,
        spaceBetween: 50,
      },
    },
  });
}

if (document.querySelector('.product_slideshow')) {
  var swiper = new Swiper(".product_slideshow", {
    slidesPerView: 1,
    loop: true,
    effect: "fade",
    allowTouchMove: false,
    autoplay: {
      delay: 3500,
      disableOnInteraction: false,
    },
  });
}

if (document.querySelector('.project_slider')) {
  var swiper = new Swiper(".project_slider", {
    slidesPerView: 1,
    spaceBetween: 5,
    loop: true,
    speed: 500,
    autoplay: {
      delay: 4000,
      disableOnInteraction: false,
    },
    breakpoints: {
      588: {
        slidesPerView: 2,
        spaceBetween: 10,
      },
      1176: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
    },
  });
}

document.addEventListener('DOMContentLoaded', function () {
  const header = document.getElementById('main_header');
  window.addEventListener('scroll', function () {
    if (window.scrollY > 1000) {
      header.classList.add('fixed', 'w-full', 'left-0', 'top-0', 'shadow', 'z-50', 'bg-black', 'transition-slow');
    } else {
      header.classList.remove('fixed', 'w-full', 'left-0', 'top-0', 'shadow', 'z-50', 'bg-black', 'transition-slow');
    }
  });
});

document.addEventListener('alpine:init', () => {
  Alpine.data('counters', () => ({
    started: false,
    duration: 2000,
    frameTime: 20,
    start() {
      if (this.started) return;
      this.started = true;
      document.querySelectorAll('.counting').forEach(el => {
        const target = +el.textContent;
        el.textContent = '0';
        let count = 0;
        const steps = this.duration / this.frameTime;
        const increment = target / steps;
        const interval = setInterval(() => {
          count += increment;
          if (count >= target) {
            el.textContent = target;
            clearInterval(interval);
          } else {
            el.textContent = Math.round(count);
          }
        }, this.frameTime);
      });
    }
  }));
});

if (document.querySelector('.testimonial_swiper')) {
  var swiper = new Swiper(".testimonial_swiper", {
    spaceBetween: 30,
    centeredSlides: true,
    speed: 1500,
    loop: true,
    autoplay: {
      delay: 4000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });
}

if (document.querySelector(".left-sidebar")) {
  const sidebar = document.querySelector(".left-sidebar");
  const menu = sidebar.querySelector("ul");

  sidebar.addEventListener("click", () => {
    menu.classList.toggle("open");
  });

  menu.addEventListener("click", (e) => {
    if (e.target.closest("li")) {
      menu.classList.remove("open");
    }
  });

  document.addEventListener("click", (e) => {
    if (!sidebar.contains(e.target)) {
      menu.classList.remove("open");
    }
  });
}


// document.addEventListener('alpine:init', () => {
//   Alpine.data('dropdown_menu', () => ({
//     init() {
//       // collapse all submenus initially
//       this.$el.querySelectorAll('.sub-menu').forEach(ul => {
//         ul.style.maxHeight = null;
//         ul.style.overflow = 'hidden';
//       });

//       // attach click handlers to parent links
//       this.$el.querySelectorAll('.menu-item-has-children > a').forEach(link => {
//         const li = link.parentElement;
//         const submenu = link.nextElementSibling;
//         if (!submenu) return;

//         link.addEventListener('click', (e) => {
//           this.$el.querySelectorAll('.menu-item-has-children').forEach(other => {
//             if (other !== li) {
//               other.classList.remove('open');
//               const otherSub = other.querySelector('.sub-menu');
//               if (otherSub) otherSub.style.maxHeight = null;
//             }
//           });

//           // toggle this submenu
//           if (li.classList.contains('open')) {
//             li.classList.remove('open');
//             submenu.style.maxHeight = null;
//           } else {
//             li.classList.add('open');
//             submenu.style.maxHeight = submenu.scrollHeight + 'px';
//           }
//         }, { passive: false });
//       });

//       // ensure correct heights on resize
//       window.addEventListener('resize', () => {
//         this.$el.querySelectorAll('.menu-item-has-children.open > .sub-menu').forEach(ul => {
//           ul.style.maxHeight = ul.scrollHeight + 'px';
//         });
//       });
//     }
//   }));
// });

document.addEventListener('alpine:init', () => {
  Alpine.data('dropdown_menu', () => ({
    init() {
      // collapse all submenus initially
      this.$el.querySelectorAll('.sub-menu').forEach(ul => {
        ul.style.maxHeight = null;
        ul.style.overflow = 'hidden';
      });

      // attach span toggles inside parent links
      this.$el.querySelectorAll('.menu-item-has-children > a').forEach(link => {
        const li = link.parentElement;
        const submenu = link.nextElementSibling;
        if (!submenu) return;

        // create span toggle (like an arrow)
        const toggle = document.createElement('span');
        toggle.classList.add('submenu-toggle'); // add class for styling
        toggle.innerHTML = '<svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="#000"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-chevron-down"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M6 9l6 6l6 -6" /></svg>'; // you can replace with icon (SVG, font-awesome, etc.)
        link.appendChild(toggle);

        // click only works on span, not the <a>
        toggle.addEventListener('click', (e) => {
          e.preventDefault();
          e.stopPropagation();

          // close other submenus
          this.$el.querySelectorAll('.menu-item-has-children').forEach(other => {
            if (other !== li) {
              other.classList.remove('open');
              const otherSub = other.querySelector('.sub-menu');
              if (otherSub) otherSub.style.maxHeight = null;
            }
          });

          // toggle this submenu
          if (li.classList.contains('open')) {
            li.classList.remove('open');
            submenu.style.maxHeight = null;
          } else {
            li.classList.add('open');
            submenu.style.maxHeight = submenu.scrollHeight + 'px';
          }
        }, { passive: false });
      });

      // ensure correct heights on resize
      window.addEventListener('resize', () => {
        this.$el.querySelectorAll('.menu-item-has-children.open > .sub-menu').forEach(ul => {
          ul.style.maxHeight = ul.scrollHeight + 'px';
        });
      });
    }
  }));
});

// Script for loader
// Run when everything is fully loaded
window.addEventListener("load", function () {
  const loader = document.querySelector(".page_loader");
  loader.classList.add("hide");
});