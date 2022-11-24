let dropBtn = document.querySelector(".dropbtn a");
const vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0)
if (vw < 991) {
    dropBtn.removeAttribute("href");
}