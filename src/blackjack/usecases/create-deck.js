import _ from 'underscore';

/**
 * 
 * @param {Array<string>} tiposCartas Ejemplo: ['C', 'D', 'H', 'S']
 * @param {Array<string>} tiposEspeciales Ejemplo: ['A', 'J', 'Q', 'K']
 * @returns {Array} retorna un nuevo dek de cartas
 */
  export const crearDeck = (tiposCartas, tiposEspeciales) => {

    if (!tiposCartas || tiposCartas.length === 0) {
      throw new Error('Tipos de cartas es obligatorio en un arreglo de strings');
    }

    if (!tiposEspeciales || tiposEspeciales.length === 0) { 
        throw new Error('Tipos especiales es obligatorio en un arreglo de strings');
    }

    let deck = [];

    for (let i = 2; i <= 10; i++) { 
        for (let tipo of tiposCartas) {
            deck.push(i + tipo);
        }
    }
    for (let tipo of tiposCartas) {
        for (let especial of tiposEspeciales) {
            deck.push(especial + tipo);
        }
    }

    return _.shuffle(deck);
}