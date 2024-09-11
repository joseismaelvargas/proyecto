import ListGroup from 'react-bootstrap/ListGroup';

function List({tarea,key,borrar}) {
  return (
    <>
    <ListGroup key={key} className='my-3'>
      <ListGroup.Item>{tarea} </ListGroup.Item>
    
     
    </ListGroup>  <button onClick={()=>borrar(tarea)} className='btn btn-danger'>Borrar</button>
    </>
  );
}

export default List;