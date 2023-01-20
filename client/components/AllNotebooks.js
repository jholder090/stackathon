import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { fetchAllNotebooksAsync, selectAllNotebooks } from "../redux/notebooksSlice";

const AllNotebooks = ({ id }) => {
  const dispatch = useDispatch();
  let notebooks = useSelector(selectAllNotebooks);
  console.log("NOTEBOOKS", notebooks)

  useEffect(() => {
    dispatch(fetchAllNotebooksAsync(id));
  }, [dispatch]);

  return (
    <>
      {notebooks.map((notebook) => {
        return (
          <Link to={`/notebook/${notebook.id}`} key={notebook.id}>
            <div className="notebook" >
              <div>{notebook.title}</div>
            </div>
          </Link>

        )
      })}

    </>

  )
};

export default AllNotebooks;
