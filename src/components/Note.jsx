import React from "react";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from '@material-ui/icons/Edit';
import DoneIcon from '@material-ui/icons/Done';
import { connect } from "react-redux"
import { deleteTodo } from "../redux/reducer";
import moment from "moment"
function Note(props) {

  function handleClick() {
    props.deleteTodo(props.id);
  }
  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <span>CreatedAt: {moment(props.dateTime).format('MMMM Do YYYY, h:mm a')}</span>
      <button onClick={handleClick}>
        <DeleteIcon />
      </button>
      {/* <button onClick={handleClick}>
        <DoneIcon />
      </button> */}
      {/* <button onClick={handleClick}>
        <EditIcon />
      </button> */}
    </div>
  );
}
const mapDispatchToProps = (dispatch) => {
  return {
    deleteTodo: (data) => dispatch(deleteTodo(data))
  }
}
export default connect(null, mapDispatchToProps)(Note);
