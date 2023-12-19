function openOverlay(imageSrc) {
    var overlay = document.getElementById('overlay');
    var overlayImg = document.getElementById('overlayImg');

    overlayImg.src = imageSrc;
    overlay.style.display = 'block';
}

function closeOverlay() {
    document.getElementById('overlay').style.display = 'none';
}