import { Routes, Route } from "react-router";

import "../styles/App.scss";
import Header from "./layout/Header";
import Footer from "./layout/Footer";

function App() {
  return (
    <div>
      <Header />
      <main className="main">
        <Routes>
          <Route path="/" element={<h1>Home page</h1>} />
          <Route path="character/:id" element={<h1>Details page</h1>} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
