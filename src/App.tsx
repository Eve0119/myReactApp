import "./App.css";
import { Greet } from "./components/Greet";
import Person from "./components/Person";
import PersonList from "./components/PersonList";
import Status from "./components/Status.tsx";
import { Heading } from "./components/Heading.tsx";
import { Oscar } from "./components/Oscar.tsx";
import { Button } from "./components/Button.tsx";
import { Input } from "./components/Input.tsx";
import { Container } from "./components/Container.tsx";
import { LoggedIn } from "./components/state/LoggedIn.tsx";

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
        <Greet name="hi" />
        <Person name={personName} />
        <PersonList names={nameList} />
      </div>
      <div className="App">
        <Status status="success" />
        <Heading>PlaceHolder Text</Heading>
        <Oscar>Oscar Goes to Leonardo</Oscar>
      </div>
      <div>
        <Button
          handleClick={(event, id) => {
            console.log("Button Clicked", event, id);
          }}
        ></Button>
        <Input value="" handleChange={(event) => console.log(event)} />
      </div>
      <div>
        <Container styles={{ border: "1px solid black", padding: "1rem" }} />
        <LoggedIn />
      </div>
    </>
  );
}

export default App;
