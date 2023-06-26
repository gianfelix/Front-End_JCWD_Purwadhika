import "./App.css";
import { Route, Routes } from "react-router-dom";
import { Landing } from "./pages/Landing";
import { Write } from "./pages/Write";
import { Register } from "./pages/Register";
import { Login} from "./pages/Login";
import { AboutUs } from "./pages/AboutUs";
import { Profile } from "./pages/Profile";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/footer/Footer";
import { Verify } from "./pages/Verify";
import { ResetPassword } from "./pages/ResetPassword";
import { AuthKeepLogin } from "./components/AuthKeepLogin";

function App() {
  return (
    <div className="App">
      <AuthKeepLogin>

      <Navbar />
      <Routes>
        <Route path="/" element={<Landing />}></Route>
        <Route path="/write" element={<Write />}></Route>
        <Route path="/aboutus" element={<AboutUs />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/profile" element={<Profile />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/verification/:token" element={<Verify />}></Route>
      <Route path="/reset-password/:token" element={<ResetPassword/>}></Route>
      </Routes>
      <Footer/>
      </AuthKeepLogin>
    </div>
  );
}

export default App;
