const loveLetterLines = [
  "Hello, my starlight ✨",
  "SAHIBA",
  "I wrote this in the language of love and code. 💌",
  "Every tag is a memory, every loop is a heartbeat. ❤️",
  "You're the CSS to my HTML, you make life beautiful. 💄",
  "With every click, I fall for you again. 🖱️💘",
  "So here I am, coding this just for you. 💻✨"
];

const teasingLines = [
  "Really? You monster. 😩",
  "Ouch, that hurt. 💔",
  "You're kidding, right? 😅",
  "You heartbreaker. 😭",
  "I can’t believe this. 😳",
  "Is this a <b>bug</b> in my <i>love code</i>? 🐞💘",
  "You’re just being <strong>dramatic</strong>... 😜",
  "That’s it. I’m calling <i>tech support</i>. 🤖"
];

const app = document.getElementById('app');

// 🆕 Helper to update tagline in the header
function setTagline(text) {
  const tagline = document.getElementById('page-tagline');
  if (tagline) tagline.textContent = text;
}

function typeText(html, callback) {
  let i = 0;
  app.innerHTML = '<p class="typewriter"></p>';
  const p = document.querySelector('.typewriter');

  const typer = setInterval(() => {
    p.innerHTML += html.charAt(i);
    i++;
    if (i >= html.length) {
      clearInterval(typer);
      if (callback) callback();
    }
  }, 40);
}

function showIntro() {
  setTagline("Welcome to the code of my heart 💌"); // 🆕 Tagline
  typeText("🌙 My Dear Love, I'm here to code my feelings for you... 💻❤️", () => {
    const btn = document.createElement("button");
    btn.textContent = "Read My Heart 💖";
    btn.onclick = showLetter;
    app.appendChild(btn);
  });
}

function showLetter() {
  setTagline("A letter from my heart, typed in love ✍️💖"); // 🆕 Tagline
  app.innerHTML = "";
  let i = 0;

  function showLine() {
    if (i < loveLetterLines.length) {
      const p = document.createElement("p");
      p.className = "typewriter";
      p.innerHTML = "";
      app.appendChild(p);

      let j = 0;
      const line = loveLetterLines[i];
      const typer = setInterval(() => {
        p.innerHTML += line.charAt(j);
        j++;
        if (j >= line.length) {
          clearInterval(typer);
          i++;
          setTimeout(showLine, 800);
        }
      }, 30);
    } else {
      const btn = document.createElement("button");
      btn.textContent = "Did It Touch You? 💘";
      btn.onclick = showQuestion;
      app.appendChild(btn);
    }
  }

  showLine();
}

function showQuestion() {
  setTagline("Does my love compile in your heart? 💘"); // 🆕 Tagline
  app.innerHTML = 'Did that make your heart smile? 😊';
  const div = document.createElement("div");
  div.className = "button-group";

  const yesBtn = document.createElement("button");
  yesBtn.textContent = "Absolutely! ❤️";
  yesBtn.onclick = () => {
    app.innerHTML = 'Aww, I knew it! You are my dream come true. 🥰</p>';
    const btn = document.createElement("button");
    btn.textContent = "One Last Line 💌";
    btn.onclick = showFinalMessage;
    app.appendChild(btn);
  };

  const noBtn = document.createElement("button");
  noBtn.textContent = "Nah 😅";
  let count = 0;

  noBtn.onclick = () => {
    const message = teasingLines[Math.min(count++, teasingLines.length - 1)];
    app.innerHTML = `<p class="typewriter">${message}</p>`;
    app.appendChild(div);
    div.appendChild(yesBtn);
    div.appendChild(noBtn);
    if (count === teasingLines.length) {
      setTimeout(() => {
        app.innerHTML = `I know you're teasing me... but you care. 😄❤️</p>`;
        const btn = document.createElement("button");
        btn.textContent = "One Last Line 💌";
        btn.onclick = showFinalMessage;
        app.appendChild(btn);
      }, 1000);
    }
  };

  div.appendChild(yesBtn);
  div.appendChild(noBtn);
  app.appendChild(div);
}

function showFinalMessage() {
  setTagline("You are the end tag of my love story 🫶"); // 🆕 Tagline
  app.innerHTML = "";
  typeText("Thank you, my gorgeous. You're my favorite line of code. 💖");
}

document.addEventListener("DOMContentLoaded", showIntro);
