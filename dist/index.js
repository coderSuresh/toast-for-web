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
const n = (a, o, c = 3e3) => {
  switch (t.textContent = a, o) {
    case "success":
      t.setAttribute("class", "web-toast success show");
      break;
    case "error":
      t.setAttribute("class", "web-toast error show");
      break;
    case "warning":
      t.setAttribute("class", "web-toast warning show");
      break;
    default:
      t.setAttribute("class", "web-toast success show");
  }
  e && clearInterval(e), e = setTimeout(s, c);
};
export {
  n as default
};
