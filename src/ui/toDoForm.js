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
//Generates the category selection page
function categoryChoice(){

    const mainTitle = document.createElement('h1')
    mainTitle.textContent = 'Categories '

    container.appendChild(mainTitle);
    container.appendChild(radioButtonFactory('work', 'Work'));
    container.appendChild(radioButtonFactory('sport', 'Sport'));
    container.appendChild(radioButtonFactory('relax', 'Relax'));

    const nextButton = document.createElement('button');
    nextButton.textContent = 'Next'
    nextButton.addEventListener('click', addInfo);

}

