import { BrowserRouter, Routes, Route } from "react-router-dom";
import './styles/globals.css'
import LoginPage from "./pages/LoginPage";
import HomePage from "./pages/HomePage";
import { Toaster } from "react-hot-toast";

function App() {

  return (
    <BrowserRouter>
     <Toaster />
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/home" element={<HomePage />} />
      </Routes>
      <link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet"></link>
    </BrowserRouter>
  )
}

export default App
