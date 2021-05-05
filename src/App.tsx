import "./App.scss";
import OrderTable from "./components/OrderTable";

function App() {
  return (
    <main className="app-container">
      <img src="./logo.png" className="App-logo" alt="logo" />
      <div className="app-wrapper">
        <OrderTable />
      </div>
    </main>
  );
}

export default App;
