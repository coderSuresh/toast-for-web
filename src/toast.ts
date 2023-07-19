const toastElem = document.createElement('p');
toastElem.classList.add('web-toast');

const showToast = (message: string, duration = 3000) => {
    toastElem.textContent = message;
    toastElem.classList.add('show');
    document.body.appendChild(toastElem);
    setTimeout(() => {
        document.body.removeChild(toastElem);
        toastElem.classList.remove('show');
    }, duration);
}
    
export default showToast;