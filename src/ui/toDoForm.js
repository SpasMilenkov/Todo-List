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

//Generates radio buttons with titles
function radioButtonFactory(value, title){
    const container = document.createElement('div');
    container.classList.add('card-mini');
    const radio = document.createElement("INPUT");
    const radioTitle = document.createElement('h1')
    radioTitle.textContent = title;
    radio.setAttribute("type", "radio");
    radio.value = value;

    container.appendChild(radio);
    container.appendChild(radioTitle);

    return container;
}