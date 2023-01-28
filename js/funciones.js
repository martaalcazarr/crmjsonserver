export function mostrarAlerta(mensaje){
    const alerta = document.querySelector('.bg-red-100');

    if(!alerta){
        const alerta = document.createElement('p');
        alerta.classList.add('bg-red-100', 'border-red-400', 'text-red-700', 'px-4', 'py-3', 'rounded', 'max-w-lg', 'mx-auto', 'mt-6', 'text-center' );
        alerta.innerHTML = `
        <strong class="font-bold">Error!</strong>
        <span class="block sm:inline">${mensaje}</span>
        `;
        const formulario = document.querySelector('#formulario');
        formulario.appendChild(alerta);

        setTimeout(()=>{
            alerta.remove();
        }, 3000)
    }
}

export function validar(obj){
    //con object.values(obj) leo los valores del objeto(que es cliente en el if)
    //con every reviso una condicion en todos los elementos
    //input => reviso que input no sea igual a un string vacio(a un campo vacio de cliente)
    //con !Object, es lo contrario, reviso que todos los campos no sean un string vacio
    //es decir, que no haya ningún campo vacio 
    return !Object.values(obj).every(input => input !== '')
}