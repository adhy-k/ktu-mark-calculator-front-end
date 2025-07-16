import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Mark from './components/Mark';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Mark/>} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
