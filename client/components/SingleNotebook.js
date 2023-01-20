import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchAllNotebooksAsync, selectAllNotebooks } from "../redux/notebooksSlice";

const SingleNotebook = ({id}) => {
  const dispatch = useDispatch();
  const {notebookId} = useParams();
  let notebooks = useSelector(selectAllNotebooks);
  let filteredNotebook = notebooks.filter((notebook) => notebook.id == notebookId)

  useEffect(() => {
    dispatch(fetchAllNotebooksAsync(id));
  }, [dispatch]);

  return (
    <>
    {filteredNotebook.map(notebook => {
      return (
        <div key={notebook.id}>{notebook.title}</div>
      )
    })}

    </>

  )
};

export default SingleNotebook;
