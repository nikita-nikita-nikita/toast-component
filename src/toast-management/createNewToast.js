import ToastManger from "./toastManagementClass.js";

function generateManagerWithContent(content, options ){
    return  new ToastManger(content, options);
}
function generateManager(options ){
    return  new ToastManger(null, options);
}

export {generateManagerWithContent, generateManager};
