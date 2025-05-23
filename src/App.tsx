import "./App.css";
import { Greet } from "./components/Greet";
import Person from "./components/Person";

function App() {
  const personName = {
    first: "Eve",
    last: "Laraya",
  };
  return (
    <div className="App">
      <Greet name="hi" messageCount={20} />
      <Person name={personName} />
    </div>
  );
}

export default App;
