function multiply() {
    // Get input values from the form
    var qualityIn = parseFloat(document.getElementById('quality').value);
    var widthIn = parseFloat(document.getElementById('width').value);
    var heightIn = parseFloat(document.getElementById('height').value);

    // Perform the multiplication
    var wresult = (widthIn * qualityIn).toFixed(0);
    var hresult = (heightIn * qualityIn).toFixed(0);

    var result = `${wresult}x${hresult}`;
    
    // Output the result in the DOM
    document.getElementById('output').textContent = result;
}