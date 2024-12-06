const carousel = document.querySelector(".carousel");
const nextBtn = document.querySelector(".next-btn");
const books = document.querySelectorAll(".book");

let currentIndex = 0;

nextBtn.addEventListener("click", () => {
    const totalBooks = books.length;
    const visibleBooks = 3;

    //botão em loop (pra frente e retona)
    if (currentIndex < totalBooks - visibleBooks) {
        currentIndex++;
    } else {
        currentIndex = 0; // faz voltar?
    }
    updateCarousel();
});

function updateCarousel() {
    const bookWidth = books[0].offsetWidth + 20; // o espaço dos livros
    carousel.style.transform = `translateX(-${currentIndex * bookWidth}px)`;
}

// Coraçõeszinhos do meu coração funciona por favor
function toggleFavorite(element) {
    element.classList.toggle("favorited");
    element.textContent = element.classList.contains("favorited") ? "♥" : "♡";
}
