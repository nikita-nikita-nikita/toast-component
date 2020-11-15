import {createToastElement} from "./toast-parts/index.js";
import {generateNewToast} from "./toast-management/createNewToast.js";
//
// const manager = generateNewToast("im body of toastssssssssssss", {
//     rootElement: document.querySelector('.container'),
//     title: 'title'
// })
//
// setTimeout(() => manager.createNew("im body of one more more", "ttttttt"), 1000);
// setTimeout(() => manager.createNew("im body of one more more", "ttttttt"), 2000);
// setTimeout(() => {
//     manager.closeOld();
// }, 3000);




export {
    createToastElement,
    generateNewToast
};
