import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import { updateUser } from "./UserReducer";
import { useDispatch } from "react-redux";

const Update = () => {
  const { id } = useParams();
  const users = useSelector((state) => state.users);
  const existingUser = users.filter((f) => f.id == id);
  const { name, email } = existingUser[0];
  const [uname, setName] = useState(name);
  const [uemail, setEmail] = useState(email);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleUpdate = (event) => {
    event.preventDefault();
    dispatch(
      updateUser({
        id: id,
        name: uname,
        email: uemail,
      })
    );
    navigate("/");
  };

  return (
    <form onSubmit={handleUpdate}>
      <h2>Edit</h2>
      <div className="mb-3">
        <div className="mb-3">
          <label className="form-label">Name</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter Name"
            value={uname}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <label className="form-label">Email:</label>
        <input
          type="email"
          className="form-control"
          aria-describedby="emailHelp"
          placeholder="Enter Email"
          value={uemail}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <button className="btn btn-primary">Update</button>
    </form>
  );
};

export default Update;
