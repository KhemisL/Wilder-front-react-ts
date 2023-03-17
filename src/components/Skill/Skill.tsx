import React from "react";
import { ISkill } from "../../interfaces/IWilder";
interface WilderSkillProps {
  name: ISkill;
}
const Skill = ({ name }: WilderSkillProps) => {
  return (
    <>
      <li>{name.name}</li>
    </>
  );
};

export default Skill;
