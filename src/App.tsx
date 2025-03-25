import "@mantine/core/styles.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Login } from "./pages/Login";
import { Screen_1 } from "./pages/Screen_1";
import { Screen_2 } from "./pages/Screen_2";
import { Screen_3 } from "./pages/Screen_3";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/Screen1" element={<Screen_1 />} />
        <Route path="/Screen2" element={<Screen_2 />} />
        <Route path="/Screen3" element={<Screen_3 />} />
      </Routes>
    </BrowserRouter>
  );
}
