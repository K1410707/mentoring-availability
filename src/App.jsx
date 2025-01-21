import {BrowserRouter, Routes, Route} from "react-router-dom";
import Layout from "./Components/layout/Layout.jsx";
import Home from "./components/views/Home.jsx";
import Modules from "./components/views/Modules.jsx";
import PageNotFound from "./components/views/PageNotFound.jsx";
import Availability from "./components/views/Availability.jsx";
import ModuleView from "./Components/views/ModuleView.jsx";

function App() {
  const loggedInUser = "Test Mentor";
  return (
    <BrowserRouter>
      <Layout loggedInUser={loggedInUser}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/modules" element={<Modules />} />
          <Route path="/Availability" element={<Availability />} />
          <Route path="/*" element={<PageNotFound />} />
          <Route path="/timetable" element={<ModuleView />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
