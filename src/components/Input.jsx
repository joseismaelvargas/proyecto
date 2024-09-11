import { useState } from 'react';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { useForm } from "react-hook-form"

function Input() {
    
const { register, handleSubmit ,formState:{errors}} = useForm();
const [tareas,settarea]=useState([])
const agregar=(data,e)=>{
    e.preventDefault()
    let datos=data.tarea
    settarea([datos,...tareas]

    )

}
console.log(tareas)


  return (
    <>
    <Form className='d-flex' onSubmit={handleSubmit(agregar)}>
    <FloatingLabel
        controlId="floatingInput"
        label="Agrege Tarea"
        className="mb-3"
      >
        <Form.Control type="text" placeholder="Agrege Tarea" style={{
            width:"400px"
        }} name='tarea' {...register("tarea")} />
      </FloatingLabel>
     
      <button type='submit' className='btn btn-primary ms-3' style={{
        width:"150px",
        height:"60px"
      }}> Agregar Tarea</button>
      </Form>
    </>
  );
}

export default Input;