// Add any interactive JS elements here. For the basic portfolio, there might not be a need for much JavaScript.
// However, you could add things like a button to toggle dark mode, etc.
// Below is an example of such a button.

// document.getElementById("darkModeButton").addEventListener("click", () => {
//   document.body.classList.toggle("dark-mode");
// });

/* main.js */

// Animate scroll to sections when clicking on header menu links
document.querySelectorAll("header a").forEach((link) => {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});
