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

const showToast = (message: string, level?: string, duration = 3000) => {
    toastElem.textContent = message;

    switch (level) {
        case 'success':
            toastElem.setAttribute('class', 'web-toast success show');
            break;
        case 'error':
            toastElem.setAttribute('class', 'web-toast error show');
            break;
        case 'warning':
            toastElem.setAttribute('class', 'web-toast warning show');
            break;
        default:
            toastElem.setAttribute('class', 'web-toast success show');
    }

    if (timeOut) {
        clearInterval(timeOut)
    }

   timeOut = setTimeout(removeToast, duration);
}

export default showToast;