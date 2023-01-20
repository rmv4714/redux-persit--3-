import React, { useState, useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";
import { connect } from "react-redux"
function App(props) {

  const [notes, setNotes] = useState([]);

  // function addNote(newNote) {
  //   setNotes(prevNotes => {
  //     return [...prevNotes, newNote];
  //   });
  // }

  // function deleteNote(id) {
  //   setNotes(prevNotes => {
  //     return prevNotes.filter((noteItem, index) => {
  //       return index !== id;
  //     });
  //   });
  // }

  // console.log(props.todos.allTodoData, "todostodos")


  useEffect(() => {
    fetch('https://dummyjson.com/todos')
      .then(res => res.json())
      .then(response => setNotes(response.todos));
  }, [])

  console.log(notes)
  return (
    <div>
      <Header />
      <CreateArea />
      {notes && notes?.map((noteItem, index) => {
        console.log(noteItem)
        return (
          <Note
            key={index}
            id={noteItem.id}
            title={noteItem.todo}
            // dateTime={noteItem.dateAndTime}
            // content={noteItem.content}
          // onDelete={deleteNote}
          />
        );
      })}
      <Footer />
    </div>
  );
}
const mapStateToProps = (state) => {
  return {
    todos: state
  }
}
export default connect(mapStateToProps, null)(App);
