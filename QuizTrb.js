function Finalizar() {

    let respostasCorretas = {
        q1: "B",
        q2: "C",
        q3: "C",
        q4: "B",
        q5: "B",
        q6: "D",
        q7: "B",
        q8: "C"
    };

    let acertos = 0;

    for (let pergunta in respostasCorretas) {

        let alternativas = document.getElementsByName(pergunta);

        for (let i = 0; i < alternativas.length; i++) {

            if (
                alternativas[i].checked &&
                alternativas[i].value === respostasCorretas[pergunta]
            ) {
                acertos++;
            }
        }
    }

    document.getElementById("resultado").innerHTML =
        "Acertou " + acertos + " de 8 questões!";

    let radios = document.querySelectorAll('input[type="radio"]');

    for (let i = 0; i < radios.length; i++) {
        radios[i].disabled = true;
    }

    document.querySelector(".botao").disabled = true;

    // Desce suavemente até o footer
    document.getElementById("rodape").scrollIntoView({
        behavior: "smooth"
    });
}

