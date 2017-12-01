
function showhide(str) {
    var x = document.getElementById("ivs" + str);
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}
