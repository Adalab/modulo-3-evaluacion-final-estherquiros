import "../styles/App.scss";

function App() {
  return (
    <div>
      <header className="header">
        <h1 className="title">Plantilla React</h1>
      </header>
      <main className="main">
        <Routes>
          <Route path="/" element={<h1>Home page</h1>} />
          <Route path="character/:id" element={<h1>Details page</h1>} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
