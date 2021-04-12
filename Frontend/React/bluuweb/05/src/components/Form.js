import React from "react";
import { useForm } from "react-hook-form";
import {Fragment} from 'react'

export default function Form() {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const onSubmit = (data, e) => {
      console.log(data)
      e.target.reset();
    };

  console.log(watch("example")); // watch input value by passing the name of it

  return (
      <Fragment>
          <h1>Ejemplo</h1>
          <form onSubmit={handleSubmit(onSubmit)}>
              <input
                className="form-control my-2"
                placeholder="inserte un titulo"
                {...register
                    ("titulo", 
                    {required: true}
                )}
                
              />
              {errors.titulo && "el titulo es muy necesario viste"}
              <input
                placeholder="inserte una descripcion"
                {...register("descripcion", {required: true})}
                className="form-control my-2"
              />
              {errors.descripcion && "el subtitulo es muy necesario viste"}
              <button className="btn btn-primary">Agregar</button>
          </form>
      </Fragment>
    /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
    //<form onSubmit={handleSubmit(onSubmit)}>
      //{/* register your input into the hook by invoking the "register" function */}
      //<input defaultValue="test" {...register("example")} />
      
      //{/* include validation with required or other standard HTML validation rules */}
      //<input {...register("exampleRequired", { required: true })} />
      //{/* errors will return when field validation fails  */}
      //{errors.exampleRequired && <span>This field is required</span>}
      
      //<input type="submit" />
    //</form> 
  );
}