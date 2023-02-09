import HomeBoard from "./containers/HomeBoard";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NewTabContext, { NewTabProvider } from "./context/NewTabContext";

function App() {
  return (
    <NewTabProvider>
      <Router>
        <div id="content">
          <Routes>
            <Route path="/" exact element={<HomeBoard />} />
          </Routes>
        </div>
      </Router>
    </NewTabProvider>
  );
}

export default App;
