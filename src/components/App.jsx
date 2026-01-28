import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { AuthProvider } from "../contexts/AuthProvider";
import "../styles/App.css";
import Layout from "./Layout";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Quiz from "./pages/Quiz";
import Result from "./pages/Result";
import Signup from "./pages/Signup";
import RequireAuth from "./RequireAuth";

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<AuthProvider />}>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
            <Route element={<RequireAuth />}>
              <Route path="/quiz" element={<Quiz />} />
              <Route path="/result" element={<Result />} />
            </Route>
          </Route>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
