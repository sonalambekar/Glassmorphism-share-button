/* Created by Tivotal */

let toggleBtn = document.querySelector(".toggle");
let menu = document.querySelector(".menu");

toggleBtn.onclick = () => {
  menu.classList.toggle("open");
};
