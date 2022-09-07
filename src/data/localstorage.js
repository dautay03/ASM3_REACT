export const saveToLocalStorage = (key, item) => {
    localStorage.setItem(key, JSON.stringify(item))
}
export const getTolocalStorage = (key) => {
    return JSON.parse(localStorage.getItem(key))
}
export const removeTolocalStorage = (key) => {
    localStorage.removeItem(key)
}
