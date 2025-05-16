document.addEventListener("DOMContentLoaded", function () {
  const options = document.querySelectorAll(".option");

  options.forEach(option => {
    option.addEventListener("click", function (e) {
      e.preventDefault();
      options.forEach(o => o.classList.remove("active"));
      this.classList.add("active");
    });
  });
});