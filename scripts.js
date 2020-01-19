window.onload = function (params) {
    var menu_clicked = false;
    document.getElementById("menu-btn").onclick = function () {
        event.preventDefault();
        console.log("clicked");
        if (!menu_clicked) {
            document.getElementById("menu").style.display = 'flex';
        } else {
            document.getElementById("menu").style.display = 'none';
        }
        menu_clicked = !menu_clicked;
    };
};