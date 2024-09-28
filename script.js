var swiper = new Swiper(".mySwiper", {
    loop:"true",
  slidesPerView: 4,
  spaceBetween: 30,
  autoplay: {
    delay: 500, // Delay between slides (in ms)
    disableOnInteraction: false, // Continue autoplay after user interactions
}});