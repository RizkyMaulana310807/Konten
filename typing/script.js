// Daftar teks yang akan ditampilkan secara bergantian
const texts = ["Web Developer", "Mockup Design Dengan Figma", "IT Support / Consultant"];
let currentTextIndex = 0;
    let currentCharIndex = 0;
    let isDeleting = false;
    const typingSpeed = 150;
    const deletingSpeed = 50;
    const delayBetweenTexts = 2000;

    function type() {
      const typingTextElement = document.getElementById("typing");
      const currentText = texts[currentTextIndex];

      if (isDeleting) {
        typingTextElement.textContent = currentText.substring(0, currentCharIndex - 1);
        currentCharIndex--;

        if (currentCharIndex === 0) {
          isDeleting = false;
          currentTextIndex = (currentTextIndex + 1) % texts.length;
          setTimeout(type, typingSpeed);
        } else {
          setTimeout(type, deletingSpeed);
        }
      } else {
        typingTextElement.textContent = currentText.substring(0, currentCharIndex + 1);
        currentCharIndex++;

        if (currentCharIndex === currentText.length) {
          isDeleting = true;
          setTimeout(type, delayBetweenTexts);
        } else {
          setTimeout(type, typingSpeed);
        }
      }
    }

    document.addEventListener("DOMContentLoaded", () => {
      type();
    });