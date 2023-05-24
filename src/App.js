import Form from "./From/Form";
import Landing from "./LandingPage/Landing";
import Oralibro from "./Homepage/Oralibro";
import { Route, Routes } from "react-router-dom";
import { ProSidebarProvider } from "react-pro-sidebar";
import Dashboard from "./Homepage/Pages/Dashboard";
import Discover from "./Homepage/Pages/Discover";
import Nomatch from "./Nomatch/Nomatch";
import Signin from "./Sign/Signin";
import Sidebar from "./Homepage/Global/Sidebar";
import DashboardLayout from "./layouts/Dashboard";
import PayPage from "./PayPage";
import BuyPage from "./BuyPage";

function App() {
  return (
    <>
      <>
        <Routes>
          <Route path="/" element={<Landing />}></Route>
          <Route path="Form" element={<Form />}></Route>
          <Route path="Sign-in" element={<Signin />}></Route>
          <Route path="*" element={<Nomatch />}></Route>
          <Route path="oralibro" element={<Oralibro />}>
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="discover" element={<Discover />} />
          </Route>
        </Routes>
      </>
    </>
  );
}

export default App;
