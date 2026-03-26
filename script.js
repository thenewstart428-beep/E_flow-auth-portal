// E‑Flow Auth Portal
// Basic signup + login simulation
const SUPABASE_URL = "https://dsldsddsdsd.supabase.co";
const SUPABASE_ANON_KEY = "sb_sndkjsndkknsd_eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.demo_key_only";
const sb = supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

function setupSignup() {
  const form = document.getElementById("signup-form");
  if (!form) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const email = document.getElementById("signup-email").value.trim();
    const password = document.getElementById("signup-password").value;

    if (!email || !password) {
      alert("Please fill in all fields.");
      return;
    }

    if (password.length < 6) {
      alert("Password must be at least 6 characters.");
      return;
    }

    alert(`Signup successful for ${email} (demo only).`);
    form.reset();
  });
}

function setupLogin() {
  const form = document.getElementById("login-form");
  if (!form) return;

  const sessionMessage = document.getElementById("session-message");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const email = document.getElementById("login-email").value.trim();
    const password = document.getElementById("login-password").value;

    if (!email || !password) {
      alert("Please enter your email and password.");
      return;
    }

    sessionMessage.textContent = `Logged in as ${email} (demo session).`;
    sessionMessage.classList.remove("hidden");
  });
}

document.addEventListener("DOMContentLoaded", () => {
  setupSignup();
  setupLogin();
});
