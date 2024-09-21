  // Funcion para pedir una carta

  /**
   * 
   * @param {Array<String>} Array de cartas
   * @returns {String} retorna una carta del deck
   */
  export const pedirCarta = (deck) => {
    if (deck.length === 0) {
        throw 'No hay cartas en el deck';
    }
    return deck.pop();
}