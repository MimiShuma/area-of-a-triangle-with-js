
let areaOfTriangleWithThreeSides = {
    getAreaOfTriangle: function (a, b, c) {
        let semiPerimeter = (a + b + c) / 2;
        let area = Math.sqrt(semiPerimeter * (semiPerimeter - a) * (semiPerimeter - b) * (semiPerimeter - c));
        return area;
    },
    getResult: function (sideA, sideB, sideC, targetDiv) {

        let sideAA = parseFloat(document.getElementById(sideA).value);
        let sideBB = parseFloat(document.getElementById(sideB).value);
        let sideCC = parseFloat(document.getElementById(sideC).value);
        let result = areaOfTriangleWithThreeSides.getAreaOfTriangle(sideAA, sideBB, sideCC);

        let target = document.getElementById(targetDiv);
        target.innerHTML = result;
    }
}





