let encriptarTxt = document.querySelector('#texto-a-encriptar');
let encriptar = document.querySelector('#encriptar-btn');
let desencriptar = document.querySelector('#desencriptar-btn');
let txtEncriptado = document.querySelector('.texto-encriptado');
let copiarBtn = document.querySelector('#copiar-btn');
let cifrado = document.querySelector('.cifrado');
let txtdefault = document.querySelector('.txt-vacio')

let texto = txtEncriptado.innerHTML;

copiarBtn.disabled = true;

function encriptarTexto(event) {
    event.preventDefault();
    //Arreglando Css///
    txtEncriptado.style.justifyContent = 'flex-start';
    txtEncriptado.style.fontSize = '24px';
    txtEncriptado.style.textAlign = 'start';
    let newText = "";
    //Verificando
    let textoOriginal = encriptarTxt.value;

    txtdefault.innerHTML = "";
    textoOriginal.split('').forEach(char => {
        switch (char) {
            case 'a':
                newText += 'ai';
                break;
            case 'e':
                newText += 'enter';
                break;
            case 'i':
                newText += 'imes';
                break;
            case 'o':
                newText += 'ober';
                break;
            case 'u':
                newText += 'ufat';
                break;
            default:
                newText += char;
        }

        cifrado.innerHTML = newText;
    });

    copiarBtn.disabled = false;
}

function desencriptarTexto(event) {
    event.preventDefault();
    //Arreglando Css///
    txtEncriptado.style.justifyContent = 'flex-start';
    txtEncriptado.style.fontSize = '24px';
    txtEncriptado.style.textAlign = 'start';

    txtdefault.innerHTML = "";

    let texto = encriptarTxt.value;
    texto = texto.replace(/ai/g, 'a');
    texto = texto.replace(/enter/g, 'e');
    texto = texto.replace(/imes/g, 'i');
    texto = texto.replace(/ober/g, 'o');
    texto = texto.replace(/ufat/g, 'u');

    cifrado.innerHTML = texto;
    copiarBtn.disabled = false;
};


function copiarTxt(event) {
    event.preventDefault();
    navigator.clipboard.writeText(cifrado.innerHTML);
    console.log('Hola');
}

encriptar.addEventListener('click', encriptarTexto);
copiarBtn.addEventListener('click', copiarTxt);
desencriptar.addEventListener('click', desencriptarTexto);