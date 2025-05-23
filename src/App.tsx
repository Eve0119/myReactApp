import "./App.css";
import { Greet } from "./components/Greet";
import Person from "./components/Person";
import PersonList from "./components/PersonList";
import Status from "./components/Status.tsx";

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
    <>
      <div className="App">
        <Greet name="hi" messageCount={20} />
        <Person name={personName} />
        <PersonList names={nameList} />
      </div>
      <div className="App">
        <Status status="success" />
      </div>
    </>
  );
}

export default App;
