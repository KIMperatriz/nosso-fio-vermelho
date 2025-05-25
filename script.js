const startDate = new Date("2024-12-30");
const counter = document.getElementById("contador");

function updateCounter() {
  const now = new Date();
  const diffTime = Math.abs(now - startDate);
  const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
  counter.innerText = diffDays + " dias";
}

updateCounter();
setInterval(updateCounter, 1000);

$('.slider').slick({
  autoplay: true,
  autoplaySpeed: 3000,
  arrows: false,
  dots: true,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1
      }
    }
  ]
});
