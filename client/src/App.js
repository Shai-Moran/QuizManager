import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NewTest from './components/NewTest/NewTest';
import NewQuestion from './components/NewQuestion/NewQuestion';
import 'semantic-ui-css/semantic.min.css'
import './App.css';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="new-test" element={<NewTest />} />
          <Route path="new-question" element={<NewQuestion/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;