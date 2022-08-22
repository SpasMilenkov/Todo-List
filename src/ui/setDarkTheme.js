import navigation from "./createNavigation";

const setDarkTheme = () =>{
    navigation('./icons/menu.png', 'dark-theme-nav')
    document.body.classList.add('dark-theme')
}

export default setDarkTheme;