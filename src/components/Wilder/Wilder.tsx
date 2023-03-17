import React, { useState } from "react";
import blank_profile from "../../assets/avatar.png";
import edit from "../../assets/edit.png";
import { IWilder } from "../../interfaces/IWilder";
import DeleteWilder from "../deleteWilder/DeleteWilder";
import UpdateWilder from "../updateWilder/UpdateWilder";
import Skill from "../Skill/Skill";
import "./Wilder.css";

/////////// interface //////////////
interface WilderProps {
  wilder: IWilder;
}
/////////// finish //////////////

const Wilder = ({ wilder }: WilderProps) => {
  const [toggle, setToggle] = useState(true);

  const handleToggle = () => {
    setToggle(!toggle);
  };
  return (
    <article className="card">
      <DeleteWilder id={wilder} />
      <div className="content-img">
        <img src={blank_profile} alt="Jane Doe Profile" />
      </div>
      {toggle ? (
        <div className="container-info-updade">
          <div className="content-info">
            <h3>{wilder.name}</h3>
            <h3>{wilder.city}</h3>
          </div>
          <div className="content-update" onClick={handleToggle}>
            <img src={edit} alt={"logo edit"} />
          </div>
        </div>
      ) : (
        <UpdateWilder id={wilder} toggle={handleToggle} />
      )}
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.
      </p>
      <div className="container-add-title">
        <h4>Wild Skills</h4>
      </div>

      <ul className="skills">
        {wilder.skills.map((skill) => (
          <Skill key={skill.id} name={skill} />
        ))}
      </ul>
    </article>
  );
};

export default Wilder;
