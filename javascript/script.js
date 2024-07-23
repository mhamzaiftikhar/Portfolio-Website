var hamburgerIcon = document.querySelector(".toggle-icon");
var verticalMenu = document.querySelector(".toggle-container");
var crossIcon = document.querySelector(".cross-icon i");
var topbar = document.querySelector("#topbar");
var clickcount = 0;

hamburgerIcon.addEventListener("click", () => {
  if (clickcount == 0) {
    topbar.style.zIndex = 40;
    nav.style.zIndex = 40;
    verticalMenu.style.right = "0%";
    crossIcon.style.opacity = "100%";
    crossIcon.style.display = "block";
    hamburgerIcon.style.opacity = "0%";

    gsap.from(".toggle-container ul li a", {
      y: "100%",
      opacity: 0,
      duration: 2,
      scrollTrigger: {
        trigger: ".toggle-container ul li a",
      },
    });
    clickcount = 1;
  } else {
    topbar.style.zIndex = 58;
    crossIcon.style.opacity = "0%";
    hamburgerIcon.style.opacity = "100%";
    verticalMenu.style.right = "-100%";
    clickcount = 0;
  }
});

// Navbar Background Color Change

var nav = document.querySelector("#navbar");

function bgChange() {
  var yValue = window.scrollY;
  if (yValue < 60) {
    nav.classList.remove("background");
    topbar.classList.remove("background");
  } else {
    nav.classList.add("background");
    topbar.classList.add("background");
  }
}

window.addEventListener("scroll", bgChange);
