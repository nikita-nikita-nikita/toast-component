function createBody(bodyText) {
    const body = document.createElement('div')
    body.classList.add('toast-body');
    body.innerHTML = bodyText;

    return body;
}

export default createBody;
