var numeroEntrada = 0, opcion = 0, resultadoFactorial = 1;
do {
    opcion = parseInt(prompt("Ingrese la opción que desea realizar 1.Factorial 2. Determinar par e impar 3.Terminar"));
    switch (opcion) {
        case 1:
            numeroEntrada = parseInt(prompt("Ingrese el número al que le quiere encontrar el factorial"))
            for (let i = 1; i <= numeroEntrada; i++) {
                resultadoFactorial = resultadoFactorial * i;

            }
            alert(resultadoFactorial + " es el factorial de " + numeroEntrada);
            break;
        case 2:
            numeroEntrada = parseInt(prompt("Ingrese el número que quiere determinar si es par o impar"));
            if ((numeroEntrada % 2) == 0) {
                alert(numeroEntrada + " es par")
            } else {
                alert(numeroEntrada + " es impar")
            }
            break;
    }
} while (opcion != 3);