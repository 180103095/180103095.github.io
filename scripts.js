window.onload = function (params) {
    var menu_clicked = false;
    document.getElementById("menu-btn").onclick = function () {
        event.preventDefault();
        if (!menu_clicked) {
            document.getElementById("menu").style.display = 'flex';
        } else {
            document.getElementById("menu").style.display = 'none';
        }
        menu_clicked = !menu_clicked;
    };

    var mainImages = document.getElementsByClassName('main-image');
    for (let image of mainImages) {
        image.onclick = function () {
            window.open(image.getAttribute('src'));
        }
    }
    var allImages = this.document.getElementsByClassName('picture');
    for (let image of allImages) {
        image.onclick = function () {
            allImages = allImages;
            source = image.getAttribute('src')
            mark = source.split("/")[0];
            mainImage = document.getElementById(mark).getElementsByClassName('main-image')[0];
            mainImage.src = source;
            selectImage(allImages, mainImage);
        };
    }
};

function selectImage(images, mainImage) {
    for (image of images) {
        if (image.getAttribute('src') === mainImage.getAttribute('src')) {
            image.style.border = '3px solid gray';
        } else {
            image.style.border = '';
        }
    }
}