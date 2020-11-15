import ToastManger from "./toastManagementClass.js";


function generateNewToast(content, options ){
    return  new ToastManger(content, options);
}

export {generateNewToast};
