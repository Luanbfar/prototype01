var currentPagePath = window.location.pathname;

var links = document.querySelectorAll(".links a");

links.forEach(function (link) {
  var linkPath = new URL(link.href).pathname;

  if (linkPath === currentPagePath) {
    link.classList.add("selected");
  }
});
