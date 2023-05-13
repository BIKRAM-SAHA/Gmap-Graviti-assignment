import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home";

import store from "./redux/store";
import { Provider } from "react-redux";

function App() {
  return (
    <Provider store={store}>
      <Navbar />
      <div className="app">
        <Home />
      </div>
    </Provider>
  );
}

export default App;
