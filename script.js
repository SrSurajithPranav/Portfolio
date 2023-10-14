const sidebar = document.querySelector(".sidebar");
const sidebarToggle = document.querySelector(".sidebar-toggle");

sidebarToggle.addEventListener("mouseover", () => {
  sidebar.classList.add("visible");
});

sidebarToggle.addEventListener("mouseout", () => {
  sidebar.classList.remove("visible");
});

sidebar.addEventListener("click", (e) => {
  if (e.target.tagName === "A") {
    sidebar.classList.remove("visible");
    const content = document.querySelector(".content");
    content.innerHTML = `<h1>${e.target.textContent}</h1>`;
  }
});
