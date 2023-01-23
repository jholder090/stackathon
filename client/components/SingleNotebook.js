import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchAllNotebooksAsync, selectAllNotebooks } from "../redux/notebooksSlice";
import NotebookBar from "./NotebookBar";
import TextEditor from "./textEditor/TextEditor";

const SingleNotebook = ({ id }) => {
  const dispatch = useDispatch();
  const { notebookId } = useParams();
  let notebooks = useSelector(selectAllNotebooks);
  let filteredNotebook = notebooks.filter((notebook) => notebook.id == notebookId)


  useEffect(() => {
    dispatch(fetchAllNotebooksAsync(id));
  }, [dispatch]);

  return (
    <>
      <NotebookBar id={id} />
      {filteredNotebook.map(notebook => {
        return (
          <>
            <div className="singleNotebook" key={notebook.id}>
              <div>{notebook.title}</div>
              <TextEditor />
            </div>

          </>
        )
      })}

    </>

  )
};

export default SingleNotebook;
