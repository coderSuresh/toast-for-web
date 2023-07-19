const s = document.createElement("p");
s.classList.add("web-toast");
document.body.appendChild(s);
let e;
const t = () => {
  s.classList.remove("show");
}, d = () => {
  s.addEventListener("click", () => {
    t();
  });
};
d();
const r = (a, c, o = 3e3) => {
  switch (s.textContent = a, s.classList.add("show"), c) {
    case "success":
      s.classList.add("success");
      break;
    case "error":
      s.classList.add("error");
      break;
    case "warning":
      s.classList.add("warning");
      break;
    default:
      s.classList.add("success");
  }
  e && clearInterval(e), e = setTimeout(t, o);
};
export {
  r as default
};
