const cards = document.querySelectorAll(".card");
const container = document.querySelector(".box-container");
const box = document.querySelector(".box");
const t = document.querySelector(".text");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      entry.target.classList.toggle("show", entry.isIntersecting);
    });
  },
  {
    threshold: 1,
  }
);

cards.forEach((card) => {
  observer.observe(card);
});

const boxObserver = new ResizeObserver((entries) => {
  const boxElement = entries[0];
  const isSmall = boxElement.contentRect.width < 650;
  boxElement.target.style.fontSize = isSmall ? "30px" : "15px";
  boxElement.target.style.color = isSmall ? "white" : "white";
});

boxObserver.observe(box);
