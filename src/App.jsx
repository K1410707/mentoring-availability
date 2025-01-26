import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Components/layout/Layout.jsx";
import Home from "./components/views/Home.jsx";
import Sessions from "./Components/views/Mentor/MentorSessions.jsx";
import ChampionStudents from "./Components/views/Champion/ChampionStudents.jsx";
import PageNotFound from "./components/views/PageNotFound.jsx";

function App() {
  const loggedInUser = "Test Mentor";
  return (
    <BrowserRouter>
      <Layout loggedInUser={loggedInUser}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sessions" element={<Sessions />} />
          <Route path="/mentors" element={<ChampionStudents />} />
          <Route path="/*" element={<PageNotFound />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
