const lightThemeToDo = () =>{
    const card = cardFactory();
    card.classList.add('light-card');
}

const darkThemeToDo = () =>{
    const card = cardFactory();
    card.classList.add('dark-card');
    
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

const gradientFactory = () =>{

}
export {lightThemeToDo, darkThemeToDo}