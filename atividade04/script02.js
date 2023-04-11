var lista = document.getElementById("lista");

function adicionar() {
  var item = document.getElementById("item");
  var valorItem = item.value;
  var listaItem = document.createElement("li");
  listaItem.innerHTML = valorItem + " <button onclick='subir(this.parentNode)'>Subir</button> <button onclick='descer(this.parentNode)'>Descer</button> <button onclick='deletar(this.parentNode)'>Excluir</button>";
  lista.appendChild(listaItem);
  item.value = "";
}

function deletar(listaItem) {
  lista.removeChild(listaItem);
}

function subir(listaItem) {
  var previouslistaItem = listaItem.previousSibling;
  if (previouslistaItem) {
    lista.insertBefore(listaItem, previouslistaItem);
  }
}

function descer(listaItem) {
  var nextlistaItem = listaItem.nextSibling;
  if (nextlistaItem) {
    lista.insertBefore(nextlistaItem, listaItem);
  }
}