const filterButtons = document.querySelectorAll("#filter-buttons button");

document.addEventListener("DOMContentLoaded", function () {
  // Initialize Isotope
  var elem = document.querySelector(".image-gallery");
  var iso = new Isotope(elem, {
    // options
    itemSelector: ".items",
    layoutMode: "fitRows",
  });

  // Filter buttons functionality
  document
    .getElementById("filter-buttons")
    .addEventListener("click", function (event) {
      if (event.target.tagName === "BUTTON") {
        var filterValue = event.target.getAttribute("data-filter");
        iso.arrange({ filter: filterValue });
      }
    });
});

// filter buttons active class toggles
filterButtons[0].classList.add("active");
filterButtons.forEach((button) => {
  button.addEventListener("click", function (e) {
    filterButtons.forEach((btn) => {
      btn.classList.remove("active");
    });
    e.target.classList.add("active");
  });
});
