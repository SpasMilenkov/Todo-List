import { theme } from "./applySystemTheme";
import contents from "..";
import work from '../images/work.jpg';
import dropdown from '../icons/light-drop-down-arrow.png'

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
    const dropDown = new Image(16, 16);
    dropDown.src = dropdown;
    const heading = document.createElement('h1');
    heading.classList.add('main-heading');
    heading.textContent = 'Test heading';
    card.style.background = `linear-gradient(90deg, rgba(231,231,231,0.227328431372549) 0%, rgba(46,139,192,0.87718837535014) 63%), url('${work}')`;
    card.style.backgroundSize = 'cover'
    card.style.backgroundPosition = 'center';

    card.appendChild(heading);
    card.appendChild(dropDown);
    card.classList.add('todo');
    
    return card;
}

function createButton(){
    const createButton = document.createElement('h1');
    createButton.textContent = 'Enter sidequest';
    createButton.classList.add('main-heading', 'sans');
    const container = document.createElement('div');
    container.classList.add('container');
    container.appendChild(createButton);

    //fixes the theme of the button 

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