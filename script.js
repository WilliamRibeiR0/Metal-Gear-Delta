const contador = () => {
    const fim = new Date("2025-08-28T00:00:00").getTime();
    const agora = new Date().getTime();
    const tempoRestante = fim - agora;

    if (tempoRestante <= 0) {
        document.getElementById("contador").innerHTML = "O dia chegou!";
        return;
    }

    const segundosTotal = Math.floor(tempoRestante / 1000);

    const dias = Math.floor(segundosTotal / (60 * 60 * 24));
    const horas = Math.floor((segundosTotal % (60 * 60 * 24)) / (60 * 60));
    const minutos = Math.floor((segundosTotal % (60 * 60)) / 60);
    const segundos = Math.floor(segundosTotal % 60);

    document.getElementById("dias").innerHTML = dias + '<div class="label">Dias</div>';
    document.getElementById("horas").innerHTML = horas.toString().padStart(2, '0') + '<div class="label">Horas</div>';
    document.getElementById("minutos").innerHTML = minutos.toString().padStart(2, '0') + '<div class="label">Minutos</div>';
    document.getElementById("segundos").innerHTML = segundos.toString().padStart(2, '0') + '<div class="label">Segundos</div>';
};

contador(); // executa na primeira vez
setInterval(contador, 1000); // atualiza a cada segundo