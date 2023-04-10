import Oralibro from "./Oralibro";
import Form from "./From/Form";
import Landing from "./LandingPage/Landing";
import Navbar from "./LandingPage/Navbar/Navbar";
import { Route, Routes } from "react-router-dom";
import Nomatch from "./Nomatch/Nomatch";
import Signin from "./Sign/Signin";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Landing />}></Route>
        <Route path="Form" element={<Form />}></Route>
        <Route path="Sign-in" element={<Signin />}></Route>
        <Route path="*" element={<Nomatch />}></Route>
      </Routes>
    </>
  );
}

export default App;
