// Runs before the page is drawn, so a saved theme applies without a flash.
// The "js" class tells the CSS that the menu and theme buttons will work.
document.documentElement.classList.add("js");
try {
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === "light" || savedTheme === "dark") {
    document.documentElement.dataset.theme = savedTheme;
  }
} catch (error) {
  // Storage can be blocked (e.g. private browsing); fall back to the system theme.
}
