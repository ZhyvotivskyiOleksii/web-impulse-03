document.addEventListener("DOMContentLoaded", function() {
  var h1 = document.querySelector('h1');
  var animatedText = document.querySelector('#animated-text');

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

  // Настройка Typed.js
  var typedOptions = {
    strings: ["DESIGNER", "DEVELOPER", "CREATIVE", "IMPULS"],
    typeSpeed: 50,
    backSpeed: 25,
    backDelay: 2000,
    startDelay: 500,
    showCursor: false,
    loop: false,
    onComplete: function() {
      animatedText.textContent = 'IMPULS';
    }
  };

  var typed;
  var observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 1.0
  };

  var textObserver = new IntersectionObserver(function(entries, observer) {
    entries.forEach(function(entry) {
      if (entry.isIntersecting) {
        if (typed) {
          typed.destroy(); // Уничтожаем предыдущий экземпляр Typed.js
        }
        typed = new Typed("#animated-text", typedOptions); // Создаем новый экземпляр Typed.js
      }
    });
  }, observerOptions);

  textObserver.observe(animatedText);

  // GSAP анимация
  $('.hero-down').mousedown(function() {
    gsap.fromTo('.btn-react', { opacity: 0, scale: 0 }, { opacity: 0.25, scale: 1, duration: 0.25, onComplete: function() {
      gsap.to('.btn-react', { opacity: 0, scale: 0, duration: 0.25 });
    }});
  });

  // Плавная прокрутка к элементу
  $('a[href*="#"]').not('a[href="#"]').click(function(event) {
    event.preventDefault();
    var target = this.hash;
    var $target = $(target);

    if ($target.length) {
      $('html, body').stop().animate({
        scrollTop: $target.offset().top
      }, 1000, 'swing', function() {
        window.location.hash = target;
      });
    }
  });
});