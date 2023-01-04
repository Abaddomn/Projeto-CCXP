const dia = document.getElementById('dia')
const hora = document.getElementById('hora')
const minuto = document.getElementById('minuto')
const segundo = document.getElementById('segundo')

const lancamento = "26 March 2023"

function countDown(){
    const datalanc = new Date(lancamento)
    const hoje = new Date()

    const segTotal = (datalanc - hoje)/1000;

    const finalDias = Math.floor  (segTotal / 60 / 60 / 24);
    const finalHoras = Math.floor (segTotal / 60 / 60) % 24;
    const finalMinutos = Math.floor (segTotal / 60) % 60;
    const finalSegundos = Math.floor (segTotal) % 60;

    dia.innerHTML = formatoTempo (finalDias)
    hora.innerHTML = formatoTempo (finalHoras)
    minuto.innerHTML = formatoTempo (finalMinutos)
    segundo.innerHTML = formatoTempo (finalSegundos)

    dia.innerHTML = LetraD (finalDias)
    hora.innerHTML = LetraH (finalHoras)
    minuto.innerHTML = LetraM (finalMinutos)
    segundo.innerHTML = LetraS (finalSegundos)

}

/*Adicionando (0) antes dos numeros menores que 10.  */
function formatoTempo (tempo) {
    return tempo <10? `0${tempo}` : tempo;
}
/*Adicionando (As letras) antes dos numeros Maiores que 0.  */
        function LetraD (tempo) {
            return tempo >0? `${tempo}D` : tempo;
        }

        function LetraH (tempo) {
            return tempo >0? `${tempo}H` : tempo;
        }

        function LetraM (tempo) {
            return tempo >0? `${tempo}M` : tempo;
        }

        function LetraS (tempo) {
            return tempo >0? `${tempo}S` : tempo;
        }

countDown();
setInterval(countDown, 1000)