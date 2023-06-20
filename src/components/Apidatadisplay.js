import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { deleteData, fetchdata } from "../redux/store/ slices/Apidata";
import { Link } from "react-router-dom";

const ApidataDisplay = () => {
  const { isFetching, isDeleting, data } = useSelector(
    (state) => state.apidata
  ); // console.log("dataaaaaa", data && Object.values(data).map((data, id) => data));
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchdata());
  }, [dispatch]);

  const fetchData = () => {
    dispatch(fetchdata());
  };
  const handleDelete = (id) => {
    dispatch(deleteData(id));
  };

  return (
    <div>
      <div className="apidatas">
        <button onClick={fetchData}>
          {isFetching ? "loading..." : "GET DATA"}
        </button>
      </div>
      <div style={{ textAlign: "-webkit-center" }}>
        <table>
          <thead>
            <tr>
              <th>id</th>
              <th>name</th>
              <th>email</th>
              <th>city</th>
            </tr>
          </thead>
          <tbody>
            {data &&
              Object.keys(data).map((id) => (
                <tr key={id}>
                  <td>{data[id].id}</td>
                  <td>{data[id].name}</td>
                  <td>{data[id].email}</td>
                  <td>{data[id].city}</td>
                  <td>
                    <button onClick={() => handleDelete(id)}>
                      {isDeleting ? "Deleting..." : "Delete"}
                    </button>

                    <Link to={`/crud-redux-api/edit/${id}`}>Edit</Link>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ApidataDisplay;
