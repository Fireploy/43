export function generarCodigo(longitud = 6) {
    return Math.floor(Math.pow(10, longitud - 1) + Math.random() * 9 * Math.pow(10, longitud - 1)).toString();
}
