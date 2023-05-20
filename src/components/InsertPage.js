import React, { useState } from "react";
import "./index.css";
import { useDispatch, useSelector } from "react-redux";
import { insertapi } from "../redux/store/ slices/Apidata";

const Insertpage = () => {
  const { isInserting } = useSelector((state) => state.apidata);
  const [data, setData] = useState({
    id: "",
    name: "",
    email: "",
    city: "",
  });
  const handlechange = (e, fieldName) => {
    const value = e.target.value;
    setData((state) => ({
      ...state,
      [fieldName]: value,
    }));
  };

  const dispatch = useDispatch();

  const handleInsertData = () => {
    dispatch(insertapi(data));
    setData({
      id: "",
      name: "",
      email: "",
      city: "",
    });
  };

  return (
    <div>
      <form>
        <input
          type="text"
          name="id"
          placeholder="ID"
          value={data.id}
          onChange={(e) => handlechange(e, "id")}
        />
        <br />
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={data.name}
          onChange={(e) => handlechange(e, "name")}
        />
        <br />
        <input
          type="text"
          name="email"
          placeholder="Email"
          value={data.email}
          onChange={(e) => handlechange(e, "email")}
        />
        <br />
        <input
          type="text"
          name="city"
          placeholder="City"
          value={data.city}
          onChange={(e) => handlechange(e, "city")}
        />
        <br />
        <button type="button" onClick={handleInsertData}>
          {isInserting ? "Inserting....." : "Insert"}
        </button>
      </form>
    </div>
  );
};

export default Insertpage;
