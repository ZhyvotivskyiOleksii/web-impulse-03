const reviews = [
  {
    name: 'Anna',
    stars: 5,
    text: 'Zdecydowałam się na stworzenie strony internetowej z tą firmą i jestem bardzo zadowolona z rezultatów. Zespół był niezwykle profesjonalny i cierpliwie słuchał wszystkich moich uwag oraz sugestii. Strona wygląda nowocześnie i jest bardzo funkcjonalna. Dziękuję za świetną współpracę i na pewno polecę wasze usługi znajomym!',
  },
  {
    name: 'Віталій',
    stars: 4,
    text: 'Замовив розробку сайту у цієї компанії і залишився дуже задоволений результатом. Вони врахували всі мої побажання і навіть запропонували кілька цікавих ідей, які зробили сайт ще кращим. Рекомендую всім, хто шукає професійних розробників!',
  },
  {
    name: 'Олег',
    stars: 5,
    text: 'Професійний підхід та висока якість виконання робіт. Мій сайт тепер виглядає сучасно і зручно для користувачів. Дуже вдячний за швидке виконання замовлення та постійну підтримку після завершення робіт. Дякую!',
  },
  {
    name: 'Jan',
    stars: 3,
    text: 'Średnio zadowolony. Mogło być lepiej.',
  },
  {
    name: 'Kasia',
    stars: 5,
    text: 'Profesjonalna usługa, polecam każdemu.',
  },
  {
    name: 'Дмитро',
    stars: 4,
    text: 'Довго шукав надійну компанію для створення сайту і нарешті знайшов. Дуже задоволений співпрацею: сайт розробили швидко, врахували всі мої побажання і надали корисні рекомендації. Тепер мій бізнес представлений в інтернеті на високому рівні. Дякую!',
  },
  {
    name: 'Віктор',
    stars: 5,
    text: 'Велике дякую за чудову роботу! Розробка сайту пройшла без проблем, всі деталі були враховані. Особливо хочу відзначити увагу до деталей і вміння працювати з клієнтом. Сайт отримав багато позитивних відгуків від моїх клієнтів. Рекомендую!',
  },
  {
    name: 'Олена',
    stars: 4,
    text: 'Дуже задоволена співпрацею з цією компанією! Вони допомогли мені створити сайт для мого малого бізнесу, і результат перевершив мої очікування. Команда була уважною до всіх моїх побажань, швидко вносила корективи і запропонувала багато корисних ідей. Сайт виглядає стильно і професійно, працює бездоганно. Велике дякую за чудову роботу!',
  }
];

let currentReview = 0;

function showReview(index) {
  const review = reviews[index];
  document.querySelector('.review-name').textContent = review.name;
  const starsContainer = document.querySelector('.review-stars');
  starsContainer.innerHTML = '';
  for (let i = 0; i < 5; i++) {
    const star = document.createElement('img');
    star.src = i < review.stars ? './svg/star.svg' : './svg/star-empty.svg';
    starsContainer.appendChild(star);
  }
  document.querySelector('.review-text').textContent = review.text;
}

document.querySelector('.prev').addEventListener('click', () => {
  currentReview = (currentReview === 0) ? reviews.length - 1 : currentReview - 1;
  showReview(currentReview);
});

document.querySelector('.next').addEventListener('click', () => {
  currentReview = (currentReview === reviews.length - 1) ? 0 : currentReview + 1;
  showReview(currentReview);
});

document.getElementById('leaveReviewButton').addEventListener('click', function() {
    // Замініть URL нижче на реальний URL вашої сторінки Google відгуків
    const googleReviewUrl = 'https://g.page/r/CTMFEnoKzH3xEB0/review';
    window.open(googleReviewUrl, '_blank');
});

document.getElementById('allReviewsButton').addEventListener('click', function() {
    // Замініть URL нижче на URL сторінки з усіма відгуками на вашому сайті
    const allReviewsPageUrl = 'https://www.web-impuls.com/reviews.html?lang=uk';
    window.location.href = allReviewsPageUrl;
});

// Показать первый отзыв при загрузке страницы
showReview(currentReview);
