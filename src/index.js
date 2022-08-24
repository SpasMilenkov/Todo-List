import {setTheme }from "./ui/applySystemTheme";
import { createButton } from "./ui/createVisualToDo";
const contents = document.createElement('div');
contents.id = 'content'
setTheme()

document.body.appendChild(contents);
contents.appendChild(createButton());
export default contents;