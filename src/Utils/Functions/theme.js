const localTheme = localStorage.getItem('theme')
export const themeToggle = () => {

    if (localTheme && localTheme === "light") {
        document.documentElement.className = 'dark'
        localStorage.setItem('theme', 'dark')
    } else {
        document.documentElement.className = 'light'
        localStorage.setItem('theme', 'light')
    }
}


window.onload = () => {
    
    if (localTheme && localTheme === "light") {
        document.documentElement.className = 'light'
        localStorage.setItem('theme', 'light')
    } else {
        document.documentElement.className = 'dark'
        localStorage.setItem('theme', 'dark')
    }
}