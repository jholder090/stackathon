import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllNotebooksAsync, selectAllNotebooks } from "../redux/allNotebooksSlice";

const AllNotebooks = ({id}) => {
  const dispatch = useDispatch();
  let notebooks = useSelector(selectAllNotebooks);
  console.log("ALLNBS NOTEBOOKS", notebooks)

  useEffect(() => {
    dispatch(fetchAllNotebooksAsync(id));
  }, [dispatch]);

  return (
    <>
    {notebooks.map((notebook) => {
      return (
        <div key={notebook.id}>
        <div>{notebook.id}</div>
        <div>{notebook.title}</div>
        <div>{notebook.userId}</div>
        <div>{notebook.notes[0].text}</div>
        </div>
      )
    })}

    </>

  )
};

export default AllNotebooks;
