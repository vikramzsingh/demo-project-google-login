export const setToken = (key, value) => {
    window.sessionStorage.setItem(key, value)
}

export const getToken = (key) => {
    return window.sessionStorage.getItem(key) || ''
}

export const removeToken = (key) => {
    window.sessionStorage.removeItem(key)
    console.log(key)
}

export const removeAllToken = () => {
    window.sessionStorage.clear()
}

