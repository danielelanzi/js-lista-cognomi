// <===========================INIZIO========================>
// Lista dei cognomi
var arrayCognomi = ['Magliozzi','Pacifico','Baglini','Bottini','Campagnolo','Carone','Di Giacomantonio','Corneli','Caiello','Arimatea','Correggia','Di Pilla','De Marco','Doballah','Carnaroli','Chimento','Eboulet','Fiore','Franzone','Lugli','Magliano','Lega','Logozzo','Tarantino','Trotta','Pari','Patti','Pandolfi','Palumbo','Pedone','Petracci','Riccio','Sergata'];

// Prompt cognome utente
var cognomeUtente = prompt('Qual\'è il tuo cognome?');

// Prima lettera cognome utente maiuscola
cognomeMaiuscolo = cognomeUtente.charAt().toUpperCase() + cognomeUtente.substring(1);

// Inserimento cognome utente all'interno della lista
arrayCognomi.push(cognomeMaiuscolo);

// Lista cognomi in ordine alfabetico
arrayCognomi.sort();

// Variabile indicazione posizione utente
var posizione = arrayCognomi.indexOf(cognomeMaiuscolo);

// Verifiche nella console
  // Inserimento cognome utente
  console.log('Il tuo cognome è: ' + cognomeMaiuscolo);
  // La posizione dell'utente
  console.log('La tua posizione è: ' + (posizione + 1));
  // Lista array ordinata dei cognomi con cognome utente da Prompt
  console.log(arrayCognomi);

  // Stampa su HTML e verifica console
    // Ciclo FOR
    for (var i = 0; i < arrayCognomi.length; i++) {
        document.getElementById('lista-cognomi').innerHTML += '<li>' + 'Posizione Utente: '  + (i+1) + " " + arrayCognomi[i] + '</li>';
        console.log(arrayCognomi[i]);
    };
// <===========================FINE========================>
