import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchAllNotebooksAsync, selectAllNotebooks } from "../redux/notebooksSlice";

const NotebookBar = ({ id }) => {
  const dispatch = useDispatch();
  const { notebookId } = useParams();
  let notebooks = useSelector(selectAllNotebooks);
  console.log("NOTEBOOKS", notebooks)
  let filteredNotebook = notebooks.filter((notebook) => notebook.id == notebookId)
  console.log("FILTERED NOTEBOOK", filteredNotebook)

  useEffect(() => {
    dispatch(fetchAllNotebooksAsync(id));
  }, [dispatch]);

  return (
    <>
      {filteredNotebook.map(notebook => {
        return (
          <div className="notebookBar" key={notebook.id}>
            <div className="notebookBarTitle" key={notebook.id}>{notebook.title}</div>
            <div className="notebookBarNoteContainer">
              {notebook.notes.map(note => {
                return (
                  <div className="notebookBarNote" key={note.id}>{note.text}</div>
                )
              })}
            </div>
          </div>
        )
      })}

    </>

  )
};

export default NotebookBar;
