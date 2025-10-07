// L'obiettivo è contare da 1 a 100, ma facendo casino con le parole "Fizz" e "Buzz".

// Inizio creando il nostro **ciclo** che va da 1 fino a 100, numero per numero.
    // Controllo subito se il numero è divisibile sia per 3 che per 5.
    // Il modo più rapido è vedere se è divisibile per 15 (15 = 3 * 5).
    // Se il resto della divisione per 15 è zero.
        // Se becca il 15, stampiamo "FizzBuzz" e basta.
    // Se non era multiplo di 15, controlliamo se è solo un multiplo di 3.
        // Se è multiplo di 3, stampiamo "Fizz".
    // Se non ha superato i primi due test, controlliamo se è solo un multiplo di 5.
        // Se è multiplo di 5, stampiamo "Buzz".
    // Se non è multiplo di NESSUNO dei tre, stampiamo semplicemente il numero.
    // L'else è tipo il "se non hai trovato nulla di speciale, fai la cosa normale".
 // Finito il giro fino al 100.

 for (let i = 1; i <= 100; i++) {
    if (i % 15 == 0) {
        console.log("FizzBuzz")
    }
    else if (i % 5 == 0) {
        console.log("Buzz")
    }
    else if (i % 3 == 0) {
        console.log("Fizz")
    }
    else {
        console.log(i)
    }
 }