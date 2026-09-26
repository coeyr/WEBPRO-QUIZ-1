const carousel_container = document.getElementById("carousel");

if (carousel_container) {

    const slides = JSON.parse(
        carousel_container.dataset.slides
    );

    const carousel = document.getElementById("carousel_image");
    const prev_button = document.getElementById("prev_button");
    const next_button = document.getElementById("next_button");
    const indicator = document.getElementById("indicator");

    const carousel_text = document.getElementById("carousel_text");
    const carousel_title = document.getElementById("carousel_title");
    const carousel_description = document.getElementById("carousel_description");

    let current_index = 0;

    function updateCarousel() {

        carousel.src = slides[current_index].image;

        if (carousel_title) {
            carousel_title.textContent =
                slides[current_index].title;
        }

        if (carousel_description) {
            carousel_description.textContent =
                slides[current_index].description;
        }

        indicator.textContent =
            `${current_index + 1} / ${slides.length}`;
    }

    function changeSlide(direction) {

        carousel.classList.add("opacity-0");

        if (carousel_text) {
            carousel_text.classList.add("opacity-0");
        }

        setTimeout(function () {

            current_index += direction;

            if (current_index >= slides.length) {
                current_index = 0;
            }

            if (current_index < 0) {
                current_index = slides.length - 1;
            }

            updateCarousel();

            carousel.classList.remove("opacity-0");

            if (carousel_text) {
                carousel_text.classList.remove("opacity-0");
            }

        }, 300);
    }

    next_button.addEventListener("click", function () {
        changeSlide(1);
    });

    prev_button.addEventListener("click", function () {
        changeSlide(-1);
    });

}