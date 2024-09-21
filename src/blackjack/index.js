import _ from 'underscore'
import {crearDeck as createDeck, pedirCarta, turnoComputadora, acumularPuntos, crearCarta} from './usecases'

// Patron modulo
const myModule = (() => {
  'use strict';

  let deck = [];
  const tipos = ['C', 'D', 'H', 'S'],
        especiales = ['A', 'J', 'Q', 'K'];

  let puntosJugadores = [];

  // Referencias del Html
  const btnNuevo = document.querySelector('#btnNew'),
        btnPedir = document.querySelector('#btnPedir'),
        btnDetener = document.querySelector('#btnStop');
        
  const divCartasPlayer = document.querySelectorAll('.divCartas'),
        scoreHtml = document.querySelectorAll('small'); 

  // Funcion para inicializar el juego
  const initGame = (numPLayers = 2) => {
    deck = createDeck(tipos, especiales);

    puntosJugadores = [];
    for (let i = 0; i < numPLayers; i++) {
        puntosJugadores.push(0);
    }

    scoreHtml.forEach(elem => elem.innerText = 0);
    divCartasPlayer.forEach(elem => elem.innerHTML = '');

    btnPedir.disabled = false;
    btnDetener.disabled = false;
  }

  // Eventos
  btnPedir.addEventListener('click', () => { 
      const carta = pedirCarta(deck);
      const puntosJugador = acumularPuntos(scoreHtml, puntosJugadores, carta, 0);

      crearCarta(divCartasPlayer, carta, 0);

      if (puntosJugador > 21) {
          console.warn('Perdiste');
          btnPedir.disabled = true;
          btnDetener.disabled = true;
          turnoComputadora(scoreHtml, divCartasPlayer, puntosJugador, deck, puntosJugadores);

      } else if (puntosJugador === 21) {
          console.warn('21, Genial');
          btnPedir.disabled = true;
          btnDetener.disabled = true;
          turnoComputadora(scoreHtml,divCartasPlayer, puntosJugador, deck, puntosJugadores);
      }
  });

  // Detener
  btnDetener.addEventListener('click', () => { 
      btnPedir.disabled = true;
      btnDetener.disabled = true;
      turnoComputadora(scoreHtml, divCartasPlayer, puntosJugadores[0], deck, puntosJugadores);
  });

  // Nuevo Juego
  btnNuevo.addEventListener('click', () => {
      initGame();
  });

  return {
      newGame: initGame
  }

})();