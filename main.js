const addElement = (e, node, txt, attr, value) => {
    e.preventDefault();
    const element = document.createElement(node);

    if (txt) {
        const text = document.createTextNode(txt);
        element.appendChild(text);
    }
    if (attr) {
        element.setAttribute(attr, value);
    }
    document.querySelector('.content').appendChild(element);
}

const searchElements = (event, nameElement) => {
    event.preventDefault();
    const infoElement = document.querySelector('.result');
    infoElement.textContent = '';
    const elements = document.querySelectorAll(nameElement);
    if (elements.length) {
        infoElement.innerHTML = `<h3 class="result__number-info">Found ${elements.length} ${nameElement} in this document</h3>`;
        showInfo(elements, infoElement)
    } else {
        infoElement.innerHTML = `<h3 class="result__number-info">${nameElement} not found in this document</h3>`;
        return;
    }
}

const showInfo = (elements, infoElement) => {
    elements.forEach(element => {
        const item = document.createElement('div');
        item.className = 'result__element-description';
        item.innerHTML = `
        <div>${element.nodeName}</div>
        <div>class: ${element.className}</div>
        <div>height: ${element.offsetHeight}</div>
        <div>width: ${element.offsetWidth}</div>
        <div>offsetLeft: ${element.offsetLeft}</div>
        <div>offsetTop: ${element.offsetTop}</div>
        <div>number of child elements: ${element.childElementCount}</div>
        `;
        infoElement.appendChild(item);
    })
};

const addForm = document.querySelector('.form--add');
addForm.addEventListener('submit', (e) => addElement(
    e, 
    addForm.elements.node.value,
    addForm.elements.text.value,
    addForm.elements.attr.value,
    addForm.elements.value.value
));

const searchForm = document.querySelector('.form--search');
searchForm.addEventListener('submit', (e) => searchElements(e, searchForm.elements['searching-element'].value));