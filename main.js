let toggle = document.querySelector(".toggle");

document.body.classList.add("light");

toggle.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  document.body.classList.toggle("light");
});
