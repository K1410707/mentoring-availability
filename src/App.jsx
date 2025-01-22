import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Components/layout/Layout.jsx";
import Home from "./components/views/Home.jsx";
import Sessions from "./Components/views/Mentor/MentorSessions.jsx";
import PageNotFound from "./components/views/PageNotFound.jsx";
import Students from "./Components/views/Champion/ChampionStudents.jsx";

function App() {
  const loggedInUser = "Test Mentor";
  return (
    <BrowserRouter>
      <Layout loggedInUser={loggedInUser}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sessions" element={<Sessions />} />
          <Route path="/students" element={<Students />} />
          <Route path="/*" element={<PageNotFound />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
