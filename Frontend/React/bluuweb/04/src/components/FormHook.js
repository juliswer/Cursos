import React, { Fragment } from 'react';
import {useForm} from 'react-hook-form';

const Formhook = () => {

    const {register, errors, handleSubmit} = useForm();

    const onSubmit = data => console.log(data);

    return ( 
        <Fragment>
            <h1>Formulario</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input
                    name="titulo"
                    className="form-control my-2"
                    {...register("titulo", {required: true, maxLength: 20, message: 'Titulo obligatorio'})}
                />
                <span className="text-danger text-small d-block mb-2">
                    {errors?.titulo?.message}
                </span>
            </form>
            <button className="btn btn-primary">Enviar</button>
        </Fragment>
    );
}
 
export default Formhook;