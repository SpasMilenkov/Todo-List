import setDarkTheme from "./setDarkTheme";
import setLightTheme from "./setLightTheme";

let theme = 'dark';

const setTheme = () => {
    const darkThemeMq = window.matchMedia("(prefers-color-scheme: dark)");

    if(darkThemeMq.matches){
        setDarkTheme()
    }
    else{
        setLightTheme();
        theme = 'light'
    }
}

export {setTheme, theme};