//seleção de elementos
const calcBtn = document.querySelector('#calcular')
const limBtn = document.querySelector('#limpar')
const weight = document.querySelector('#peso')
const height = document.querySelector('#altura')
const spanResult = document.querySelector('#imc-result')
const spanSituation = document.querySelector('#imc-situation')
const erro = document.querySelector('#erro')
const formContainer = document.querySelector('#form-controls')
const resultContainer = document.querySelector('#container-result')
const imcSpan = document.querySelector('#imc-result')
const situationSpan = document.querySelector('#imc-situation')
const closeBtn = document.querySelector('#close')

//funções
function validDigits(text){
    return text.replace(/[^0-9,]/g, "")
}
function validatImc(){
    const peso = weight.value
    const altura = height.value

    if(peso === '' || altura === ''){
        erro.style.display = 'block'
    }
    else{
        erro.style.display = 'none'
        showResults()
    }
}

function calcImc(weight, height){
    const imc = (weight / (height * height)).toFixed(1)

    return imc
}

function showResults(){
    formContainer.style.display = 'none'
    resultContainer.style.display = 'flex'
    
}
//eventos

[weight, height].forEach((el) =>{
    el.addEventListener('input', (e) =>{
        const updateValue = validDigits(e.target.value)

        e.target.value = updateValue
    })
})

calcBtn.addEventListener('click', (e) =>{
    e.preventDefault()
    const weightV = +weight.value.replace(',', '.')
    const heightV = +height.value.replace(',', '.')  

    validatImc()
    const imc = calcImc(weightV, heightV)
    imcSpan.innerHTML = imc
})

limBtn.addEventListener('click', () =>{
    weight.value = ''
    height.value = ''
})

    
closeBtn.addEventListener('click', () =>{
    formContainer.style.display = 'flex'
    resultContainer.style.display = 'none'
})