document.addEventListener('DOMContentLoaded', () => {
    const confettiContainer = document.createElement('div');
    confettiContainer.id = 'confetti-container';
    document.body.appendChild(confettiContainer);

    const colors = ['#f94144', '#f3722c', '#f8961e', '#f9c74f', '#90be6d', '#43aa8b', '#577590'];

    function createConfetti() {
        const confetti = document.createElement('div');
        confetti.classList.add('confetti');

        const size = Math.random() * 10 + 5 + 'px';
        confetti.style.width = size;
        confetti.style.height = size;
        confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        confetti.style.left = Math.random() * 100 + 'vw';
        confetti.style.animationDuration = Math.random() * 3 + 2 + 's'; // Between 2s and 5s
        confetti.style.opacity = Math.random();

        confettiContainer.appendChild(confetti);

        // Remove confetti after animation finishes to keep DOM clean
        setTimeout(() => {
            confetti.remove();
        }, 5000);
    }

    // Spawn confetti constantly
    setInterval(createConfetti, 150);
});