function palindromo(value) {
    let aux;
    if (value.includes("-")) {
      aux = value
        .split("-")
        .join(" ")
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .split("")
        .filter((value) => value !== " ");
    } else {
      aux = value
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .split("")
        .filter((value) => value !== " ");
    }
    const frase = JSON.stringify(aux);
    const fraseReversa = JSON.stringify(aux.reverse());
    return frase === fraseReversa;
  }
  
  const palavra = prompt("Digite uma palavra ou frase:");
  
  if (palavra.length > 0) {
    const y = + palavra;
  
    if (!isNaN(y)){
      alert("Digite uma palavra ou frase.");
    } else{
      if (palindromo(palavra)){
        alert(palavra + " é um palíndromo.");
      } else{
        alert(palavra +" não é um palíndromo.");
      }
    }
  }