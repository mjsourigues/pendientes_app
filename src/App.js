import Button from '@mui/material/Button';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Input from '@mui/material/Input';
import React, { useEffect, useState} from "react";
import Todo from "./Todo";
import './App.css';
import db from "./firebase";
import firebase from "firebase/compat/app";
import "firebase/compat/auth"
import "firebase/compat/firestore"


function App() {
  const [todos, setTodos]= useState([]);
  const [input, setInput]= useState("");
  // console.log(input);

  //Fetch de Firebase cuando inicia APP
  useEffect(()=>{
    db.collection("todos").orderBy("timestamp","desc").onSnapshot(snapshot => {
      setTodos(snapshot.docs.map(doc => ({id: doc.id ,todo: doc.data().todo})))
      })
  }, []);

  const addTodo = (event) => {
    //Agregar tarea
    event.preventDefault();

    db.collection("todos").add({
      todo: input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    })
    setTodos([...todos,input]);
    setInput("");
  }

  return (
    <div className="App">
      <h1>TAREAS 📚</h1>

      <form>
        <FormControl>
            <InputLabel>NUEVA TAREA 📗  </InputLabel>
            <Input value={input} onChange={event => setInput(event.target.value)}/>
        </FormControl>  

            <Button disabled={!input} type="submit" onClick={addTodo} variant="contained" color="success">
              AGREGAR
            </Button>
      </form>


      <ul>
        {todos.map(todo => (
          <Todo todo={todo}/>
        ))}
      </ul>
    </div>
  );
}

export default App;
