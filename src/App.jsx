import { useEffect } from "react";
import UseContextProvider from "./contexts/UseContextProvider";
import Login from "./components/login";
import Profile from "./components/Profile";
function App() {
  

  return (
    <UseContextProvider>
      <Login/>
      <Profile/>
    </UseContextProvider>
  );
}

export default App;
