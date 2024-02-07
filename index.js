document.addEventListener("DOMContentLoaded", function () {
  const links = document.querySelectorAll("nav ul li a");

  links.forEach((link) => {
    link.addEventListener("click", function (event) {
      event.preventDefault();
      const nextPage = this.getAttribute("href");

      // Apply slide-in transition
      document.body.style.animation = "slideInRight 0.5s forwards";

      // Wait for the animation to complete before navigating to the next page
      setTimeout(function () {
        window.location.href = nextPage;
      }, 500); // Adjust the delay to match the animation duration
    });
  });
});
