document.addEventListener("DOMContentLoaded", function() {
  var h1 = document.querySelector('h1');
  var options = {
    root: null,  // относительно вьюпорта
    rootMargin: '0px',
    threshold: 0.1  // Значение порога для срабатывания observer
  };

  function handleIntersect(entries, observer) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // Применяем анимацию, когда элемент входит в область видимости
        h1.style.webkitAnimation = 'anim 1.2s ease-out forwards';
        h1.style.animation = 'anim 1.2s ease-out forwards';
      } else {
        // Сбрасываем анимацию, когда элемент выходит из области видимости
        h1.style.webkitAnimation = 'none';
        h1.style.animation = 'none';
      }
    });
  }

  var observer = new IntersectionObserver(handleIntersect, options);
  observer.observe(h1);
});

document.addEventListener('DOMContentLoaded', function() {
  var options = {
    strings: ["DESIGNER", "DEVELOPER", "CREATIVE", "IMPULS"],
    typeSpeed: 50,
    backSpeed: 25,
    backDelay: 2000,
    startDelay: 500,
    showCursor: false,
    loop: false,
    onComplete: function() {
      document.querySelector('#animated-text').textContent = 'IMPULS';
    }
  };

  var typed; // Переменная для хранения экземпляра Typed.js

  var observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 1.0
  };

  var observer = new IntersectionObserver(function(entries, observer) {
    entries.forEach(function(entry) {
      if (entry.isIntersecting) {
        if (typed) {
          typed.destroy(); // Уничтожаем предыдущий экземпляр Typed.js
        }
        typed = new Typed("#animated-text", options); // Создаем новый экземпляр Typed.js
      }
    });
  }, observerOptions);

  observer.observe(document.querySelector('#animated-text'));

  $('.hero-down').mousedown(function() {
    gsap.fromTo('.btn-react', { opacity: 0, scale: 0 }, { opacity: 0.25, scale: 1, duration: 0.25, onComplete: function() {
        gsap.to('.btn-react', { opacity: 0, scale: 0, duration: 0.25 });
      }
    });
  });

  // smooth scroll to div
  $('a[href*="#"]').not('a[href="#"]').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html,body').animate({ scrollTop: target.offset().top }, 1000);
        return false;
      }
    }
  });
});