function calculate() {
    var base = parseFloat(document.getElementById('base').value);
    var height = parseFloat(document.getElementById('height').value);

    if (!isNaN(base) && !isNaN(height)) {
        var area = 0.5 * base * height;
        var perimeter = base + height + Math.sqrt(base**2 + height**2);

        document.getElementById('area').innerText = area.toFixed(2);
        document.getElementById('keliling').innerText = perimeter.toFixed(2);
    } else {
        alert("Masukkan angka yang valid untuk alas dan tinggi");
    }
}
