document.addEventListener('DOMContentLoaded', function() {
    const slider = document.getElementById('slider');
    const sliderWidth = slider.scrollWidth;
    const clone = slider.innerHTML;
    slider.innerHTML += clone; // Дублируем содержимое
  
    let speed = 0.5; // скорость анимации (чем больше значение, тем быстрее анимация)
    let x = 0;
  
    function animate() {
      x -= speed;
      if (x <= -sliderWidth) {
        x = 0;
      }
      slider.style.transform = `translateX(${x}px)`;
      requestAnimationFrame(animate);
    }
  
    animate();
  });
  





  