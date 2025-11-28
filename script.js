document.getElementById("celcius").addEventListener("input", function () {
    document.getElementById("farenheit").value = "";
    document.getElementById("kelvin").value = "";
});

document.getElementById("farenheit").addEventListener("input", function () {
    document.getElementById("celcius").value = "";
    document.getElementById("kelvin").value = "";
});

document.getElementById("kelvin").addEventListener("input", function () {
    document.getElementById("celcius").value = "";
    document.getElementById("farenheit").value = "";
});


function ConverterTemperatura() {
    const celsius = parseFloat(document.getElementById("celcius").value);
    const fahrenheit = parseFloat(document.getElementById("farenheit").value);
    const kelvin = parseFloat(document.getElementById("kelvin").value);

    let C, F, K;

    if (!isNaN(celsius)) {
        C = celsius;
        F = (C * 9 / 5) + 32;
        K = C + 273.15;

    } else if (!isNaN(fahrenheit)) {
        F = fahrenheit;
        C = (F - 32) * 5 / 9;
        K = C + 273.15;

    } else if (!isNaN(kelvin)) {
        K = kelvin;
        C = K - 273.15;
        F = (C * 9 / 5) + 32;

    } else {
        alert("Por favor, insira um valor em pelo menos um campo.");
        return;
    }

    document.getElementById("celcius").value = C.toFixed(2);
    document.getElementById("farenheit").value = F.toFixed(2);
    document.getElementById("kelvin").value = K.toFixed(2);
}