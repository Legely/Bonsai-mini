document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.getElementById("menu-toggle");
    const menuDropdown = document.getElementById("menu-dropdown");
    const closeMenu = document.getElementById("close-menu");
    const tumblers = document.querySelectorAll(".tumbler"); // Получаем все элементы tumbler

    // Открытие меню 
    menuToggle.addEventListener("click", function (event) {
        event.stopPropagation(); // Остановка всплытия, чтобы меню не закрывалось сразу

        menuDropdown.style.display = "flex"; // Открываем меню

        // Скрываем все элементы с классом tumbler
        tumblers.forEach(tumbler => tumbler.style.display = "none");
    });

    // Закрытие меню по кнопке "Закрыть"
    closeMenu.addEventListener("click", function () {
        menuDropdown.style.display = "none";

        // Показываем обратно все элементы tumbler
        tumblers.forEach(tumbler => tumbler.style.display = "block");
    });

    // Закрытие при клике вне меню
    document.addEventListener("click", function (event) {
        if (!menuDropdown.contains(event.target) && !menuToggle.contains(event.target)) {
            menuDropdown.style.display = "none";

            // Показываем обратно tumbler при закрытии меню
            tumblers.forEach(tumbler => tumbler.style.display = "block");
        }
    });
});

function toggleAnswer(index) {
    const answer = document.getElementById('answer-' + index);
    const arrow = document.getElementsByClassName('arrow')[index];
  
    if (answer.style.display === 'none' || answer.style.display === '') {
      answer.style.display = 'block'; // Показать ответ
      arrow.style.transform = 'rotate(180deg)'; // Повернуть стрелку вверх
    } else {
      answer.style.display = 'none'; // Скрыть ответ
      arrow.style.transform = 'rotate(0deg)'; // Повернуть стрелку вниз
    }
  }