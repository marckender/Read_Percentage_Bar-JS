//pegar container do texto
const postWrap = document.querySelector( '.post-wrap')

//creation of the bar
let bar = document.createElement('div')

// Bar styles
bar.style.height= '4px'
// bar.style.width= '500px'
bar.style.width= '0'
bar.style.background= '#6633cc'
bar.style.position= 'fixed'
bar.style.top= '0'
bar.left='0'
bar.style.zIndex= '9999'
bar.style.transition = '0.5s'

//Set the bar on page
document.body.append(bar)

//refresh the bar
const updateBar= ()=> {
   // o tamanho da caixa que contem o texto
   const textHeight = postWrap.offsetHeight
   //verificar em que posiçao da pagina estou
   const pagePositionY = window.pageYOffset
   //regra de 3
   const updatedBar = (pagePositionY * 100) / textHeight
 
   bar.style.width = updatedBar +'%'
}

//move on scroll


window.addEventListener("load", () => {
  document.addEventListener('scroll', updateBar)

})