import './App.css';

const url = (path) => {
  return process.env.NODE_ENV === 'development'
  ? `http://localhost:5000${path}`
  : path
};

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>Application Rendering</p>
      </header>
    </div>
  );
}

export default App;
