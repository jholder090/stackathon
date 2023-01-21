import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchAllNotebooksAsync, selectAllNotebooks } from "../redux/notebooksSlice";

const NotebookBar = ({id}) => {
  const dispatch = useDispatch();
  const {notebookId} = useParams();
  let notebooks = useSelector(selectAllNotebooks);
  console.log("NOTEBOOKS", notebooks)
  let filteredNotebook = notebooks.filter((notebook) => notebook.id == notebookId)
  console.log("FILTERED NOTEBOOK", filteredNotebook)

  useEffect(() => {
    dispatch(fetchAllNotebooksAsync(id));
  }, [dispatch]);

  return (
    <>
    <div>Notebook bar!</div>

    </>

  )
};

export default NotebookBar;
