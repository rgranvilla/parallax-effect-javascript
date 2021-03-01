function parallax(element, distance, speed) {
  const item = document.querySelector(element);

  item.style.transform = `translateY(${distance * speed}px)`;
}

window.addEventListener("scroll", function () {
  parallax("header", window.scrollY, 1);
  parallax(".small-rose", window.scrollY, 1.5);
  parallax(".big-rose", window.scrollY, 0.2);
  parallax(".intro-text h1", window.scrollY, -0.6);
  parallax(".intro-text h3", window.scrollY, -0.62);
  parallax(".show h1", window.scrollY, -0.2);
});
