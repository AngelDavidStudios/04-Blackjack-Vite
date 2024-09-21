  import { pedirCarta } from './';
  import { playersWinner } from './winner-condition';
  import { acumularPuntos } from './acumule-points';
  import { crearCarta } from './create-card';

/**
 * 
 * @param {Number} puntosMinimos 
 * @param {Array<String>} deck 
 */
export const turnoComputadora = (scoreHtml, divCartasPlayer,puntosMinimos, deck, puntosJugadores) => {
    let puntosComputadora = 0;

    do {
        const carta = pedirCarta(deck);
        puntosComputadora = acumularPuntos(scoreHtml,puntosJugadores, carta, puntosJugadores.length - 1);
        crearCarta(divCartasPlayer, carta, puntosJugadores.length - 1);

    } while ( (puntosComputadora < puntosMinimos) && (puntosMinimos <= 21) );

    playersWinner(puntosJugadores);
}