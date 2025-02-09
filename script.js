// فتح الصورة في النافذة المنبثقة
function openImage(img) {
    const modal = document.getElementById("imageModal");
    const modalImg = document.getElementById("modalImg");
    const caption = document.getElementById("caption");

    modal.style.display = "block";
    modalImg.src = img.src; // استخدام رابط الصورة
    caption.innerText = img.alt; // عرض النص البديل كعنوان
}

// إغلاق النافذة
function closeImage() {
    const modal = document.getElementById("imageModal");
    modal.style.display = "none";
}
