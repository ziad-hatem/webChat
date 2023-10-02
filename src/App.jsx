import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import { AuthProvider, useAuth } from "./contexts/AuthContext";
import Chats from "./components/Chats";

function App() {
  return (
    <Router>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/chats" element={<Chats />} />
        </Routes>
      </AuthProvider>
    </Router>
  );
}

export default App;
