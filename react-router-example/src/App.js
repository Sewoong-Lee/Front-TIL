import "./App.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Profile from "./pages/Profile";
import NotFound from "./pages/Notfound";
import Links from "./component/Links";
import NavLinks from "./component/NavLinks";
import Login from "./pages/Login";

function App() {
  return (
    <BrowserRouter>
      <Links />
      <NavLinks />
      <Routes>
        <Route path={"/login"} element={<Login />} />
        <Route path={"/about"} element={<About />} />
        <Route path={"/profile/:id"} element={<Profile />} />
        <Route path={"/profile"} element={<Profile />} />
        <Route path={"/"} exact element={<Home />} />
        <Route path={"*"} element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
