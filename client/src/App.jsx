import Adduser from "./components/Adduser";
import Navbar from "./components/Navbar";
import AllUsers from "./components/AllUsers";
import Edituser from "./components/Edituser";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Adduser />} />
        <Route path="/users" element={<AllUsers />} />
        <Route path="/update/:id" element={<Edituser />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
