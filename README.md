# nosso-fio-vermelho
<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Te esperando...</title>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick.min.css" />
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick-theme.min.css" />
  <style>
    body {
      margin: 0;
      background-color: #0d0d0d;
      color: #fff;
      font-family: 'Segoe UI', sans-serif;
      overflow-x: hidden;
    }

    .fio-vermelho {
      position: fixed;
      top: 0;
      left: 0;
      width: 100vw;
      height: 100vh;
      background: radial-gradient(circle, transparent 60%, rgba(255, 0, 0, 0.2));
      background-image: url('https://i.imgur.com/3LC5Vqv.png');
      background-repeat: repeat;
      background-size: 600px;
      animation: moverFio 30s linear infinite;
      opacity: 0.15;
      z-index: -1;
    }

    @keyframes moverFio {
      0% { transform: translate(0, 0); }
      100% { transform: translate(-300px, -300px); }
    }

    .container {
      text-align: center;
      padding: 100px 20px;
    }

    h1 {
      font-size: 1.5rem;
      margin-bottom: 0.5rem;
      color: #ffb3c6;
    }

    #contador {
      font-size: 2.5rem;
      font-weight: bold;
      color: #fff;
      margin-bottom: 2rem;
    }

    .texto {
      max-width: 600px;
      margin: auto;
      font-size: 1.1rem;
      color: #ddd;
    }

    .galeria {
      margin: 3rem auto;
      max-width: 90vw;
    }

    .galeria img {
      height: 200px;
      border-radius: 10px;
      margin: 0 auto;
    }
  </style>
</head>
<body>
  <div class="fio-vermelho"></div>
  <div class="container">
    <h1>te esperando há</h1>
    <div id="contador">carregando...</div>

    <div class="texto">
      mesmo sem você aqui, eu sigo caminhando com esperança. tô segurando firme o nosso fio vermelho e a mão de Deus. tô mudando, crescendo, e te esperando com o coração aberto. esse lugar é pra você voltar quando quiser lembrar que eu continuo aqui. 🌙
    </div>

    <div class="galeria slider">
      <div><img src="https://via.placeholder.com/300x200" alt="Foto 1" /></div>
      <div><img src="https://via.placeholder.com/300x200" alt="Foto 2" /></div>
      <div><img src="https://via.placeholder.com/300x200" alt="Foto 3" /></div>
    </div>
  </div>

  <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick.min.js"></script>
  <script>
    $(document).ready(function(){
      $('.slider').slick({
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: false,
        dots: true
      });
    });

    const contador = document.getElementById("contador");
    const dataInicial = new Date("2025-05-08T20:00:00");

    function atualizarContador() {
      const agora = new Date();
      const diff = agora - dataInicial;

      const dias = Math.floor(diff / (1000 * 60 * 60 * 24));
      const horas = Math.floor((diff / (1000 * 60 * 60)) % 24);
      const minutos = Math.floor((diff / (1000 * 60)) % 60);
      const segundos = Math.floor((diff / 1000) % 60);

      contador.textContent = `${dias} dias, ${horas} horas, ${minutos} minutos e ${segundos} segundos`;
    }

    setInterval(atualizarContador, 1000);
    atualizarContador();
  </script>
</body>
</html>
