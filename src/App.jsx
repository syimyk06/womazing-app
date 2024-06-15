import { Route, Routes } from 'react-router-dom';
import { Header } from './components/Header';
import Home from './components/Home/Home';
import { Catalog } from './components/Catalog/Catalog';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/catalog" element={<Catalog />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
