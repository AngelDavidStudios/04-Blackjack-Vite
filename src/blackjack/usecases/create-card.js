export const crearCarta = (divCartasPlayer,carta, turno) => {
    const imgCarta = document.createElement('img');
    imgCarta.src = `assets/cartas/${carta}.png`;
    imgCarta.classList.add('carta');
    divCartasPlayer[turno].append(imgCarta);
}