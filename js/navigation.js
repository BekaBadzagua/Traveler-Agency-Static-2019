
// Main Slider

var ind = 1;

showMainSlides(ind);

setInterval(function () {
    plusMainSlides(1);
}, 5000);

function plusMainSlides(n) {
    showMainSlides(ind += n);
}
function currentMainSlide(n) {
    showMainSlides(ind = n);
}


function showMainSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    if (n > slides.length) { ind = 1 }
    if (n < 1) { ind = slides.length }

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[ind - 1].style.display = "block";
}


















// ნავიგაცია
var links = document.getElementsByClassName('nav-list')[0];

for (i = 0; i < links.children.length; i++) {
    var a = links.children[i].firstChild;
    a.addEventListener("click",makeActive)
}


function makeActive() {
    // ყელას მოვხსნათ ექთივი
    for (i = 0; i < links.children.length; i++) {
        var a = links.children[i].firstChild;
        a.classList.remove("active");
    }
    // გავხადოთ ეს ექთივი
    this.classList.add("active");
}





