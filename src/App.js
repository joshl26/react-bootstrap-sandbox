import logo from "./logo.svg";
import "./App.css";

import ToastNotification from "./components/ToastNotification";
import NavBarBasic from "./components/NavBarBasic";
import ResponsiveNavBar from "./components/ResponsiveNavBar";

function App() {
  return (
    <div className="App">
      <NavBarBasic />
      <ResponsiveNavBar />

      <ToastNotification />
      <div className="spacer" />
    </div>
  );
}

export default App;
