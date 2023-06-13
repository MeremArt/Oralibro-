import Form from "./From/Form";
import Landing from "./LandingPage/Landing";
import Oralibro from "./Homepage/Oralibro";
import { Route, Routes } from "react-router-dom";
import { AppProvider } from "./context";
import Dashboard from "./Homepage/Pages/Dashboard";
import Discover from "./Homepage/Pages/Discover";
import Nomatch from "./Nomatch/Nomatch";
import Signin from "./Sign/Signin";
import Booklist from "./Homepage/Pages/Discover components/Booklist";
import BookDetails from "./Homepage/Pages/Discover components/BookDetails";

function App() {
  return (
    <>
      <AppProvider>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/form" element={<Form />} />
          <Route path="/sign-in" element={<Signin />} />
          <Route path="*" element={<Nomatch />} />
          <Route path="/oralibro/*" element={<Oralibro />}>
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="discover" element={<Discover />}>
              <Route path="book" element={<Booklist />} />
              <Route path="book/:id" element={<BookDetails />} />
            </Route>
          </Route>
        </Routes>
      </AppProvider>
    </>
  );
}

export default App;
