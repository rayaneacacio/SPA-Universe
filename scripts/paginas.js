export default class Pag{
  constructor(conteudo, imagem){
    document.querySelector('#container').innerHTML = conteudo
    document.querySelector('body').style.background = `url(${imagem})`
    document.querySelector('body').style.backgroundSize = 'cover'
  }
}