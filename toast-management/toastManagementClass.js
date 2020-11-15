import {createToastElement} from "../toast-parts";
import getUuid from "../tools/myUuid.js";


export default class ToastManger {
    constructor(
        content,
        // options
        {rootElement, doNotGenerateContainer, title, ...options}) {
        this.options = options;
        this.toastContainer = doNotGenerateContainer
            ? rootElement
            : this.generateToastsContainer(rootElement);
        this.createNew(content, title, options);

    }

    generateToastsContainer = (rootElement) => {
        const toastsContainer = document.createElement('div');
        toastsContainer.classList.add('toasts-container');
        rootElement.appendChild(toastsContainer);
        return toastsContainer;
    }

    options = {};

    toastContainer = null;

    toasts = [];

    lastCreatedToast = null;

    oldestToast = null;

    createNew = (content, title) => {
        const id = getUuid();
        const {toast: toastComponent, closeFunction} = createToastElement(content, title, id, this.options);
        const timeOut =  this.options.autoCloseDuration
            ? setTimeout(() => {
                toast.closeToast()
            }, this.options.autoCloseDuration)
            : null;
        const toast = {
            id,
            toast: toastComponent,
            closeToast: () => {
                if (timeOut) clearTimeout(timeOut);
                closeFunction();
                this.toasts = this.toasts.filter(({id:toastId}) => id !== toastId)
                this.oldestToast = this.toasts.length ? this.toasts[0] : null;
            },

        };
        this.lastCreatedToast = toast;
        if(!this.oldestToast) this.oldestToast = toast;
        this.toastContainer.appendChild(toast.toast)
        return toast;

    };

    closeLast = () => {
        if (this.lastCreatedToast) this.lastCreatedToast.closeToast();
    }

    closeOld = () => {
        if (this.lastCreatedToast) this.oldestToast.closeToast();
    }
}
