class Carousel {
    constructor(containerSelector) {
        this.container = containerSelector;
        this.track = containerSelector.querySelector('.carousel-container');
        this.controls = containerSelector.querySelector('.carousel_controls');
        this.cards = this.container.querySelectorAll(".card");
        this.prevButton = this.container.querySelector(".button--prev");
        this.nextButton = this.container.querySelector(".button--next");
        this.cardWidth = this.cards[0].offsetWidth + 10;
        this.currentIndex = 0;

        this.initEvents();
    }

    initEvents() {
        this.controls.style.display = 'grid';
        this.nextButton.addEventListener("click", () => this.moveToNext());
        this.prevButton.addEventListener("click", () => this.moveToPrev());
      }


    moveToNext() {
        if (this.currentIndex < this.cards.length - 1) {
            this.currentIndex++;
            this.updateTransform();
        }
    }

    moveToPrev() {
        if (this.currentIndex > 0) {
            this.currentIndex--;
            this.updateTransform();
        }
    }

    updateTransform() {
        const offset = this.cardWidth * this.currentIndex;
        this.track.style.transform = `translateX(-${offset}px)`;
    }
}

const carousels = document.querySelectorAll('.carousel');

if(carousels.length) {
    carousels.forEach(carousel => carousel.cards = carousel.querySelectorAll('.card').length);
}
console.log(carousels);

// Determnine if cards are greater than the viewport

// Initiate the carousels
carousels.forEach(carousel => new Carousel(carousel));

