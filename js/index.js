function letras(texto) {
    Swal.fire({
        icon: 'error',
        iconColor: '#FF030F',
        background: '#000000',
        title: '¡Oops...!',
        color: '#f2f2f2',
        confirmButtonColor: '#245FE6',
        text: texto,
        customClass: {
            confirmButton: 'custom-button',
        },
    });
}

function encriptarTexto(texto) {
    let cifradoText = texto.replace(/e/gm, "enter");
    cifradoText = cifradoText.replace(/i/gm, "imes");
    cifradoText = cifradoText.replace(/a/gm, "ai");
    cifradoText = cifradoText.replace(/o/gm, "ober");
    cifradoText = cifradoText.replace(/u/gm, "ufat");

    return cifradoText;
}

function desencriptarTexto(textoEncriptado) {
    let textoOriginal = textoEncriptado.replace(/enter/gm, "e");
    textoOriginal = textoOriginal.replace(/imes/gm, "i");
    textoOriginal = textoOriginal.replace(/ai/gm, "a");
    textoOriginal = textoOriginal.replace(/ober/gm, "o");
    textoOriginal = textoOriginal.replace(/ufat/gm, "u");

    return textoOriginal;
}

function encriptar() {
    let text = document.getElementById("txa-entrada").value.trim();

    if (text === '') {
        letras('Enter a message to encrypt or decrypt');
    } else {
        if (/[^a-zñ ]/.test(text)) {
            letras('Write only lowercase letters and no accents');
        } else {
            let txaResultado = document.getElementById("txa-resultado");
            txaResultado.value = encriptarTexto(text);
            txaResultado.style.backgroundImage = "none";
            let botonCopiar = document.getElementById('copiar');
            botonCopiar.style.display = 'block';
        }
    }
}

function desencriptar() {
    let text = document.getElementById("txa-entrada").value.trim();

    if (text === '') {
        letras('Enter a message to encrypt or decrypt');
    } else {
        if (/[^a-zñ ]/.test(text)) {
            letras('Write only lowercase letters and no accents');
        } else {
            let txaResultado = document.getElementById("txa-resultado");
            txaResultado.value = desencriptarTexto(text);
            txaResultado.style.backgroundImage = "none";
            let botonCopiar = document.getElementById('copiar');
            botonCopiar.style.display = 'block';
        }
    }
}


function copio() {
    Swal.fire({
        icon: 'success',
        iconColor: '#36CA31',
        background: '#000000',
        title: 'It was copied successfully',
        color: '#f2f2f2',
        confirmButtonColor: '#245FE6',
        showConfirmButton: false,
        timer: 1500
    });
}

function copiar() {
    let txaResultado = document.getElementById("txa-resultado");
    const textoACopiar = txaResultado.value;
    navigator.clipboard.writeText(textoACopiar)
        .then(() => {
            copio();
        })
        .catch(() => {
            letras('Did not copy successfully');
        });
}