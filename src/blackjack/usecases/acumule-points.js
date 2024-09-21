  import {valorCarta} from './card-value'

  // Turno: 0 = primer jugador y el ultimo sera la computadora
  export const acumularPuntos = (scoreHtml, puntosJugadores, carta, turno) => {
    puntosJugadores[turno] = puntosJugadores[turno] + valorCarta(carta);
    scoreHtml[turno].innerText = puntosJugadores[turno];
    return puntosJugadores[turno];
}