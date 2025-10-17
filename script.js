// Theme toggle
const themeBtn = document.querySelector("#themeBtn");
themeBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark");
});

// Skills list
const skills = ["HTML", "CSS", "JavaScript", "React", "Git", "Responsive Design"];
const skillList = document.querySelector("#skillList");

skills.forEach(skill => {
  const li = document.createElement("li");
  li.textContent = skill;
  skillList.appendChild(li);
});

// Random skill feature
const randomSkillBtn = document.querySelector("#randomSkillBtn");
const randomSkill = document.querySelector("#randomSkill");

randomSkillBtn.addEventListener("click", () => {
  const random = skills[Math.floor(Math.random() * skills.length)];
  randomSkill.textContent = `👉 ${random}`;
});

// Quote API
const quoteBtn = document.querySelector("#quoteBtn");
const quote = document.querySelector("#quote");

quoteBtn.addEventListener("click", async () => {
  quote.textContent = "Loading...";
  try {
    const res = await fetch("https://api.quotable.io/random?tags=technology");
    const data = await res.json();
    quote.textContent = `"${data.content}" — ${data.author}`;
  } catch (err) {
    quote.textContent = "Failed to load quote 😢";
  }
});
