const $form = document.querySelector('#form_agregar-paciente');
const $formContent = document.querySelector('.form-content');
const $clienteNombre = document.querySelector('#cliente-nombre');
const $clienteApellido = document.querySelector('#cliente-apellido');
const $clienteDni = document.querySelector('#cliente-dni');
const $clienteTelefono = document.querySelector('#cliente-telefono');
const $btnAgregar = document.querySelector('#btn-agregar');


document.addEventListener('DOMContentLoaded',()=>{
    $btnAgregar.addEventListener('click', agregarDatos);    
});

function agregarDatos(e){
    e.preventDefault();
    toggleBtn();
    console.log('enviando');
    
    const cliente = {
        nombre: $clienteNombre.value,
        apellido: $clienteApellido.value,
        dni: $clienteDni.value,
        telefono: $clienteTelefono.value
    }

    const {nombre,apellido,dni,telefono} = cliente;
    console.log(nombre)
    $.ajax({
        method: "POST",
        url: "php/agregar-cliente.php",
        data: { nombre,apellido,dni,telefono }
    })
        .done(function (respuesta) {
            if(respuesta === 'Cliente agregado con exito'){
                mostrarMensaje(respuesta);
                $form.reset();    
            }else{
                mostrarMensaje(respuesta,'error');
            }
            
        
        });
}


function mostrarMensaje(mensaje,tipo){
    const existeMensaje = document.querySelector('.mensaje');
    if(!existeMensaje){

        const $divMensaje = document.createElement('div');
        const $mensaje = document.createElement('p');
        $mensaje.textContent = mensaje;
        (tipo==='error') ? $divMensaje.classList.add('mensaje-error','mensaje') : $divMensaje.classList.add('mensaje-success','mensaje');
        
        $divMensaje.appendChild($mensaje);
        $formContent.appendChild($divMensaje);
        setTimeout(() => {
            $divMensaje.remove();
            toggleBtn();
        }, 3000);
    }
    
}

function toggleBtn(){
    $btnAgregar.classList.toggle('hide');
}
