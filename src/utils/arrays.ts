/**
 * clone клонирует массив.
 * 
 * @param a T[] исходный массив
 */
function clone<T>(a: T[]): T[] {
    return JSON.parse(JSON.stringify(a))
}

export default {
    clone,
}
