function getInputFieldValueById(inputFieldId) {
    const inputField = document.getElementById(inputFieldId);
    const inputFieldText = inputField.value;
    const inputFieldValueInFloat = parseFloat(inputFieldText);
    return inputFieldValueInFloat;
}

function setInnerTextById(elementId, value) {
    const element = document.getElementById(elementId);
    element.innerText = value;
}

function addToCalculationEntry(shapeType, area){
    console.log(shapeType+ ' ' + area);
    const calculationEntry = document.getElementById('calculation-entry');

    const count = calculationEntry.childElementCount;

    const p = document.createElement('p');
    p.classList.add('my-4');
    p.innerHTML = `${count + 1}. ${shapeType} ${area} cm<sup>2</sup> <button class="btn btn-sm btn-success ">Convert</button>`;

    calculationEntry.appendChild(p);
}