window.addEventListener("load", () => {
  // Delay the start by 1 second
  setTimeout(() => {
    // Remove the "not-loaded" class to trigger any CSS transitions
    document.body.classList.remove("not-loaded");

    // Define the message to display and get the title element
    // const message = "Happy Girlfriends Day 💓";
    const titleElement = document.getElementById("title");

    if (!titleElement) {
      console.error("Title element not found!");
      return;
    }

    let index = 0;
    const letterDelay = 300; // delay in milliseconds between letters

    // Recursively append each letter to the title element
    const typeLetter = () => {
      if (index < message.length) {
        titleElement.textContent += message[index];
        index++;
        setTimeout(typeLetter, letterDelay);
      }
    };

    typeLetter();
  }, 1000);
});
