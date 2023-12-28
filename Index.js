
//FOTOS//

var imagens = ['lua1.jpg' , 'lua2.jpg', 'lua3.jpg'];
    var indiceAtual = 0;

    function mudarFundo() {
      document.body.style.backgroundImage = 'url(' + imagens[indiceAtual] + ')';
      indiceAtual = (indiceAtual + 1) % imagens.length;
      setTimeout(mudarFundo, 1500); // Altera a imagem a cada 3 segundos (ajuste conforme necessário)
    }

    mudarFundo(); // Inicia o processo de mudança de imagem

  



//MENU//

function f() {
  document.getElementsByClassName('dropdown')[0].classList.toggle('down');
  document.getElementsByClassName('arrow')[0].classList.toggle('gone');
  if (document.getElementsByClassName('dropdown')[0].classList.contains('down')) {
    setTimeout(function() {
      document.getElementsByClassName('dropdown')[0].style.overflow = 'visible'
    }, 500)
  } else {
    document.getElementsByClassName('dropdown')[0].style.overflow = 'hidden'
  }
}
