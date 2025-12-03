import { Routes, Route } from "react-router";

import "../../styles/App.scss";
import Header from "../layout/Header";
import Footer from "../layout/Footer";
import HomePage from "./HomePage";

function App() {
  return (
    <div>
      <Header />
      <main className="main">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="character/:id" element={<h1>Details page</h1>} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
