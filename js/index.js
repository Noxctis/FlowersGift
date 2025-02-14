document.addEventListener("DOMContentLoaded", () => {
  // Fix the title text by trimming whitespace before splitting
  const title = document.querySelector('.title');
  if (title) {
    const text = '❤️'.trim().split('');
    title.innerHTML = ""; // Clear any existing content
    text.forEach((char) => {
      if (char !== ' ') {
        title.innerHTML += `<span style="--delay: ${Math.random() * 3}s;">${char}</span>`;
      } else {
        title.innerHTML += `<span style="margin-right: 20px;"></span>`;
      }
    });
  }

  // Yes button click event: redirect without showing a URL on hover
  const yesButton = document.querySelector('.yes-btn');
  if (yesButton) {
    yesButton.addEventListener('click', () => {
      window.location.href = 'flower.html';
    });
  }

  // Original No button behavior:
  const originalNoButton = document.querySelector('.no-btn');
  if (originalNoButton) {
    originalNoButton.addEventListener('mouseenter', function () {
      // Hide the original No button on first hover
      originalNoButton.style.display = 'none';
      // Create a new floating No button
      createFloatingNoButton();
    });
  }

  // Floating Hearts Functionality
  const heartsContainer = document.querySelector(".hearts-container");
  function createHeart() {
    const heart = document.createElement("div");
    heart.classList.add("heart");
    heart.innerHTML = "💖";
    // Random positioning
    heart.style.left = `${Math.random() * 100}vw`;
    heart.style.animationDuration = `${Math.random() * 3 + 2}s`; // Between 2s and 5s
    heartsContainer.appendChild(heart);
    // Remove heart after animation
    setTimeout(() => {
      heart.remove();
    }, 4000);
  }
  // Generate a heart every 500ms
  setInterval(createHeart, 500);
});

// Function to create a new floating No button that moves on hover
function createFloatingNoButton() {
  const newNoButton = document.createElement('a');
  newNoButton.classList.add('btn', 'no-btn');
  newNoButton.href = '#';
  newNoButton.innerHTML = `<svg height="24" width="24" fill="#FFFFFF" viewBox="0 0 24 24" data-name="Layer 1" class="sparkle">
      <path d="M10,21.236,6.755,14.745.264,11.5,6.755,8.255,10,1.764l3.245,6.491L19.736,11.5l-6.491,3.245ZM18,21l1.5,3L21,21l3-1.5L21,18l-1.5-3L18,18l-3,1.5ZM19.333,4.667,20.5,7l1.167-2.333L24,3.5,21.667,2.333,20.5,0,19.333,2.333,17,3.5Z"></path>
    </svg>
    <span class="text">No</span>`;

  // Set style for floating behavior
  newNoButton.style.position = 'absolute';
  newNoButton.style.transition = 'all 0.3s ease-in-out';

  // Place at a random location with a 10% margin from each edge
  const margin = 10; // margin in viewport units
  const randomLeft = margin + Math.random() * (100 - 2 * margin);
  const randomTop = margin + Math.random() * (100 - 2 * margin);
  newNoButton.style.left = `${randomLeft}vw`;
  newNoButton.style.top = `${randomTop}vh`;

  document.body.appendChild(newNoButton);

  // On hover, move to a new random location (with a 10% margin from edges)
  newNoButton.addEventListener('mouseenter', function () {
    const newLeft = margin + Math.random() * (100 - 2 * margin);
    const newTop = margin + Math.random() * (100 - 2 * margin);
    newNoButton.style.left = `${newLeft}vw`;
    newNoButton.style.top = `${newTop}vh`;
  });
}
