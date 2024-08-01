import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className=" h-[100vh] relative">
      <Navbar />
      <Outlet />
    </div>
  );
}

export default App;
