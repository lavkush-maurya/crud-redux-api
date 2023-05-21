import React, { useEffect, useState } from "react";
import "./index.css";
import { useDispatch, useSelector } from "react-redux";
import { editData } from "../redux/store/ slices/Apidata";
import { useNavigate, useParams } from "react-router-dom";

const Editpage = () => {
  const { isEditing } = useSelector((state) => state.apidata);
  const data = useSelector((state) => state.apidata.data);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { id } = useParams();
  const [editValueData, setEditValueData] = useState({
    id: id,
    name: "",
    email: "",
    city: "",
  });
  const handleEditData = () => {
    dispatch(editData({ id: id, data: editValueData }));
    navigate("/crud-redux-api");
  };
  const handlechange = (e, fieldName) => {
    const value = e.target.value;
    setEditValueData((state) => ({
      ...state,
      [fieldName]: value,
    }));
  };
  useEffect(() => {
    if (data[id]) {
      setEditValueData((e) => ({
        ...e,
        ...data[id],
      }));
    }
  }, [data, id]);

  return (
    <div>
      <form>
        <input
          type="text"
          name="id"
          placeholder="ID"
          value={editValueData.id}
          onChange={(e) => handlechange(e, "id")}
        />
        <br />
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={editValueData.name}
          onChange={(e) => handlechange(e, "name")}
        />
        <br />
        <input
          type="text"
          name="email"
          placeholder="Email"
          value={editValueData.email}
          onChange={(e) => handlechange(e, "email")}
        />
        <br />
        <input
          type="text"
          name="city"
          placeholder="City"
          value={editValueData.city}
          onChange={(e) => handlechange(e, "city")}
        />
        <br />
        <button type="button" onClick={handleEditData}>
          {isEditing ? "Editing....." : "Edit"}
        </button>
      </form>
    </div>
  );
};

export default Editpage;
