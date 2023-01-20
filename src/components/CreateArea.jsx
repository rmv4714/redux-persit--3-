import React, { useState, useEffect } from "react";
import AddIcon from "@material-ui/icons/Add";
import Fab from "@material-ui/core/Fab";
import Zoom from "@material-ui/core/Zoom";
import { connect } from "react-redux"
import { addTodo, deleteTodo } from "../redux/reducer";
function CreateArea(props) {
  
  const [isExpanded, setExpanded] = useState(false);
  const [note, setNote] = useState({
    title: "",
    content: "",
    dateAndTime: new Date(),
    id: Math.floor(Math.random() * 101)
  });

  function handleChange(event) {
    const { name, value } = event.target;
    setNote(prevNote => {
      return {
        ...prevNote,
        [name]: value
      };
    });
  }

  function submitNote(event) {
    event.preventDefault();
    if (note.content !== "", note.title !== "") {
      props.addTodo(note)
      setNote({
        id: Math.floor(Math.random() * 101),
        title: "",
        content: "",
        dateAndTime: new Date()
      });
    }
  }

  function expand() {
    setExpanded(true);
  }

  return (
    <div>
      <form className="create-note">
        {isExpanded && (
          <input
            name="title"
            onChange={handleChange}
            value={note.title}
            placeholder="Title"
          />
        )}

        <textarea
          name="content"
          onClick={expand}
          onChange={handleChange}
          value={note.content}
          placeholder="Take a note..."
          rows={isExpanded ? 3 : 1}
        />
        <Zoom in={isExpanded}>
          <Fab onClick={submitNote}>
            <AddIcon />
          </Fab>
        </Zoom>
      </form>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    todos: state
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    addTodo: (data) => dispatch(addTodo(data)),
    deleteTodo: (data) => dispatch(deleteTodo(data))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateArea);
