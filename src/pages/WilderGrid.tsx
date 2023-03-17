import React, { useContext } from "react";
import Wilder from "../components/Wilder/Wilder";
import AddWilder from "../components/addWilder/AddWilder";
import { WildersContext } from "../contexts/WilderContext";

const WilderGrid = () => {
  /////////// logique //////////////
  const { wilder } = useContext(WildersContext);
  ///////// finish //////////////

  return (
    <div>
      <header>
        <div className="container">
          <h1>Wilders Book</h1>
        </div>
      </header>
      <main className="container">
        <h2>Wilders</h2>
        <AddWilder />
        <section className="card-row">
          {wilder?.map((wilder) => (
            <Wilder key={wilder.id} wilder={wilder} />
          ))}
        </section>
      </main>
      <footer>
        <div className="container">
          <p>&copy; 2022 Wild Code School</p>
        </div>
      </footer>
    </div>
  );
};

export default WilderGrid;
