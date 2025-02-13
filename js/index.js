document.addEventListener("DOMContentLoaded", () => {
  const title = document.querySelector('.title');
  if (!title) return; // Avoid errors if element is missing

  const text = '❤️'.split('');
  text.forEach((char, index) => {
      if (char !== ' ') {
          title.innerHTML += `<span style="--delay: ${Math.random() * 3}s;">${char}</span>`;
      } else {
          title.innerHTML += `<span style="margin-right: 20px;"></span>`;
      }
  });
});

const textElements = document.querySelectorAll('.title span');
textElements.forEach((element) => {
  const randomDelay = Math.random() * 3; // Menghasilkan delay acak antara 0 hingga 3 detik
  element.style.animationDelay = `${randomDelay}s`;
});

document.addEventListener("DOMContentLoaded", () => {
  const heartsContainer = document.querySelector(".hearts-container");

  function createHeart() {
      const heart = document.createElement("div");
      heart.classList.add("heart");
      heart.innerHTML = "💖"; // You can change this to other heart symbols like 💖 or 💕
      
      // Random positioning
      heart.style.left = `${Math.random() * 100}vw`;
      heart.style.animationDuration = `${Math.random() * 3 + 2}s`; // Between 2s to 5s

      heartsContainer.appendChild(heart);

      // Remove heart after animation
      setTimeout(() => {
          heart.remove();
      }, 4000);
  }

  // Generate a heart every 500ms
  setInterval(createHeart, 500);
});

