import './style.css'

const navigation =  (buttonTheme, theme) =>{
    const navBar = document.createElement('nav');
    const ul = document.createElement('ul');
    const menu = document.createElement('li');
    const menuButton = new Image(64, 64);

    menuButton.src = buttonTheme;
    menu.addEventListener('click', onClick(navBar))
    menu.appendChild(menuButton);
    navBar.appendChild(ul)
    ul.appendChild(menu);
    navBar.classList.add(theme)

    ul.classList.add('flex')
    document.body.appendChild(navBar);
};

const onClick = (navBar) =>{
    navBar.classList.toggle('expanded');       

}

export default navigation