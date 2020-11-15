function createHeader(title, closeFunction, closeOnClick) {
    const header = document.createElement("header");
    header.classList.add('toast__toast-header');

    header.appendChild(createHeaderTitle(title));
    header.appendChild(createSmallTimeText());
    header.appendChild(closeButton(closeFunction, closeOnClick));

    return header
}

function createHeaderTitle(title = '') {
    const smallTimeText = document.createElement('strong');
    smallTimeText.classList.add('toast-header__title');
    smallTimeText.innerHTML = title;

    return smallTimeText;
}

function createSmallTimeText(time = 'just now') {
    const strongTitle = document.createElement('small');
    strongTitle.classList.add('toast-header__time-text');
    strongTitle.innerHTML = time;

    return strongTitle;
}

function closeButton(closeFunction, closeOnClick, closeText = '&times;', ) {
    const closeButton = document.createElement('button');
    closeButton.classList.add('toast-header__close-button');
    closeButton.innerHTML = `<span class="close-button__close-icon">${closeText}</span>`;
    if(!closeOnClick) closeButton.addEventListener('click', closeFunction);

    return closeButton;
}

export default createHeader;
