// === DARK / LIGHT MODE TOGGLE ===
const themeBtn = document.getElementById("theme-toggle");
const body = document.body;

// Check local storage
const savedTheme = localStorage.getItem("theme");
if (savedTheme) {
  body.className = savedTheme;
  updateIcon(savedTheme);
} else {
  body.classList.add("dark");
}

// Toggle theme
themeBtn.addEventListener("click", () => {
  if (body.classList.contains("dark")) {
    body.classList.replace("dark", "light");
    localStorage.setItem("theme", "light");
    updateIcon("light");
  } else {
    body.classList.replace("light", "dark");
    localStorage.setItem("theme", "dark");
    updateIcon("dark");
  }
});

// Update icon based on mode
function updateIcon(mode) {
  if (mode === "light") {
    themeBtn.innerHTML = "<i class='bx bx-moon'></i>";
  } else {
    themeBtn.innerHTML = "<i class='bx bx-sun'></i>";
  }
}
