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
    textoGuia.innerHTML = `Para empezar, da click en el <strong class="display-1 text-decoration-underline">PRIMER BOTÓN INICIO!</strong>`
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
    textoGuia.innerHTML = `Para empezar, da click en el <strong class="display-1 text-decoration-underline">PRIMER BOTÓN INICIO!</strong>`
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
    textoGuia.innerHTML = `Para empezar, da click en el <strong class="display-1 text-decoration-underline">PRIMER BOTÓN INICIO!</strong>`
})
navBtnInicio4.addEventListener("click", (e)=>{
    if(inicios >= 4){
        e.preventDefault()
        e.currentTarget.parentElement.remove()
        inicios++
        textoGuia.classList.remove("display-2")
        textoGuia.innerHTML = `Ahora dale click a +18 🙈🙈🙈`
        return
    }
    e.preventDefault()
    textoGuia.classList.add("display-2")
    textoGuia.innerHTML = `Para empezar, da click en el <strong class="display-1 text-decoration-underline">PRIMER BOTÓN INICIO!</strong>`
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
    textoGuia.innerHTML = `Para empezar, da click en el <strong class="display-1 text-decoration-underline">PRIMER BOTÓN INICIO!</strong>`
})
navBtnRec.addEventListener("click", (e)=>{
    if(inicios == 7){
        e.preventDefault()
        fotosRandom = textoGuia.parentElement.getElementsByTagName("div")[0]
        if(!fotosRandom){fotosRandom = document.createElement("div"); textoGuia.parentElement.insertBefore(fotosRandom, textoGuia)}
        fotosRandom.innerHTML = `
        <div class="d-block justify-content-center ">
            <h2 class="d-flex justify-content-center text-center pt-4">TE EXTRAÑARÉ MALDITAAAAAAAAAAAA</h2>
            <div>
                <img src="./img/00.jpeg" class="d-flex justify-content-center p-2 style="width=95%"">
            </div>
        </div>
        `
        textoGuia.innerText = "Espero que me extrañes tanto como lo haré yo <3"
        document.getElementsByTagName("nav")[0].remove()
        return
    }
    if(inicios >= 6){
        e.preventDefault()
        inicios++
        fotosRandom = document.createElement("div")
        fotosRandom.innerHTML = `
            <div class="d-flex justify-content-center ">
                <h2 class="d-flex justify-content-center text-center pt-4">¿Ya te dije que te quiero, Pau?</h2>
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
    textoGuia.innerHTML = `Para empezar, da click en el <strong class="display-1 text-decoration-underline">PRIMER BOTÓN INICIO!</strong>`
})
