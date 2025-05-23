import "./App.css";
import { Greet } from "./components/Greet";
import Person from "./components/Person";
import PersonList from "./components/PersonList";

function App() {
  const personName = {
    first: "Eve",
    last: "Laraya",
  };

  const nameList = [
    {
      first: "Eve",
      last: "Laraya",
    },
    {
      first: "Cody",
      last: "Metcalfe",
    },
    {
      first: "Kayla",
      last: "Foster",
    },
  ];
  return (
    <div className="App">
      <Greet name="hi" messageCount={20} />
      <Person name={personName} />
      <PersonList names={nameList} />
    </div>
  );
}

export default App;
