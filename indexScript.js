
function showhide(str) {
    var x = document.getElementById("ivs" + str);
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}

function fornow() {
    var gif = document.getElementById("gif");
    var overlay = document.getElementById("overlay");
    gif.style.display = "block";
    overlay.style.display = "block";

}
