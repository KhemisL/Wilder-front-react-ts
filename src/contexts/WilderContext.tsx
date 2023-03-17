import { createContext, useState, useEffect } from "react";
import axios from "axios";
import { IWilder } from "../interfaces/IWilder";

///////////// interface ////////////////
interface IWilderContext {
  wilder: IWilder[];
  fetchData: () => void | Promise<void>;
}

interface WilderproviderProps {
  children?: React.ReactNode;
}
///////////// finish ////////////////

///////////// createContext ////////////////
export const WildersContext = createContext<IWilderContext>({
  wilder: [],
  fetchData: () => {},
});
///////////// finish ////////////////

///////////// WilderContext.Provider ////////////////
export const WildersProvider = ({ children }: WilderproviderProps) => {
  const [wilder, setWilder] = useState<IWilder[]>([]);

  const fetchData = async () => {
    const wilders = await axios.get("http://localhost:3001/api/wilder/users");
    setWilder(wilders.data);
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <WildersContext.Provider value={{ wilder, fetchData }}>
      {children}
    </WildersContext.Provider>
  );
};
///////////// finish ////////////////
