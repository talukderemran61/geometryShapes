function calculateTriangleArea() {
    // trianle base
    const base = getInputFieldValueById('triangle-base');

    // triangle height 
    const height = getInputFieldValueById('triangle-height');

    // validate
    if(isNaN(base) || isNaN(height)){
        alert('Invalid Input!');
        return;
    }

    const area = 0.5 * base * height;

    // show triangle area
    setInnerTextById('triangle-area', area);
    // add to calculation entry
    addToCalculationEntry('Parallelogram', area);
}

function calculateRectangleArea(){
    const width = getInputFieldValueById('rectangle-width');

    const length = getInputFieldValueById('rectangle-length');

    if(isNaN(width) || isNaN(length)){
        alert('Invalid Input!');
        return;
    }
    const area = width * length;

    setInnerTextById('rectangle-area', area);

    addToCalculationEntry('Rectangle', area);
}

function calculateEllipseArea(){
    const majorRadius = getInputFieldValueById('ellipse-major-radius');

    const minorRadius = getInputFieldValueById('ellipse-minor-radius');

    if(isNaN(majorRadius) || isNaN(minorRadius)){
        alert('Invalid Input!');
        return;
    }
    const area = Math.PI * majorRadius * minorRadius;
    const areaTwoDecimal = area.toFixed(2);

    setInnerTextById('ellipse-area', areaTwoDecimal);

    addToCalculationEntry('Ellipse', areaTwoDecimal);
}