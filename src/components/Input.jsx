import { useEffect, useState } from 'react';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { useForm } from "react-hook-form"
import List from './List';

function Input() {
    
const { register, handleSubmit ,formState:{errors},reset} = useForm();

let leer=JSON.parse(localStorage.getItem("TArealocal"))||[]
const [tareas,settarea]=useState(leer)

useEffect(()=>{
localStorage.setItem("TArealocal",JSON.stringify(tareas))
},[tareas])

const agregar=(data,e)=>{
    e.preventDefault()
    let datos=data.tarea
    settarea([datos,...tareas])
    reset()

}
const borrarlist=(tare)=>{
 const filtrar=tareas.filter((tarea)=>tarea!==tare )
//  alert("DD")
 settarea(filtrar)
}
console.log(tareas)


  return (
    <>
    <Form className='d-flex' onSubmit={handleSubmit(agregar)}>
    <FloatingLabel
        controlId="floatingInput"
        label="Agregue"
        className="mb-3"
      >
        <Form.Control type="text" placeholder="Agregue " style={{
            width:"400px"
        }} name='tarea' {...register("tarea")} />
      </FloatingLabel>
     
      <button type='submit' className='btn btn-primary ms-3' style={{
        width:"150px",
        height:"60px"
      }}> Agregar Tarea</button>
      </Form>
        <hr />
        <h2 className='text-center '>Tareas</h2>
      {
        tareas.map((tarea,index)=>(
       <List tarea={tarea} key={index} borrar={borrarlist}></List>
        )
        )
      }
    </>
  
  );
}

export default Input;