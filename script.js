let data = [
    "procedimiento garantia",
    "PROCEDIMIENTO DE EMISIÓN CONCEPTOS TECNICOS",
    "PROCEDIMIENTO CAPACITACIÓN/INDUCCIÓN ÁREA TÉCNICA",
];

function buscar() {
    let TextBuscar = document.getElementById("Dartext").value;
    console.log(TextBuscar);
    if (TextBuscar.trim() === "") {
        return;
    }
    let result = [];
    for (let i = 0; i < data.length; i++) {
        if (data[i].toLowerCase().includes(TextBuscar.toLowerCase())) {
            result.push(data[i]);
        }
    }

    document.getElementById("result").innerHTML = "";

    if (result.length > 0) {
        for (let i = 0; i < result.length; i++) {
            let li = document.createElement("li");
            li.textContent = result[i];
            document.getElementById("result").appendChild(li);
        }
    } else {
        let li = document.createElement("li");
        li.textContent = "No se encontró texto";
        document.getElementById("result").appendChild(li);
    }
}