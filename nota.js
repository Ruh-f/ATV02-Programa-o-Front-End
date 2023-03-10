let not;

do {
  not = parseFloat(prompt("Escreva uma nota entre 0 e 10:"));

  if (isNaN(not) || not < 0 || not > 10) {
    alert("Nota Invalida");
  }
} while (isNaN(not) || not < 0 || not > 10);

alert("Nota válida: " + not);