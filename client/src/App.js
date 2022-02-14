import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NewTest from './components/NewTest/NewTest';

import './App.css';
import NewQuestion from './components/NewQuestion/NewQuestion';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="new-test" element={<NewTest />} />
        </Routes>
      </BrowserRouter>
      <NewQuestion></NewQuestion>
    </div>
  );
}

export default App;