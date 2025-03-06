document.addEventListener("DOMContentLoaded", function() {
    const images = document.querySelectorAll(".image");
    const modal = document.getElementById("modal");
    const videoPlayer = document.getElementById("videoPlayer");
    const closeModal = document.querySelector(".close");

    images.forEach(img => {
        img.addEventListener("click", function() {
            const videoSrc = this.getAttribute("data-video");
            videoPlayer.src = videoSrc;
            modal.style.display = "flex";
        });
    });

    closeModal.addEventListener("click", function() {
        modal.style.display = "none";
        videoPlayer.src = ""; // Останавливаем видео
    });

    window.addEventListener("click", function(event) {
        if (event.target === modal) {
            modal.style.display = "none";
            videoPlayer.src = ""; // Останавливаем видео
        }
    });
});
