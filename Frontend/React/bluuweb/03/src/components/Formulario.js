import React, {Fragment, useState} from 'react';

const Formulario = () => {
    const [datos, setDatos] = useState({
        nombre: '',
        apellido: ''
    })

    const handleInputChange = (e) => {   
        setDatos({
            ...datos,
            [e.target.value] : e.target.value
        })
    }

    const enviarDatos = (e) => {
        e.preventDefault(); 
        console.log(datos.nombre + ' ' + datos.apellido);
    }

    return ( 
        <Fragment>
            <h1>Formulario</h1>
            <form className="row" onSubmit={enviarDatos}>
                <div className="col-md-3">
                    <input 
                    type="text"
                    placeholder="Ingrese nombre" 
                    className="form-control" 
                    name="nombre"
                    onChange={handleInputChange}
                    />
                </div>
                <div className="col-md-3">
                    <input 
                    type="text"
                    placeholder="Ingrese apellido" 
                    className="form-control"
                    name="apellido"
                    onChange={handleInputChange}
                    />
                </div>
                <div className="col-md-3">
                    <button className="btn btn-primary" type="submit">Enviar</button>
                </div>
            </form>
            <h3>{datos.nombre} - {datos.apellido}</h3>
        </Fragment>
     );
}
 
export default Formulario;