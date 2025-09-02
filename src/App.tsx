import HomePage from "./webpages/Landing";
import AddBeatPage from "./webpages/AddBeatPage";
import { Routes, Route } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import HowItWorksPage from "./webpages/HowItWorks";

function App() {
  const navigate = useNavigate();
  return (
    <div className="w-full min-h-screen flex flex-col bg-slate-950">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/add_beat" element={<AddBeatPage handleGoBack={() => navigate('/')} />} />
        <Route path="/how_it_works" element={<HowItWorksPage handleGoBack={() => navigate("/")} />} />
      </Routes>
    </div>
  );
}

export default App;
