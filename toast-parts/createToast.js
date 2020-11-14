import createHeader from "./toastHeader.js";
import createBody from "./toastBody.js";

function createToastElement (body, title, id, options){
    const toast = document.createElement('div');
    toast.classList.add('toast');
    toast.id = id;
    const closeFunction = () => {
        toast.classList.add('deleted-toast');
    }
    toast.appendChild(createHeader(title, closeFunction));
    toast.appendChild(createBody(body));
    return toast;
}

export default createToastElement;
