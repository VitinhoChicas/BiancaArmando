
    var imagens = ['certidao.jpg','nssFotos1.jpg', 'nssFotos2.jpg', 'nssFotos3.jpg', 'nssFotos4.jpg',  'nssFotos5.jpg', 'nssFotos6.jpg', 'nssFotos7.jpg', 'nssFotos8.jpg', 'nssFotos9.jpg', 'nssFotos10.jpg','nssFotos11.jpg','nssFotos12.jpg','nssFotos13.jpg','nssFotos14.jpg','nssFotos15.jpg','nssFotos16.jpg','nssFotos17.jpg','nssFotos18.jpg','nssFotos19.jpg','nssFotos20.jpg','nssFotos21.jpg','nssFotos22.jpg','nssFotos23.jpg','nssFotos24.jpg','nssFotos25.jpg','nssFotos26.jpg','nssFotos27.jpg','nssFotos28.jpg','nssFotos29.jpg','nssFotos30.jpg','nssFotos31.jpg','nssFotos32.jpg','nssFotos33.jpg','nssFotos34.jpg','nssFotos35.jpg','nssFotos36.jpg','nssFotos37.jpg','nssFotos38.jpg','nssFotos39.jpg','nssFotos40.jpg','nssFotos41.jpg','nssFotos42.jpg','nssFotos43.jpg','nssFotos44.jpg',];
    var indiceAtual = 0;

    function mudarFundo() {
      document.body.style.backgroundImage = 'url(' + imagens[indiceAtual] + ')';
      indiceAtual = (indiceAtual + 1) % imagens.length;
      setTimeout(mudarFundo, 3500); // Altera a imagem a cada 3 segundos (ajuste conforme necessário)
    }

    mudarFundo(); // Inicia o processo de mudança de imag