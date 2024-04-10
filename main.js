// Variáveis
const closedBiscuit = document.querySelector(".closedBiscuit")
const openedBiscuit = document.querySelector(".openedBiscuit")
const btnReset = document.querySelector("#btnReset")
const biscuitImage = document.querySelector(".closedBiscuit img")

// Eventos
biscuitImage.addEventListener("click", openBiscuit)
btnReset.addEventListener("click", toggleScreen)

const phrases = [
    "A vida trará grandes desafios, mas também grandes recompensas.",
    "Aja sempre com gentileza e colherá bons frutos.",
    "O sucesso está no horizonte de quem persiste.",
    "Acredite nos seus sonhos e os tornará realidade.",
    "Grandes oportunidades surgirão quando menos esperar.",
    "A sorte favorece os audazes.",
    "Seja paciente, pois grandes conquistas exigem tempo.",
    "Aprenda com o passado, viva o presente, sonhe o futuro.",
    "A felicidade está nas pequenas coisas da vida.",
    "O destino sorri para aqueles que não desistem.",
];

function toggleScreen() {
    closedBiscuit.classList.toggle("hide")
    openedBiscuit.classList.toggle("hide")
}

function openBiscuit() {
    toggleScreen()
    newPhrases()
}

function newPhrases() {
    let randomPhrases = Math.round(Math.random() * 10)
    document.querySelector('.openedBiscuit span').innerHTML = phrases[randomPhrases]
}