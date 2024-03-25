import "./App.css";
import KeyGrid from "./components/KeyGrid";

function App() {
  const styleMain = {
    background: "#b3b3b3",
    width: "50vw",
    height: "22vw",
    outline: "5px solid orange",
    margin: "12% auto",
  };

  return (
    <div className="container-fluid" style={styleMain}>
      <KeyGrid />
    </div>
  );
}

export default App;
