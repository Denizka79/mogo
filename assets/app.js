let intro = document.querySelector(".intro");
let htm = document.querySelector("html");
let header = document.querySelector(".header");
let allNavLinks = document.querySelectorAll(".nav__link");
let navToggle = document.querySelector(".nav-toggle");
let nav = document.querySelector(".nav");
let dataCollapseElements = document.querySelectorAll("[data-collapse]");
let accordionContentElements = document.querySelectorAll(".accordion__content");

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

navToggle.addEventListener("click", function() {
    this.classList.toggle("active");
    nav.classList.toggle("active");
});

for (let k = 0; k < dataCollapseElements.length; k++) {
    dataCollapseElements[k].addEventListener("click", function() {
        let collapseId = dataCollapseElements[k].getAttribute("data-collapse");
        let slideToggleItem = document.getElementById(collapseId);
        /* $(slideToggleItem).slideToggle(); */
        this.classList.toggle("active");
        slideToggleItem.classList.toggle("active");
    });
}