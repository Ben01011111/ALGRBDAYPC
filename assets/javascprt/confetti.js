function createConfetti() {
    const confettiCount = 10;
    const confettiContainer = document.createElement('div');
    confettiContainer.style.position = 'absolute';
    confettiContainer.style.width = '100%';
    confettiContainer.style.height = '100%';
    confettiContainer.style.top = '0';
    confettiContainer.style.left = '0';
    confettiContainer.style.pointerEvents = 'none';
    document.body.appendChild(confettiContainer);

    for (let i = 0; i < confettiCount; i++) {
        let confetti = document.createElement('div');
        confetti.style.position = 'absolute';
        confetti.style.width = '10px';
        confetti.style.height = '10px';
        confetti.style.backgroundColor = '#' + Math.floor(Math.random()*16777215).toString(16);
        confetti.style.top = Math.random() * window.innerHeight + 'px';
        confetti.style.left = Math.random() * window.innerWidth + 'px';
        confetti.style.opacity = Math.random();
        confetti.style.transform = `rotate(${Math.random() * 360}deg)`;
        confetti.style.transition = 'opacity 2s ease-out, transform 2s ease-out';
        confettiContainer.appendChild(confetti);
        setTimeout(() => {
            confetti.style.opacity = '0';
            confetti.style.transform = `translateY(-100px) rotate(${Math.random() * 360}deg)`;
        }, 100);
    }
    setTimeout(() => document.body.removeChild(confettiContainer), 3000);
}
setInterval(createConfetti, 1000);