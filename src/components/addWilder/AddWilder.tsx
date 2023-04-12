import React, { useContext } from "react";
import axios from "axios";
import "./AddWilder.css";
import { WildersContext } from "../../contexts/WilderContext";
import { useForm, SubmitHandler } from "react-hook-form";
// import { FormEvent } from "react";
//////////// interface ////////////

interface FormValues {
  name: string;
  city: string;
}
//////////// finish ////////////

const AddWilder = () => {
  //////////// logique ////////////
  // const [name, setName] = useState("");
  // const [city, setCity] = useState("");
  const { fetchData } = useContext(WildersContext);

  // const handleSubmitAdd = async (e: FormEvent) => {
  //   e.preventDefault();
  //   await axios.post("http://localhost:3001/api/wilder", {
  //     name,
  //     city,
  //   });
  //   fetchData();
  // };
  console.log();
  const { register, handleSubmit } = useForm<FormValues>();
  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    // e.preventDefault();
    await axios.post("http://localhost:3001/api/wilder", data);
    fetchData();
  };
  //////////// finish ////////////

  return (
    <form className="form-add" onSubmit={handleSubmit(onSubmit)}>
      <div className="form-group name">
        <label>Name</label>
        <input
          className="input-add"
          type="text"
          {...register("name")}
          // value={name}
          // onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className="form-group city">
        <label>City</label>
        <input
          className="input-add"
          type="text"
          {...register("city")}
          // value={city}
          // onChange={(e) => setCity(e.target.value)}
        />
      </div>

      <button className="button-add" type="submit">
        Add wilder
      </button>
    </form>
  );
};

export default AddWilder;
