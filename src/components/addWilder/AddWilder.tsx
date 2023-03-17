import React, { FormEvent, useContext, useState } from "react";
import axios from "axios";
import "./AddWilder.css";
import { WildersContext } from "../../contexts/WilderContext";
//////////// interface ////////////

//////////// finish ////////////

const AddWilder = () => {
  //////////// logique ////////////
  const [name, setName] = useState("");
  const [city, setCity] = useState("");
  const { fetchData } = useContext(WildersContext);
  const handleSubmitAdd = async (e: FormEvent) => {
    e.preventDefault();
    await axios.post("http://localhost:3001/api/wilder", {
      name,
      city,
    });
    fetchData();
  };
  console.log();

  //////////// finish ////////////

  return (
    <form className="form-add" onSubmit={handleSubmitAdd}>
      <div className="form-group name">
        <label>Name</label>
        <input
          className="input-add"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className="form-group city">
        <label>City</label>
        <input
          className="input-add"
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
      </div>

      <button className="button-add" type="submit">
        Add wilder
      </button>
    </form>
  );
};

export default AddWilder;
