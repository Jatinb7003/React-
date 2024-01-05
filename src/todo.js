import React, { useState } from 'react';

function Todo() {
 
  const [todos,setTodos]=useState([]);
  
  const addTodo = (event) => {
    if (event.key === 'Enter') {
      let ob={
        id:Date.now(),
        todo:event.target.value,
        flag:false
      }
      let data=[...todos];
      data.push(ob);
      setTodos(data);
      event.target.value=''; 
    }
  };



const checkboxClick = (index) => {
  todos.forEach((todo)=>
  {
    if(todo.id===index)
    {
      if(todo.flag===false)
      {
        todo.flag=true;
        todo.todo=<s>{todo.todo}</s>;
      }
      else
      {
        todo.flag=false;
        todo.todo=todo.todo.props.children;
      }
    }
  })
  let list=[...todos];
  setTodos(list);
  };
  
  
  const handleDelete = (index) => {
    const updatedList = todos.filter((elemet) =>{return elemet.id!== index});
    setTodos(updatedList);
  };
  const divStyle = {
    height: '600px',
    width: '60%',
    float: 'left',
    borderRight: '2px solid black',
  };

  const big = {
    width: '100%'
  };

  return (
    <div style={big}>
      <div>
        <h1>TO-DO List</h1>
        <hr />
      </div>
      <div style={divStyle} id='divv'>
        <h3>Task List </h3>
        <ul>
        {todos.map((task) => {
         return <li key={task.id}>
            <span>{task.todo}</span>
            <input
              type="checkbox"
              onChange={() => checkboxClick(task.id)}
            />
            <span onClick={() => handleDelete(task.id)}>&#x00D7;</span>
          </li>
})}
      </ul>
      </div>
      <div>
        <input
          type="text"
          placeholder="I need to..."
          id="newtodo"
          onKeyDown={addTodo}
        />
      </div>
    </div>
  );
}

export default Todo;