import React, { useContext } from "react";
import axios from "axios";
import { IWilder } from "../../interfaces/IWilder";
import { WildersContext } from "../../contexts/WilderContext";
/////////// interface //////////////
interface WilderDeleteProps {
  id: IWilder;
}
/////////// finish //////////////

const DeleteWilder = ({ id }: WilderDeleteProps) => {
  const { fetchData } = useContext(WildersContext);
  /////////// logique //////////////
  const handleDelete = () => {
    axios.delete(`http://localhost:3001/api/wilder/users/delete/${id.id}`);
    fetchData();
  };
  /////////// finish //////////////

  return (
    <div className="delete-wilder" onClick={handleDelete}>
      X
    </div>
  );
};

export default DeleteWilder;
