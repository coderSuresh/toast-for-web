const t = document.createElement("p");
t.classList.add("web-toast");
document.body.appendChild(t);
let e;
const s = () => {
  t.classList.remove("show");
}, r = () => {
  t.addEventListener("click", () => {
    s();
  });
};
r();
const l = (a, c, o = 3e3) => {
  switch (t.textContent = a, t.classList.add("show"), c) {
    case "success":
      t.setAttribute("class", "web-toast success");
      break;
    case "error":
      t.setAttribute("class", "web-toast error");
      break;
    case "warning":
      t.setAttribute("class", "web-toast warning");
      break;
    default:
      t.setAttribute("class", "web-toast success");
  }
  e && clearInterval(e), e = setTimeout(s, o);
};
export {
  l as default
};
