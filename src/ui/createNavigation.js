import '../style.css';
import menuImage from '../icons/menu.png';

function navigation(buttonTheme, theme) {
    const navBar = document.createElement('nav');
    const ul = document.createElement('ul');
    const menu = document.createElement('li');
    const menuButton = new Image(48, 48);


    function toggleExpand(){
        if(navBar.classList.contains('expanded')){
            while(ul.childElementCount !== 1){
                ul.removeChild(ul.childNodes[ul.childElementCount - 1]);
            }
        }

        if(!navBar.classList.contains('expanded')){
            const viewProfile = document.createElement('li');
            viewProfile.textContent = 'View profile';
            
            const viewCompleted = document.createElement('li');
            viewCompleted.textContent = 'View completed sidequests';
            viewProfile.classList.add('sans');
            viewCompleted.classList.add('sans');
            ul.appendChild(viewProfile);
            ul.appendChild(viewCompleted);
        }
        navBar.classList.toggle('expanded');
        ul.classList.toggle('expanded');
    }

    menuButton.src = menuImage;
    menuButton.addEventListener('click', toggleExpand);
    menu.appendChild(menuButton);
    navBar.appendChild(ul);
    ul.appendChild(menu);
    navBar.classList.add(theme);

    ul.classList.add('flex');
    document.body.appendChild(navBar);
}


export default navigation