import { Routes, Route, Navigate } from "react-router-dom";

import ProtectedRoute from "./components/protected-route.component";
import Login from "./pages/login.page";
import Home from "./pages/home.page";

import "./App.css";

function App() {
  return (
    <>
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/' element={<ProtectedRoute componentToPassDown={<Home />} />} />
        <Route path='*' element={<Navigate to='/' />} />
      </Routes>
    </>
  );
}

export default App;
