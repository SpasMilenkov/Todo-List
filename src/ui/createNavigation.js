import '../style.css';
import menuImage from '../icons/menu.png';
const navBar = document.createElement('nav');

function navigation(buttonTheme, theme) {

    const ul = document.createElement('ul');
    const menu = document.createElement('li');
    const menuButton = new Image(48, 48);

    menuButton.src = menuImage;
    menuButton.addEventListener('click', toggleExpand);
    menu.appendChild(menuButton);
    navBar.appendChild(ul);
    ul.appendChild(menu);
    navBar.classList.add(theme);

    ul.classList.add('flex');
    document.body.appendChild(navBar);
}

function toggleExpand(){
    navBar.classList.toggle('expanded');       
}

export default navigation