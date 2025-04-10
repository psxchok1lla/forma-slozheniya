// Установка темы ДО загрузки CSS
const savedTheme = localStorage.getItem("theme") || "auto";
document.documentElement.classList.add(`theme-${savedTheme}`);

function changeTheme(theme) {
  document.documentElement.className = "";
  document.documentElement.classList.add(`theme-${theme}`);
  localStorage.setItem("theme", theme);
}

document.addEventListener("DOMContentLoaded", () => {
  const root = document.documentElement;
  const themeButtons = document.querySelectorAll(".theme-menu__button");

  function setDisabled(theme) {
    themeButtons.forEach((item) => {
      if (item.getAttribute("data-theme") === theme) {
        item.setAttribute("disabled", true);
      } else {
        item.removeAttribute("disabled");
      }
    });
  }

  setDisabled(savedTheme);

  themeButtons.forEach((button) => {
    button.onclick = () => {
      const newTheme = button.getAttribute("data-theme");
      changeTheme(newTheme);
      setDisabled(newTheme);
    };
  });
});
