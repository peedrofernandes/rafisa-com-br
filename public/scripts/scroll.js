window.addEventListener("scroll", () => {
  const header = document.querySelector("header");
  const width = window.innerWidth
  if (width >= 636 )
  header.classList.toggle("sticky", window.scrollY > 0);
})