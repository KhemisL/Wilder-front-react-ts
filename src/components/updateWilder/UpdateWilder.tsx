import React, { FormEvent, useContext, useState } from "react";
import axios from "axios";
import { IWilder } from "../../interfaces/IWilder";
import "./UpdateWilder.css";
import { WildersContext } from "../../contexts/WilderContext";
interface UpdateWilderProps {
  id: IWilder;
  toggle: () => void;
}
const UpdateWilder = ({ id, toggle }: UpdateWilderProps) => {
  const [name, setName] = useState("");
  const [city, setCity] = useState("");
  const { fetchData } = useContext(WildersContext);
  const handleSubmitUpdate = async (e: FormEvent) => {
    e.preventDefault();
    await axios.put(`http://localhost:3001/api/wilder/users/update/${id.id}`, {
      name,
      city,
    });
    fetchData();
    toggle();
  };

  return (
    <form className="form-update" onSubmit={handleSubmitUpdate}>
      <div className="container-form-group">
        <div className="form-group name">
          <input
            className="input-update"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            name="name"
            placeholder="Name"
          />
        </div>
        <div className="form-group city">
          <input
            className="input-update"
            type="text"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            placeholder="City"
          />
        </div>
      </div>

      <button className="button-update" type="submit">
        Update wilder
      </button>
    </form>
  );
};

export default UpdateWilder;
