const music = document.getElementById("bgMusic");
let playing = false;

function toggleMusic() {
    if (!playing) {
        music.play();
        musicBtn.textContent = "🔇 Stop Music";
    } else {
        music.pause();
        musicBtn.textContent = "🎵 Play Music";
    }
    playing = !playing;
}