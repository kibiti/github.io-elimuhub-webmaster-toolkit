// -------------------------------------------
// Elimuhub Webmaster Toolkit JS
// -------------------------------------------

console.log("✅ Elimuhub Webmaster Toolkit loaded successfully.");

// Highlight active menu item based on current page
document.addEventListener("DOMContentLoaded", () => {
  const currentPath = window.location.pathname;
  const navLinks = document.querySelectorAll("header nav a");

  navLinks.forEach(link => {
    if (currentPath.includes(link.getAttribute("href"))) {
      link.style.fontWeight = "bold";
      link.style.color = "#ffdd00";
    }
  });

  // Optional: Smooth scroll for in-page links
  const internalLinks = document.querySelectorAll('a[href^="#"]');
  internalLinks.forEach(link => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const target = document.querySelector(link.getAttribute("href"));
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
      }
    });
  });

  // Optional: Toggle checklist items (if using class "checklist")
  const checklistItems = document.querySelectorAll("ul.checklist li");
  checklistItems.forEach(item => {
    item.addEventListener("click", () => {
      item.classList.toggle("done");
    });
  });
});
