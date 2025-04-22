class Carousel {
    constructor(containerSelector) {
        this.container = containerSelector;
        this.track = containerSelector.querySelector('.carousel-container');
        this.controls = containerSelector.querySelector('.carousel_controls');
        this.cards = this.container.querySelectorAll(".card");
        this.prevButton = this.container.querySelector(".button--prev");
        this.nextButton = this.container.querySelector(".button--next");
        this.cardWidth = this.cards[0].offsetWidth;
        this.currentIndex = 0;

        this.initEvents();
    }

    initEvents() {
        this.controls.style.display = 'grid';
        this.prevButton.addEventListener("click", () => this.moveTo(this.currentIndex - 1));
        this.nextButton.addEventListener("click", () => this.moveTo(this.currentIndex + 1));
        this.container.addEventListener("keydown", (e) => this.onKeyDown(e));
      }


      moveTo(index) {
        const maxOffset = this.track.scrollWidth - this.container.offsetWidth;
        const targetOffset = Math.min(index * this.cardWidth, maxOffset);
      
        this.currentIndex = Math.round(targetOffset / this.cardWidth);
        this.track.style.transform = `translateX(-${targetOffset}px)`;
        this.track.style.transition = 'transform 0.4s ease-in-out';
      
        this.cards[this.currentIndex].focus?.();
      }

    onKeyDown(e) {
        if (e.key === 'ArrowRight') {
          e.preventDefault();
          this.moveTo(this.currentIndex + 1);
        } else if (e.key === 'ArrowLeft') {
          e.preventDefault();
          this.moveTo(this.currentIndex - 1);
        }
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

