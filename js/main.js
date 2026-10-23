const root = document.documentElement;
const header = document.querySelector(".site-header");

// Light/dark theme toggle. The choice is saved so it is used on the next visit;
// until the visitor picks one, the site follows the device's setting.
const themeToggle = header.querySelector(".theme-toggle");
const systemPrefersDark = window.matchMedia("(prefers-color-scheme: dark)");

function currentTheme() {
  return root.dataset.theme || (systemPrefersDark.matches ? "dark" : "light");
}

function updateThemeToggle() {
  themeToggle.setAttribute("aria-pressed", String(currentTheme() === "dark"));
}

themeToggle.addEventListener("click", () => {
  const nextTheme = currentTheme() === "dark" ? "light" : "dark";
  root.dataset.theme = nextTheme;
  try {
    localStorage.setItem("theme", nextTheme);
  } catch (error) {
    // Storage blocked: the theme still changes, it just won't be remembered.
  }
  updateThemeToggle();
});

systemPrefersDark.addEventListener("change", updateThemeToggle);
updateThemeToggle();

// Menu button for narrow screens: opens and closes the navigation.
const menuToggle = header.querySelector(".menu-toggle");

function setMenuOpen(open) {
  header.classList.toggle("menu-open", open);
  menuToggle.setAttribute("aria-expanded", String(open));
}

menuToggle.addEventListener("click", () => {
  setMenuOpen(!header.classList.contains("menu-open"));
});

// Escape closes an open menu and returns focus to the menu button.
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && header.classList.contains("menu-open")) {
    setMenuOpen(false);
    menuToggle.focus();
  }
});
