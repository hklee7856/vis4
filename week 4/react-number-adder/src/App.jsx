import Header from "./Header.jsx";
import ControlCenter from "./ControlCenter.jsx";
import Resultbar from "./Resultbar.jsx";  

export default function App() {
  return (
    <>
      <div id="header">
        <Header />
      </div>

      <div id="sidebar">
        <Resultbar />              
      </div>

      <div id="main-content">
        <h3>Control Center</h3>
        <ControlCenter />
      </div>
    </>
  );
}
