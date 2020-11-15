function createHeader(title, closeFunction, options) {
    const header = document.createElement("header");
    header.classList.add('toast__toast-header');

    header.appendChild(createHeaderTitle(title));
    header.appendChild(createSmallTimeText());
    header.appendChild(closeButton(closeFunction));

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

function closeButton(closeFunction, options, closeText = '&times;', ) {
    const closeButton = document.createElement('button');
    closeButton.classList.add('toast-header__close-button');
    closeButton.innerHTML = `<span class="close-button__close-icon">${closeText}</span>`;
    closeButton.addEventListener('click', closeFunction);

    return closeButton;
}

export default createHeader;
