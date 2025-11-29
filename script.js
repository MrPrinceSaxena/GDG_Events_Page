// ====== Countdown Timer ======
// Set a mock event date (YYYY-MM-DDTHH:MM:SS)
const eventDate = new Date("2026-01-10T10:00:00");

function updateCountdown() {
  const now = new Date();
  const diff = eventDate - now;

  const daysEl = document.getElementById("days");
  const hoursEl = document.getElementById("hours");
  const minutesEl = document.getElementById("minutes");
  const secondsEl = document.getElementById("seconds");
  const noteEl = document.getElementById("countdown-note");

  if (diff <= 0) {
    daysEl.textContent = "00";
    hoursEl.textContent = "00";
    minutesEl.textContent = "00";
    secondsEl.textContent = "00";
    noteEl.textContent = "The event is live or has already ended 🎉";
    return;
  }

  const seconds = Math.floor(diff / 1000);
  const days = Math.floor(seconds / (3600 * 24));
  const hours = Math.floor((seconds % (3600 * 24)) / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  const secs = seconds % 60;

  daysEl.textContent = String(days).padStart(2, "0");
  hoursEl.textContent = String(hours).padStart(2, "0");
  minutesEl.textContent = String(minutes).padStart(2, "0");
  secondsEl.textContent = String(secs).padStart(2, "0");

  noteEl.textContent = "";
}

updateCountdown();
setInterval(updateCountdown, 1000);

// ====== Theme Toggle (dark / light) ======
const rootHtml = document.documentElement;
const themeToggleBtn = document.getElementById("theme-toggle");

function setTheme(theme) {
  rootHtml.setAttribute("data-theme", theme);
  themeToggleBtn.textContent = theme === "dark" ? "🌙" : "☀️";
  localStorage.setItem("gdg-theme", theme);
}

// Load saved theme
const savedTheme = localStorage.getItem("gdg-theme");
if (savedTheme === "light" || savedTheme === "dark") {
  setTheme(savedTheme);
} else {
  setTheme("dark");
}

themeToggleBtn.addEventListener("click", () => {
  const current = rootHtml.getAttribute("data-theme");
  setTheme(current === "dark" ? "light" : "dark");
});

// ====== Registration Form Handling ======
const form = document.getElementById("registration-form");
const successBox = document.getElementById("form-success");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const formData = new FormData(form);
  const name = formData.get("name");
  const email = formData.get("email");
  const college = formData.get("college");
  const interest = formData.get("interest");

  // Just for your understanding, we log this:
  console.log("Form submission:", { name, email, college, interest });

  // Show fake success / email simulation
  successBox.classList.remove("hidden");

  // Optionally clear form
  form.reset();

  // Restore default interest
  document.getElementById("interest").value = "";
});
