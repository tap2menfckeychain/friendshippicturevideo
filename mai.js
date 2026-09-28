document.addEventListener("DOMContentLoaded", () => {
  const openBtn = document.getElementById("openBtn");
  const backBtn = document.getElementById("backBtn");
  const envelopeScreen = document.getElementById("envelopeScreen");
  const cardScreen = document.getElementById("cardScreen");

  // Chuyển từ màn hình bao thư sang màn hình nội dung
  openBtn.addEventListener("click", () => {
    envelopeScreen.classList.add("hidden");
    cardScreen.classList.remove("hidden");
  });

  // Quay lại màn hình bao thư
  backBtn.addEventListener("click", () => {
    cardScreen.classList.add("hidden");
    envelopeScreen.classList.remove("hidden");
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const openBtn = document.getElementById("openBtn");
  const backBtn = document.getElementById("backBtn");
  const envelopeScreen = document.getElementById("envelopeScreen");
  const cardScreen = document.getElementById("cardScreen");
  const heroVideo = document.getElementById("heroVideo");
  const soundBtn = document.getElementById("soundBtn");

  // Mở thư và tự động chạy video
  openBtn.addEventListener("click", () => {
    envelopeScreen.classList.add("hidden");
    cardScreen.classList.remove("hidden");

    if (heroVideo) {
      heroVideo.currentTime = 0;
      heroVideo.play().catch((error) => console.log("Auto-play error:", error));
    }
  });

  // Nút bật/tắt âm thanh video
  if (soundBtn && heroVideo) {
    soundBtn.addEventListener("click", () => {
      if (heroVideo.muted) {
        heroVideo.muted = false;
        soundBtn.textContent = "🔊";
      } else {
        heroVideo.muted = true;
        soundBtn.textContent = "🔇";
      }
    });
  }

  // Quay lại thư
  backBtn.addEventListener("click", () => {
    cardScreen.classList.add("hidden");
    envelopeScreen.classList.remove("hidden");

    if (heroVideo) {
      heroVideo.pause();
      heroVideo.muted = true; // Reset lại về tắt tiếng khi quay ra
      if (soundBtn) soundBtn.textContent = "🔇";
    }
  });
});
