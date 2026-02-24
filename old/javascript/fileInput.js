const input = document.querySelector("input")
const preview = document.querySelector('.preview');

import imgModule from './imgManager.js';

input.addEventListener('change', showTextFile);

const img_module = new imgModule(3);

img_module.sayHi()

function showTextFile (){
    const selectedFiles = input.files;

    for (const file of selectedFiles) {
        console.log(file.type);
    }
}
