const UInavIcon = document.querySelector(".bars");
const UInav = document.querySelector(".navbar");

UInavIcon.addEventListener("click", showMenu);

// Show Menu
function showMenu(e) {
  if (UInav.className === "navbar") {
    UInav.className += "-activate";
  } else {
    UInav.className = "navabr";
  }

  e.preventDefault();
}
