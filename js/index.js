function letras(texto) {
    Swal.fire({
        icon: 'error',
        iconColor: '#FF030F',
        background: '#000000',
        title: '¡Vaya!',
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
        letras('Ingrese un mensaje a encriptar o desencriptar');
    } else {
        if (/[^a-zñ ]/.test(text)) {
            letras('Escribe solo letras minusculas y sin acento');
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
        letras('Ingrese un mensaje a encriptar o desencriptar');
    } else {
        if (/[^a-zñ ]/.test(text)) {
            letras('Escribe solo letras minusculas y sin acento');
        } else {
            let txaResultado = document.getElementById("txa-resultado");
            txaResultado.value = desencriptarTexto(text);
            txaResultado.style.backgroundImage = "none";
            let botonCopiar = document.getElementById('copiar');
            botonCopiar.style.display = 'block';
        }
    }
}

function copiar() {
    console.log('asdsadas')
    let txaResultado = document.getElementById("txa-resultado");
    // Obtener el texto que se debe copiar
    const textoACopiar = txaResultado.value;

    navigator.clipboard.writeText(textoACopiar)
        .then(() => {
            letras('Se copio con exito ');
        })
        .catch(() => {
            letras('No se copio con exito ');
        });
}

