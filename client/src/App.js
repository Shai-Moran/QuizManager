import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NewTest from './components/NewTest/NewTest';
<<<<<<< HEAD
import NewQuestion from './components/NewQuestion/NewQuestion';
=======

import 'semantic-ui-css/semantic.min.css'
>>>>>>> 703c7eab19c1aa6d5d144bde41a76a70c606b0d4
import './App.css';


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