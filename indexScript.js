
window.addEventListener("keydown", function (event) {
    if (event.defaultPrevented) {
        return; // Do nothing if the event was already processed
    }

    switch (event.key) {
        case "Escape":
            gif.style.display = "none";
            overlay.style.display = "none";
            break;
        default:
            return;
    }
    event.preventDefault();
}, true);

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
    overlay.style.backgroundColor = "black";
}
