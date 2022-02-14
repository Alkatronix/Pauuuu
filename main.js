// Components
const navBtnInicio0 = document.getElementById("nav-btn-inicio0")
const navBtnInicio1 = document.getElementById("nav-btn-inicio1")
const navBtnInicio2 = document.getElementById("nav-btn-inicio2")
const navBtnInicio3 = document.getElementById("nav-btn-inicio3")
const navBtnInicio4 = document.getElementById("nav-btn-inicio4")
const navBtnExp = document.getElementById("nav-btn-exp")
const navBtnRec = document.getElementById("nav-btn-rec")

const textoGuia = document.getElementById("textoGuia")

// Variables
var inicios = 0

// Listeners
navBtnInicio0.addEventListener("click", (e)=>{
    e.preventDefault()
    e.currentTarget.parentElement.remove()
    inicios++
})
navBtnInicio1.addEventListener("click", (e)=>{
    if(inicios >= 1){
        e.preventDefault()
        e.currentTarget.parentElement.remove()
        inicios++
        return
    }
    e.preventDefault()
    textoGuia.classList.add("display-2")
    textoGuia.innerHTML = `💝 Para empezar, da click en el <strong class="display-1 text-decoration-underline">PRIMER BOTÓN INICIO!</strong> 💝`
})
navBtnInicio2.addEventListener("click", (e)=>{
    if(inicios >= 2){
        e.preventDefault()
        e.currentTarget.parentElement.remove()
        inicios++
        return
    }
    e.preventDefault()
    textoGuia.classList.add("display-2")
    textoGuia.innerHTML = `💝 Para empezar, da click en el <strong class="display-1 text-decoration-underline">PRIMER BOTÓN INICIO!</strong> 💝`
})
navBtnInicio3.addEventListener("click", (e)=>{
    if(inicios >= 3){
        e.preventDefault()
        e.currentTarget.parentElement.remove()
        inicios++
        return
    }
    e.preventDefault()
    textoGuia.classList.add("display-2")
    textoGuia.innerHTML = `💝 Para empezar, da click en el <strong class="display-1 text-decoration-underline">PRIMER BOTÓN INICIO!</strong> 💝`
})
navBtnInicio4.addEventListener("click", (e)=>{
    if(inicios >= 4){
        e.preventDefault()
        e.currentTarget.parentElement.remove()
        inicios++
        textoGuia.classList.remove("display-2")
        textoGuia.innerHTML = `Que juiciosa bb, ahora dale click a Contenido Explícito 🙈🙈🙈`
        return
    }
    e.preventDefault()
    textoGuia.classList.add("display-2")
    textoGuia.innerHTML = `💝 Para empezar, da click en el <strong class="display-1 text-decoration-underline">PRIMER BOTÓN INICIO!</strong> 💝`
})
navBtnExp.addEventListener("click", (e)=>{
    if(inicios == 5){
        e.preventDefault()
        inicios++
        textoGuia.classList.remove("display-2")
        textoGuia.innerHTML = `😳😳😳`
        navBtnExp.classList.add("display-5")
        navBtnExp.innerText = "😠"
        navBtnRec.innerHTML = `<strong class="display-5">Recuerdos bonitos <3</strong>`
        navBtnExp.id = ""
        return
    }
    e.preventDefault()
    textoGuia.classList.add("display-2")
    textoGuia.innerHTML = `💝 Para empezar, da click en el <strong class="display-1 text-decoration-underline">PRIMER BOTÓN INICIO!</strong> 💝`
})
navBtnRec.addEventListener("click", (e)=>{
    if(inicios == 7){
        e.preventDefault()
        fotosRandom = textoGuia.parentElement.getElementsByTagName("div")[0]
        if(!fotosRandom){fotosRandom = document.createElement("div"); textoGuia.parentElement.insertBefore(fotosRandom, textoGuia)}
        fotosRandom.innerHTML = `
        <div class="d-block justify-content-center ">
            <div class="d-flex justify-content-center ">
                <img src="./img/04.jpeg" class="d-flex justify-content-center p-2 style="width=35%"">
                <img src="./img/m04.jpeg" class="d-flex justify-content-center p-2 style="width=55%"">
            </div>
            <div class="d-flex justify-content-center ">
                <img src="./img/03.jpeg" class="d-flex justify-content-center p-2 style="width=35%"">
                <img src="./img/m03.jpeg" class="d-flex justify-content-center p-2 style="width=35%"">
            </div>
            <h3 class="d-flex justify-content-center bg-dark text-light p-2">Espero Hayas Tenido Un Feliz Día de San Valentín 💖💝😘</h3>
            <div class="d-flex justify-content-center ">
                <img src="./img/02.jpeg" class="d-flex justify-content-center p-2 style="width=55%"">
                <img src="./img/m02.jpeg" class="d-flex justify-content-center p-2 style="width=35%"">
            </div>
            <div class="d-flex justify-content-center ">
                <img src="./img/01.jpeg" class="d-flex justify-content-center p-2 style="width=35%"">
                <img src="./img/m01.jpeg" class="d-flex justify-content-center p-2 style="width=35%"">
            </div>
            <div>
                <img src="./img/00.jpeg" class="d-flex justify-content-center p-2 style="width=95%"">
            </div>
            <div class="d-flex justify-content-center">
                <audio controls>
                    <source src="./img/puntoFinal.ogg" type="audio/ogg">
                    Your browser does not support the audio element.
                </audio>
            </div>
            <div class="d-flex justify-content-center">
                <audio controls>
                    <source src="./img/historia.ogg" type="audio/ogg">
                    Your browser does not support the audio element.
                </audio>
            </div>
        </div>
        `
        textoGuia.innerText = "Te mando un abrazo y un beso por cada risa que me has sacado 💕"
        document.getElementsByTagName("nav")[0].remove()
        return
    }
    if(inicios >= 6){
        e.preventDefault()
        inicios++
        fotosRandom = document.createElement("div")
        fotosRandom.innerHTML = `
            <div class="d-flex justify-content-center ">
                <img src="./img/5.jpg" class="d-flex justify-content-center style="width=75%"">
            </div>
            <div class="d-flex justify-content-center">
                <audio controls>
                    <source src="./img/EquipoRocket.ogg" type="audio/ogg">
                    Your browser does not support the audio element.
                </audio>
            </div>
        `
        textoGuia.parentElement.insertBefore(fotosRandom, textoGuia)
        textoGuia.classList.remove("display-2")
        textoGuia.innerHTML = `(Vuelvele a dar al botón)`
        return
    }
    if(inicios >= 5){
        e.preventDefault()
        textoGuia.classList.add("display-2")
        textoGuia.innerText = "😑😑😑😑😑"
        return
    }
    e.preventDefault()
    textoGuia.classList.add("display-2")
    textoGuia.innerHTML = `💝 Para empezar, da click en el <strong class="display-1 text-decoration-underline">PRIMER BOTÓN INICIO!</strong> 💝`
})
