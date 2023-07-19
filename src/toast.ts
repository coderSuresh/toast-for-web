const toastElem = document.createElement('p');
toastElem.classList.add('web-toast');

document.body.appendChild(toastElem);

let timeOut: number;

const removeToast = () => {
    toastElem.classList.remove('show')
}

const removeElemOnClick = () => {
    toastElem.addEventListener('click', () => {
        removeToast();
    })
}

removeElemOnClick();

const showToast = (message: string, duration = 3000) => {
    toastElem.textContent = message;
    toastElem.classList.add('show');

    if (timeOut) {
        clearInterval(timeOut)
    }

   timeOut = setTimeout(removeToast, duration);
}

export default showToast;