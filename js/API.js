const url = 'http://localhost:4000/clientes'

//cuando se crea nuevo cliente
export const nuevoCliente = async (cliente) => {

    try{
        await fetch(url, {
            //para crear un nuevo registro dentro de url
            method: 'POST',
            //body es el contenido de la peticion post a la url
            //lo stringify para que convierta el objeto que obtengo de post en string
            body: JSON.stringify(cliente),
            //los headers son informacion de que tipo de datos estamos enviando
            headers: {
                'Content-Type': 'application/json'
            }
        });
        //despues de ejecutar la accion, envio al usuario a index.html
        window.location.href = 'index.html'

    }catch(error){
        console.log(error);
    }
}
//obtiene todos los clientes
export const obtenerClientes = async () => {
    try{
        //por defecto es un GET, en nuevoCliente yo tengo que especificar el method POST
        const resultado = await fetch(url);
        const clientes = await resultado.json();
        return clientes;
    }catch(error){
        console.log(error);
    }
}

//elimina un cliente
export const eliminarCliente = async id => {
    try{
        await fetch(`${url}/${id}`,{
        method: 'DELETE'
    })
    }catch(error){
        console.log(error)
    }
}

//obtiene un cliente por el id

export const obtenerCliente = async id => {
    try{
        const resultado = await fetch(`${url}/${id}`)
        const cliente = await resultado.json();
        return cliente
    }catch(error){
        console.log(error)
    }
}

//actualiza un registro
export const editarCliente = async cliente => {
    console.log(cliente)
    try{
        await fetch(`${url}/${cliente.id}`,{
            method: 'PUT',
            body: JSON.stringify(cliente),
            headers:{
                'Content-Type': 'application/json'
            }
        });
        window.location.href='index.html';
    }catch(error){
        console.log(error);
    }
}