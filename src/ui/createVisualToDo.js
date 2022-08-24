import { theme } from "./applySystemTheme";
import contents from "..";
import addIcon from '../icons/circle-white.png'

const lightThemeToDo = () =>{
    const card = cardFactory();
    card.classList.add('light-card');
    contents.appendChild(card);
}

const darkThemeToDo = () =>{
    const card = cardFactory();
    card.classList.add('dark-card');
    contents.appendChild(card);
}

const cardFactory = () => {
    const card = document.createElement('div');
    const column = document.createElement('div');
    const heading = document.createElement('h1');
    const dropDown = new Image(16, 16);
    const backdrop = new Image();

    card.appendChild(heading);
    card.appendChild(dropDown);
    
    return card;
}

function createButton(){
    const createButton = document.createElement('h1');
    createButton.textContent = 'Enter sidequest';
    createButton.classList.add('main-heading', 'sans');
    const container = document.createElement('div');
    container.classList.add('container');
    container.appendChild(createButton);
    if(theme === 'dark'){    
        createButton.addEventListener('click', darkThemeToDo)
        container.classList.add('lighter');
        return container;
    }
    container.classList.add('darker');
    createButton.addEventListener('click', lightThemeToDo)
    
    return container;
}

export {createButton}