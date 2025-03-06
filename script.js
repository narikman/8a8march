document.addEventListener("DOMContentLoaded", function() {
    const images = document.querySelectorAll(".image");
    const modal = document.getElementById("modal");
    const videoPlayer = document.getElementById("videoPlayer");
    const closeModal = document.querySelector(".close");

    images.forEach(img => {
        img.addEventListener("click", function() {
            const videoSrc = this.getAttribute("data-video");
            videoPlayer.src = videoSrc + "?autoplay=1";
            modal.style.display = "flex";
            modal.classList.add("fade-in");
        });
    });

    closeModal.addEventListener("click", function() {
        modal.classList.remove("fade-in");
        setTimeout(() => {
            modal.style.display = "none";
            videoPlayer.src = "";
        }, 300);
    });

    window.addEventListener("click", function(event) {
        if (event.target === modal) {
            modal.classList.remove("fade-in");
            setTimeout(() => {
                modal.style.display = "none";
                videoPlayer.src = "";
            }, 300);
        }
    });
});
