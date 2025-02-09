function openImage(image) {
    const modal = document.getElementById("fullscreen-modal");
    const fullscreenImg = document.getElementById("fullscreen-img");

    fullscreenImg.src = image.src;
    modal.classList.add("active");
}

function closeImage() {
    const modal = document.getElementById("fullscreen-modal");
    modal.classList.remove("active");
}
