function setLanguage(language) {
    var elements = document.querySelectorAll(".lang");
    elements.forEach(function (element) {
      if (element.getAttribute("lang") === language) {
        element.style.display = "";
      } else {
        element.style.display = "none";
      }
    });
  }