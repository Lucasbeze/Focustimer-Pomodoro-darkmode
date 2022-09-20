                                                                // BOTAO DO DARK MODE 

const $html = document.querySelector('html')
const dark = document.querySelector('.darkMode')
const light = document.querySelector('.lightMmode')

                                                                // AÇÃO DO BOTAO DO DARK MODE
light.addEventListener('click', function(){
    $html.classList.toggle('htmlDark')
})

dark.addEventListener('click', function(){
    $html.classList.toggle('htmlDark')
})

light.addEventListener('click', function(){
    light.classList.add('hide')
        dark.classList.remove('hide')
    })
    
    dark.addEventListener('click', function(){
        dark.classList.add('hide')
        light.classList.remove('hide')
    })
    

    
                                                                // BOTOES DOS FUNCIONAMENTOS DO RELOGIO

const buttonPlay = document.querySelector('.play')
const buttonPause = document.querySelector('.pause')
const buttonStop = document.querySelector('.stop')
const buttonMais = document.querySelector('.aumentar')
const buttonMenos = document.querySelector('.diminuir')
const minutesDisplay = document.querySelector('.minutes')
const secondsDisplay = document.querySelector('.seconds')
let timerTimeout

                                                                //AÇOES DO BOTAO DO RELOGIO

function countdown() {
    timerTimeout = setTimeout(function(){
        let seconds = Number(secondsDisplay.textContent)
        let minutes = Number(minutesDisplay.textContent)

        if( seconds <= 0 ) {
            seconds = 60

            minutesDisplay.textContent = String(minutes -1).padStart(2, '0')
        }

        secondsDisplay.textContent = String(seconds - 1).padStart(2, '0')

        if( minutes <= 0 ) {

            minutesDisplay.textContent = "00"
            secondsDisplay.textContent = "00"
            return
        }
        
        countdown()
    }, 1000)
}

buttonPlay.addEventListener('click', function(){
    buttonPlay.classList.add('hide')
    buttonPause.classList.remove('hide')
    countdown()
})
    
buttonPause.addEventListener('click', function(){
    buttonPause.classList.add('hide')
    buttonPlay.classList.remove('hide')
    clearTimeout(timerTimeout)
})

buttonStop.addEventListener('click', function(){
    buttonPlay.classList.remove('hide')
    buttonPause.classList.add('hide')
    clearTimeout(timerTimeout)
    minutesDisplay.textContent = "25" 
    secondsDisplay.textContent = "00"
})

buttonMais.addEventListener('click', function(){   
    minutesDisplay.textContent = Number(minutesDisplay.textContent) + 5
})

buttonMenos.addEventListener('click', function(){   
        minutesDisplay.textContent =  Number(minutesDisplay.textContent) -5 
        if ( minutesDisplay.textContent <= 0) {
            minutesDisplay.textContent = "00"
        }
})

                                                                //BOTOES DOS SONS 

const buttonFlorest = document.querySelector('.florest')
const buttonRain = document.querySelector('.rain')
const buttonCoffe = document.querySelector('.coffe')
const buttonFireplace = document.querySelector('.fireplace')
const buttonPressFlorest = new Audio('../sons/Floresta.wav')
const buttonPressRain = new Audio('../sons/Chuva.wav')
const buttonPressCoffe = new Audio('../sons/Cafeteria.wav')
const buttonPressFireplace = new Audio('../sons/Lareira.wav')


                                                                //AÇAO DO BOTAO DOS SONS 

buttonFlorest.addEventListener('click', function(){
    buttonPressFlorest.play()
    buttonPressFlorest.loop = true
})

buttonRain.addEventListener('click', function(){    
    buttonPressRain.play()
    buttonPressRain.loop = true
})

buttonCoffe.addEventListener('click', function(){
    buttonPressCoffe.play()
    buttonPressCoffe.loop = true
})

buttonFireplace.addEventListener('click', function(){  
    buttonPressFireplace.play()
    buttonPressFireplace.loop = true
})


//Criaçao das variaveis para fazer o controle de audio

const forestInput = document.querySelector('#volForest')
const rainInput = document.querySelector('#volRain')
const coffeInput = document.querySelector('#volCoffe')
const fireInput = document.querySelector('#volFireplace')

//controladores de audio fazer a funçao de aumentar e diminuir o volume 

forestInput.addEventListener('change', function() {
    const volForest = forestInput.value / 100
    buttonPressFlorest.volume = volForest
})

rainInput.addEventListener('change', function(){
    const volRain = rainInput.value / 100
    buttonPressRain.volume = volRain
})

coffeInput.addEventListener('change', function(){
    const volCoffe = coffeInput.value / 100
    buttonPressCoffe.volume = volCoffe
})

fireInput.addEventListener('change', function(){
    const volFire = fireInput.value / 100
    buttonFireplace.volume = volFire
})


