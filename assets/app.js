let intro = document.querySelector(".intro");
let htm = document.querySelector("html");
let header = document.querySelector(".header");
let allNavLinks = document.querySelectorAll(".nav__link");

document.addEventListener("scroll", function() {
    if (htm.scrollTop >= intro.offsetHeight) {
        header.classList.add("fixed");
    } else {
        header.classList.remove("fixed");
    }
});

for (i = 0; i < allNavLinks.length; i++) {
    allNavLinks[i].addEventListener("click", function() {
        this.classList.add("active");
        for (j = 0; j < allNavLinks.length; j++) {
            if (allNavLinks[j] !== this) {
                allNavLinks[j].classList.remove("active");
            }
        }
    });
}