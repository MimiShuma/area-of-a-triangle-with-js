
function getAreaOfTriangle(a, b, c) {
    let semiPerimeter = (a + b + c) / 2;
    let area = Math.sqrt(semiPerimeter * (semiPerimeter - a) * (semiPerimeter - b) * (semiPerimeter - c));
    return area;
}


function getResult() {

    let sideA = parseFloat(document.getElementById('sideA').value);
    let sideB = parseFloat(document.getElementById('sideB').value);
    let sideC = parseFloat(document.getElementById('sideC').value);
    let result = getAreaOfTriangle(sideA, sideB, sideC);

    let target = document.getElementById('target');
    target.innerHTML = result;
}
