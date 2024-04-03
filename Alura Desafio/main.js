let encriptarTxt = document.querySelector('#texto-a-encriptar');
let encriptar = document.querySelector('#encriptar-btn');
let desencriptar = document.querySelector('#desencriptar-btn');
let txtEncriptado = document.querySelector('.texto-encriptado');
let copiarBtn = document.querySelector('#copiar-btn');

let texto = txtEncriptado.innerHTML;

function encriptarTexto(event) {
    event.preventDefault();
    //Arreglando Css///
    txtEncriptado.style.justifyContent = 'flex-start';
    txtEncriptado.style.fontSize = '24px';
    txtEncriptado.style.textAlign = 'start';
    let newText = "";
    //Verificando
    let textoOriginal = encriptarTxt.value;


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

        txtEncriptado.innerHTML = newText;


        txtEncriptado.innerHTML += '<button id="copiar-btn">Copiar</button>';
    });
}

function desencriptarTexto(event) {
    event.preventDefault();
    //Arreglando Css///
    txtEncriptado.style.justifyContent = 'flex-start';
    txtEncriptado.style.fontSize = '24px';
    txtEncriptado.style.textAlign = 'start';

    let texto = encriptarTxt.value;
    texto = texto.replace(/ai/g, 'a');
    texto = texto.replace(/enter/g, 'e');
    texto = texto.replace(/imes/g, 'i');
    texto = texto.replace(/ober/g, 'o');
    texto = texto.replace(/ufat/g, 'u');


    txtEncriptado.innerHTML = texto;
    txtEncriptado.innerHTML += '<button id="copiar-btn">Copiar</button>';
};


const copiarTxt = async (event) => {
    event.preventDefault();
    try {
        await navigator.clipboard.writeText(txtEncriptado.innerText);
    } catch (error) {
        console.error('Error al copiar: ', error);
    }
}

encriptar.addEventListener('click', encriptarTexto);
copiarBtn.addEventListener('click', copiarTxt);
desencriptar.addEventListener('click', desencriptarTexto)