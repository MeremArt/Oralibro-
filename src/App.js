import Form from "./From/Form";
import Landing from "./LandingPage/Landing";
import Oralibro from "./Homepage/Oralibro";
import { Route, Routes } from "react-router-dom";
import { ProSidebarProvider } from "react-pro-sidebar";

import Nomatch from "./Nomatch/Nomatch";
import Signin from "./Sign/Signin";
function App() {
  return (
    <>
      <>
        <Routes>
          <Route path="/" element={<Landing />}></Route>
          <Route path="Form" element={<Form />}></Route>
          <Route path="Sign-in" element={<Signin />}></Route>
          <Route path="*" element={<Nomatch />}></Route>
          <Route path="Oralibro" element={<Oralibro />}></Route>
        </Routes>
      </>
    </>
  );
}

export default App;
