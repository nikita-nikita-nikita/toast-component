import {createToastElement} from "../toast-parts";
import getUuid from "../tools/myUuid.js";


export default class ToastManger {

    options = {};

    toastContainer = null;

    toasts = [];

    lastCreatedToast = null;

    oldestToast = null;

    constructor(
        content,
        // options
        {
            rootElement = document.body,
            doNotGenerateContainer,
            title,
            ...options}) {
        this.options = options;
        this.toastContainer = doNotGenerateContainer
            ? rootElement
            : this.generateToastsContainer(rootElement, options.position);
        if(content) this.createNew(content, title, options);

    }

    generateToastsContainer = (rootElement, position = 'top-right') => {
        const toastsContainer = document.createElement('div');
        toastsContainer.classList.add('toasts-container');
        toastsContainer.classList.add(`toasts-position-${position}`);
        rootElement.appendChild(toastsContainer);
        return toastsContainer;
    }

    createNew = (content, title = "") => {
        const id = getUuid();
        const timeOut = this.options.autoCloseDuration
            ? setTimeout(() => {
                toast.closeToast()
            }, this.options.autoCloseDuration)
            : null;
        const closeToast = () => {
            if (timeOut) clearTimeout(timeOut);
            this.toasts = this.toasts.filter(({id:toastId}) => id !== toastId);
            if (!this.toasts.length){
                this.oldestToast = null;
                this.lastCreatedToast = null;
            } else {
                this.oldestToast = this.toasts[0];
                this.lastCreatedToast = this.toasts[this.toasts.length-1];
            }
        }
        const {
            toast: toastComponent,
            closeFunction
        } = createToastElement(content, title, {...this.options, id, closeToast});

        const toast = {
            id,
            toast: toastComponent,
            closeToast: closeFunction,

        };
        this.lastCreatedToast = toast;
        if(!this.oldestToast) this.oldestToast = toast;
        this.toastContainer.appendChild(toast.toast);
        this.toasts.push(toast)
        return toast;

    };

    closeLast = () => {
        if (this.lastCreatedToast) this.lastCreatedToast.closeToast();
    }

    closeOld = () => {
        if (this.lastCreatedToast) this.oldestToast.closeToast();
    }
}
