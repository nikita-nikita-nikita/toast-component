# toast-component
framework agnostic toast notification component

## installation
`npm i nikita-toast-component`

## guide

- first, you need import css
```javascript
import "nikita-toast-component/src/styles/index.css";
```
After that you have options how to work with toast

 1. You can just create toast by using classes
```html
<div class="toast toast-info">
    <div class="toast__toast-header">
        <strong class="toast-header__title">Title</strong>
        <small class="toast-header__time-text">just now</small>
        <button type="button" class="toast-header__close-button">
            <span aria-hidden="true" class="close-button__close-icon">&times;</span>
        </button>
    </div>
    <div class="toast-body">
        I am toast body, hello
    </div>
</div>
```
 2. You can import method, that just create the same
```javascript
import {createToastElement} from "nikita-toast-component";
const {toast, closeFunction} = createToastElement('body', 'title',
    {
        status: 'info'
    }
);
```
 3. Or import method, that will create toast container, insert toast there and insert it into rootElement 

```javascript
import {generateManagerWithContent, generateManager} from "nikita-toast-component";

const toastManger = generateManagerWithContent("Hello, i am body", {
    title: 'i am title',
    status: 'info',
    position: 'bottom-left',
    rootElement: YourElement
});
```
```javascript
const toastManger = generateManager({
    status: 'info',
    position: 'bottom-left',
    rootElement: YourElement
});

toastManger.createNew('Hello, i am body', 'i am title');
```
### createToastElement
```javascript
const {toast, closeFunction} = createToastElement(body, title, options)
```
|option|value|
|---|---|
|  `status` | `""` - default option, `"warning"`, `"error"`, `"success"`, `"info"`  |
| `id`  |  your id |
| `closeToast`  | function that will be called, when you or user close your toast|
| `closeOnClick`  | `false` - default, `true` - enable close not just clicking directly on close button but also toast itself |

Example : 

```javascript
const {toast, closeFunction} = createToastElement(body, title, {
    status: 'info',
    id: 'my special id',
    closeToast: () => alert('i am closed')
});

setTimeout(() => {
    closeFunction()
}, 4000); // close your toast after 4 second
```

### generateManager

```javascript
const toastManger = generateManager({ // options
    status: 'info',
    position: 'bottom-left',
    rootElement: YourElement,
    autoCloseDuration: 4000,
    doNotGenerateContainer: true,
    closeOnClick: true
});
```

options:

|option|value|
|---|---|
|  `status` | `""` - default option, `"warning"`, `"error"`, `"success"`, `"info"`  |
| `autoCloseDuration` | `0` - default, time in milliseconds till toast will be closed automatically|
| `closeOnClick` | `false` - default, `true` - enable close not just clicking directly on close button but also toast itself|
| `rootElement` | `body` - default, your element, where toasts will be appended|
| `doNotGenerateContainer` | `false` - default, `true` - toastManager will not create toast container and will append toast directly in rootElement|
| `position` | `"top-rigth"` - default, `"top-left"`, `"bottom-left"`, `"bottom-right"`|
