export default function selectedPag({
  homePage, 
  universePage, 
  explorerPage
}){
  const nav = [
    homePage,
    universePage, 
    explorerPage
  ]

  function click(pag){
    for(let p=0; p<nav.length; p++){
      nav[p].classList.remove('pagDisplay')
      if(pag==nav[p]){
        pag.classList.add('pagDisplay')
      }
    }
  }

  return{
    click
  }
}