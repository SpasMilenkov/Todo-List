import { container } from "webpack";
import { theme } from "./applySystemTheme";

const inputInfo = [];

// Generates the container of the form
function renderForm(){
    const container = document.createElement('div')
    container.classList.add('form');

    if(theme === 'dark'){
        container.classList.add('form-dark-theme');
        return container;
    }
    container.classList.add('form-light-theme');
    return container;
}