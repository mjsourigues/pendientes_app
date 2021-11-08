import React, { useState } from 'react';
import ListItem from '@mui/material/ListItem';
import List from '@mui/material/List';
import ListItemText from '@mui/material/ListItemText';
import "./Todo.css";
import { Button } from '@mui/material';
import db from "./firebase";
import DeleteIcon from '@mui/icons-material/Delete';
import Modal from '@mui/material/Modal';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Fade from '@mui/material/Fade';
import Typography from '@mui/material/Typography';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

function Todo(props) {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const [input, setInput] = useState();

    const updateTodo =()=>{
        db.collection("todos").doc(props.todo.id).set({
            todo: input
        }, {merge:true})
        setOpen(false);
    }

    return (
        <> 
            <Modal 
                open={open} 
                onClose={handleClose}
                closeAfterTransition
            >
                <Fade in={open}>
                    <Box sx={style}>
                        <Typography id="transition-modal-title" variant="h6" component="h2">
                            <h1>Modificación</h1>
                        </Typography>
                        <Typography id="transition-modal-description" sx={{ mt: 2 }}>
                            <input placeholder={props.todo.todo} value={input} onChange={event=> setInput(event.target.value)}></input>
                            <button onClick={updateTodo}>Actualizar</button>
                        </Typography>
                    </Box>
                </Fade>
            </Modal>

            <List className="todo_list">
                <ListItem>
                    <ListItemText primary="↪️" secondary={props.todo.todo}>
                    </ListItemText>
                </ListItem>
                <button onClick={e=>setOpen(true)}>Editar</button>
                <DeleteIcon onClick={event => 
                    db.collection("todos").doc(props.todo.id).delete()}>
                </DeleteIcon>
            </List>
        </>
        //React Fragment
    )
}

export default Todo
