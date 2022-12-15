import Pag from "./paginas.js"
import selectedPag from "./navhover.js"

let homePage = document.querySelector('#home')
let universePage = document.querySelector("#universe")
let explorerPage = document.querySelector('#explorer')

const navpag = selectedPag({
  homePage, 
  universePage, 
  explorerPage
})

let mainPage = `<div id="main"><h1>Explore o Universo</h1> <button>Quero saber mais</button><div>`
new Pag(mainPage, './images/mountains-universe-1.png')

homePage.addEventListener('click', function(){
  new Pag(mainPage, './images/mountains-universe-1.png')
  navpag.click(homePage)
})

universePage.addEventListener('click', function(){
  new Pag(`<h1>O Universo</h1> <p>A palavra Universo deriva do latim universum. A palavra latina foi usada por Cícero e posteriormente por outros autores com o mesmo sentido que é empregada atualmente. A palavra latina é derivada da contração poética unvorsum — utilizada primeiramente por Lucrécio no Livro IV de seu “Sobre a Natureza das coisas” — que conecta un, uni (um) com vorsum, versum (que significa "algo rodado, rolado ou mudado").</p>`, './images/mountains-universe02.png')
  navpag.click(universePage)
})

explorerPage.addEventListener('click', function(){
  new Pag('<h1>Exploração</h1> <p>Os corpos celestes e astros sempre foram motivo de grande fascinação na humanidade. Há registros de gregos, mesopotâmicos e astecas descrevendo vários acontecimentos celestes. Na era contemporânea, vários cientistas deram grandes contribuições para que o sonho de explorar o espaço pudesse se tornar realidade, como o russo Konstantin Tsiolkovsky, o alemão Hermann Oberth e o estadunidense Robert Goddard.</p>', './images/mountains-universe-3.png')
  navpag.click(explorerPage)
})