var currentPagePath = window.location.pathname;

var links = document.querySelectorAll(".full-navbar a");

links.forEach(function (link) {
  var linkPath = new URL(link.href).pathname;

  if (linkPath === currentPagePath) {
    link.classList.add("selected");
  }
});

document.addEventListener("DOMContentLoaded", function () {
  var loginBtn = document.getElementById("login-btn");
  if (loginBtn) {
    loginBtn.addEventListener("click", function () {
      window.location.href = "login.html";
    });
  }

  var submitBtn = document.getElementById("submit-btn");
  if (submitBtn) {
    submitBtn.addEventListener("click", function (event) {
      event.preventDefault();
      console.log("Submit button clicked");
      window.location.href = "index.html";
    });
  }
});
