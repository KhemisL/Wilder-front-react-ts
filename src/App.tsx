import "./App.css";
import { WildersProvider } from "./contexts/WilderContext";
import WilderGrid from "./pages/WilderGrid";
function App() {
  return (
    <div className="App">
      <WildersProvider>
        <WilderGrid />
      </WildersProvider>
    </div>
  );
}

export default App;
