// توليد النجوم الليلية في الخلفية تلقائياً
const starsContainer = document.getElementById( starsContainer );
const numberOfStars = 70;

for (let i = 0; i < numberOfStars; i++) {
    const star = document.createElement( div );
    star.classList.add( star );
    
    // مواقع وأحجام عشوائية للنجوم
    const x = Math.random() * window.innerWidth;
    const y = Math.random() * window.innerHeight;
    const size = Math.random() * 3 + 1;
    const duration = Math.random() * 3 + 1;
    
    star.style.left = `${x}px`;
    star.style.top = `${y}px`;
    star.style.width = `${size}px`;
    star.style.height = `${size}px`;
    star.style.animationDuration = `${duration}s`;
    
    starsContainer.appendChild(star);
}

// دالة تشغيل وإيقاف الموسيقى
const audio = document.getElementById( giftAudio );
const musicBtn = document.getElementById( musicBtn );
let isPlaying = false;

function toggleMusic() {
    if (!isPlaying) {
        audio.play();
        musicBtn.textContent = "🔇 إيقاف الموسيقى";
        isPlaying = true;
    } else {
        audio.pause();
        musicBtn.textContent = "🎵 تشغيل الموسيقى";
        isPlaying = false;
    }
}

