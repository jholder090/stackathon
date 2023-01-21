import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { fetchAllNotebooksAsync, selectAllNotebooks } from "../redux/notebooksSlice";

const AllNotebooks = ({ id }) => {
  const dispatch = useDispatch();
  let notebooks = useSelector(selectAllNotebooks);

  useEffect(() => {
    dispatch(fetchAllNotebooksAsync(id));
  }, [dispatch]);

  return (

    <div className="notebooksContainer">
      {notebooks.map((notebook) => {
        return (
          <div className="notebookContainer" >
            <Link to={`/notebook/${notebook.id}`} key={notebook.id}>
              <div className="notebook">
                <h2 className="notebookTitle">{notebook.title}</h2>
              </div>
            </Link>
          </div>

        )
      })}
    </div>

  )
};

export default AllNotebooks;
