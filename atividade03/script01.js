let vet = [];

function handleKey(event) {
    if (event.keyCode === 13) {
        event.preventDefault();
        document.getElementById("button").click();
    }
}

function adicionar() {
    let item = document.getElementById("item");
    let valorItem = item.value;
    if (valorItem != "") {
        vet.push(valorItem);
        item.value = "";
    }
    apresentar();
}

function apresentar() {
    vet.sort();
    let lista = document.getElementById("lista");
    lista.innerText = "";
    vet.forEach(function (valor) {
        let item = document.createElement('li');
        item.innerText = valor;
        lista.appendChild(item);
    });
}