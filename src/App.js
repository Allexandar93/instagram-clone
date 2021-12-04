import "./App.scss";
import Navbar from "./navbar/Navbar";
import Cards from "./cards/Cards";
import Sidebar from "./sidebar/Sidebar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <main>
        <div className="container">
          <Cards />
          <Sidebar />
        </div>
      </main>
    </div>
  );
}

export default App;
