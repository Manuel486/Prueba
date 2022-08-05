const texto=document.querySelector('#texto');
const btnEncriptar=document.querySelector('#botonE');
const btnDesencriptar=document.querySelector('#botonD');
const resultado=document.querySelector('#resultado');
const btnCopiar=document.querySelector('#botonC');

btnEncriptar.addEventListener('click',encriptar);
btnDesencriptar.addEventListener('click',desencriptar);
btnCopiar.addEventListener('click',copiar);

function encriptar(){
    let encriptador = [/e/gi,/i/gi,/a/gi,/o/gi,/u/gi];
    let palabrasclave = ["enter","imes","ai","ober","ufat"];
    let newstr = texto.value;
    for (let i = 0; i < palabrasclave.length; i++) {
        newstr = newstr.replace(encriptador[i], palabrasclave[i]);
    }
    resultado.innerText = newstr;
    document.querySelector('#resultado__mensaje').style.display='none';
    document.querySelector('#resultado__copiar').style.display='flex';
}

function desencriptar(){
    let palabrasclave = [/enter/g,/imes/g,/ai/g,/ober/g,/ufat/g];
    let desencriptador = ["e","i","a","o","u"];
    let newstr = texto.value;
    for (let i = 0; i < palabrasclave.length; i++) {
        newstr = newstr.replace(palabrasclave[i],desencriptador[i]);
    }
    resultado.innerText = newstr;
}

function copiar(){
    resultado.select();
    document.execCommand('copy');
}

