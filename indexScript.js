
function showhide(str) {
    hiddenRow = document.getElementById("hiddenRow" + str);
    if (hiddenRow.className == "active") {
        hiddenRow.className = "notActive";
    } else hiddenRow.className = "active";

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
    overlay.style.opacity = 0.7;

}
