const checkPassword = () => {
  const password = document.getElementById('password').value;
  if (password === 'Doraemon') {
      document.querySelector('.login').style.display = 'none';
      document.querySelector('.container').style.display = 'block';
  } else {
      alert('Incorrect password. Please try again.');
  }
};

const createConfetti = () => {
  for (let i = 0; i < 100; i++) {
      const confetti = document.createElement('div');
      confetti.className = 'confetti';
      confetti.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 70%)`;
      confetti.style.left = `${Math.random() * 100}vw`;
      confetti.style.animationDuration = `${Math.random() * 2 + 3}s`;
      document.body.appendChild(confetti);
  }
};

const createFireworks = () => {
  for (let i = 0; i < 20; i++) {
      const firework = document.createElement('div');
      firework.className = 'fireworks';
      firework.style.left = `${Math.random() * 100}vw`;
      firework.style.top = `${Math.random() * 50}vh`;
      firework.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 70%)`;
      firework.style.animationDuration = `${Math.random() * 1 + 1}s`;
      document.body.appendChild(firework);
  }
};

createConfetti();
createFireworks();

const countdownElement = document.getElementById('countdown');
const targetDate = new Date('January 1, 2025 00:00:00').getTime();

const updateCountdown = () => {
  const now = new Date().getTime();
  const timeLeft = targetDate - now;

  const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

  countdownElement.textContent = `Countdown: ${days}d ${hours}h ${minutes}m ${seconds}s`;

  if (timeLeft < 0) {
      clearInterval(countdownTimer);
      countdownElement.textContent = "Happy New Year! 🎆";
  }
};

const countdownTimer = setInterval(updateCountdown, 1000);

const musicButton = document.getElementById('musicButton');
let audio = new Audio('https://www.bensound.com/bensound-music/bensound-happyrock.mp3');

musicButton.addEventListener('click', () => {
  if (audio.paused) {
      audio.play();
      musicButton.textContent = 'Pause Music 🎵';
  } else {
      audio.pause();
      musicButton.textContent = 'Play Music 🎵';
  }
});
const seasons = ['spring', 'summer', 'autumn', 'winter'];
let currentSeasonIndex = 0;

// Function to change the season
const changeSeason = () => {
    document.body.classList.remove(...seasons); // Remove all season classes
    document.body.classList.add(seasons[currentSeasonIndex]); // Add the current season class
    currentSeasonIndex = (currentSeasonIndex + 1) % seasons.length; // Cycle through seasons
};

// Change the background every 15 seconds
setInterval(changeSeason, 9000);

// Initialize with the first season
changeSeason();
