import createHeader from "./toastHeader.js";
import createBody from "./toastBody.js";

function createToastElement (
    body,
    title,
    {
        id,
        status = "",
        closeToast,
        ...options}){
    const toast = document.createElement('div');
    toast.classList.add('toast');
    if(id) toast.id = id;
    const closeFunction = () => {
        toast.classList.add('deleted-toast-animation');
        setTimeout(() => {
            toast.classList.add('deleted-toast');
        }, 1000);
        closeToast();
    }
    toast.appendChild(createHeader(title, closeFunction));
    toast.appendChild(createBody(body));
    toast.classList.add(`toast-${status}`)
    return {toast, closeFunction};
}

export default createToastElement;
