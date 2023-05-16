let num = document.querySelectorAll(".numeros")
let operacao = document.querySelectorAll(".operacao")
let input = document.querySelector(".input")
let calcular = document.querySelector(".calcular")
let deletar = document.querySelector(".deletar")
let clean = document.querySelector(".clean")
let ponto = document.querySelector(".ponto")


let sinal = false;

num.forEach((numeros) => {
    numeros.addEventListener("click", (e) => {
        input.value += e.target.value
        sinal = false
       
    })
})



operacao.forEach((op) => {
    op.addEventListener("click", (e) => {
        pontos = false
        
        if (sinal == false) {
            if (input.value.length == 0) {
                if (op.value == "*" || op.value == "/") return
                input.value += e.target.value
                sinal = true 
            } else{
                input.value += e.target.value
                sinal = true 
            }

        }

    })
})


calcular.addEventListener("click", () => {
    if (input.value.length > 0) {
        input.value = eval(input.value)
    }

})




deletar.addEventListener("click", () => {
    input.value = input.value.substring(0, input.value.length - 1)
})



clean.addEventListener("click", () => {
    input.value = ""
})


let pontos = false

ponto.addEventListener("click" , ()=>{
    if(!pontos){
        input.value += ponto.innerText
        pontos = true
    }
})