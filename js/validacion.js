const formulario = document.getElementById('formulario');
const inputs = document.querySelectorAll('#formulario input')


const expresiones = {
	// usuario: /^[a-zA-Z0-9\_\-]{4,16}$/, // Letras, numeros, guion y guion_bajo
	nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
    apellido: /^[a-zA-ZÀ-ÿ\s]{1,40}$/,
	// password: /^.{4,12}$/, // 4 a 12 digitos.
	correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
	telefono: /^\d{7,14}$/ // 7 a 14 numeros.
}

const campos = {
    nombre: false,
    apellido: false,
    telefono: false,
    correo: false
}

const validarFormulario = (e) => {
    switch (e.target.name) {
        case "nombre":
          validarCampo(expresiones.nombre, e.target, 'nombre');
        break;
        case "apellido":
            validarCampo(expresiones.apellido, e.target, 'apellido')
        break;
        case "telefono":
            validarCampo(expresiones.telefono, e.target, 'telefono')
        break;
        case "correo":
            validarCampo(expresiones.correo, e.target, 'correo')
        break;
    }
}

const validarCampo = (expresion, input, campo) => {
    if(expresion.test(input.value)){
        document.getElementById(`grupo__${campo}`).classList.remove('formulario__grupo-incorrecto');
        document.getElementById(`grupo__${campo}`).classList.add('formulario__grupo-correcto');
        document.querySelector(`#grupo__${campo} i`).classList.add('fa-check-circle');
        document.querySelector(`#grupo__${campo} i`).classList.remove('fa-times-circle');
        document.querySelector(`#grupo__${campo} .formulario__input-error`).classList.remove('formulario__input-error-activo');
        campos[campo] = true;
    } else {
        document.getElementById(`grupo__${campo}`).classList.add('formulario__grupo-incorrecto');
        document.getElementById(`grupo__${campo}`).classList.remove('formulario__grupo-correcto');
        document.querySelector(`#grupo__${campo} i`).classList.add('fa-times-circle');
        document.querySelector(`#grupo__${campo} i`).classList.remove('fa-check-circle');
        document.querySelector(`#grupo__${campo} .formulario__input-error`).classList.add('formulario__input-error-activo');
        campos[campo] = false;
    }
}

inputs.forEach((input) => {
    input.addEventListener('keyup', validarFormulario);
    input.addEventListener('blur', validarFormulario);
});

formulario.addEventListener('submit', (e) => {
    e.preventDefault();

    const terminos = document.getElementById('terminos')
    if(campos.nombre && campos.apellido && campos.telefono && campos.correo && terminos.checked){
        formulario.reset();

        document.getElementById('formulario__mensaje-exito').classList.add('formulario__mensaje-exito-activo');
        setTimeout(() =>{
            document.getElementById('formulario__mensaje-exito').classList.remove('formulario__mensaje-exito-activo')
        }, 5000);

        document.querySelectorAll('.formulario__grupo-correcto').forEach((icono) => {
            icono.classList.remove('formulario__grupo-correcto');
        });
    }
    else{
        document.getElementById('formulario__mensaje').classList.add('formulario__mensaje-activo');
        setTimeout(() =>{
            document.getElementById('formulario__mensaje').classList.remove('formulario__mensaje-activo')
        }, 3000);
    }
});




// function validarEnviar() {
//     //valido el nombre
//     if (document.fvalida.nombre.value.length  == 0) {
//         alert("Tiene que escribir su Nombre")
//         document.fvalida.nombre.focus()
//         return 0
//     }

    // if (document.fvalida.apellido.value.length  == 0) {
    //     alert("Tiene que escribir su Apellido")
    //     document.fvalida.apellido.focus()
    //     return 0
    // }

    // let date = Date.parse(nac);

    // if (isNaN(date)) {
    //     alert("Ingrese una fecha válida")
    //     document.fvalida.nac.focus()
    //     return 0
    // }

    // if (document.fvalida.email.value.length  == 0) {
    //     alert("Tiene que escribir su Mail")
    //     document.fvalida.email.focus()
    //     return 0
    // }

    // //Finalmente, si llegó hasta aqui, se envia el form.
    // alert("Muchas gracias por enviar el formulario")
    // document.fvalida.submit()
