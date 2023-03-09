var IMC = function() {
    const weight = document.getElementById('weight').value
    const height = document.getElementById('height').value

    let result = weight/height

    let text = document.getElementById('content').innerHTML = "Seu imc é de:" + " " + result.toFixed(2)
}

