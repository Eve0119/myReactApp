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
//import { User } from "./components/state/User.tsx";
import { Counter } from "./components/state/Counter.tsx";
import { ThemeContextProvider } from "./components/context/ThemeContext.tsx";
import { Box } from "./components/context/Box.tsx";
import { User } from "./components/context/User.tsx";
import { UserContextProvider } from "./components/context/UserContext.tsx";
import { Private } from "./components/auth/Private.tsx";
import { Profile } from "./components/auth/Profile.tsx";

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
      <div>
        <User></User>
      </div>
      <div>
        <Counter></Counter>
      </div>
      <div>
        <ThemeContextProvider>
          <Box />
        </ThemeContextProvider>
      </div>
      <div>
        <UserContextProvider>
          <User></User>
        </UserContextProvider>
      </div>
      <Private isLoggedIn={true} component={Profile} />
    </>
  );
}

export default App;
