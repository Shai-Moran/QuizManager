import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NewTest from './components/NewTest/NewTest';
import NewQuestion from './components/NewQuestion/NewQuestion';
import 'semantic-ui-css/semantic.min.css';
import './App.css';
import TestManager from './components/TestManager/TestManager';
import QuestionManager from './components/QuestionManager/QuestionManager';
import TestFieldMenu from './components/TestManager/TestFieldMenu';
import UpdateTest from './components/UpdateTest/UpdateTest';
import UpdateQuestion from './components/UpdateQuestion/UpdateQuestion';
import Test from './components/Test/Test';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="new-test" element={<NewTest />} />
          <Route path="update-test" element={<UpdateTest />} />
          <Route path="new-question" element={<NewQuestion />} />
          <Route path="update-question" element={<UpdateQuestion />} />
          <Route path="tests-menu" element={<TestFieldMenu />} />
          <Route path="tests" element={<TestManager />} />
          <Route path="test-added" element={<h1>Test Added!</h1>} />
          <Route path="questions" element={<QuestionManager />} />
<<<<<<< HEAD
          <Route path="question-added" element={<h1>Question Added!</h1>} />
          <Route path="start-test" element={<Test />} />
=======
          <Route path="question-added" element={<h1>Question Added!</h1>}/>
>>>>>>> 773f41b95a5b1c2282353a0c0f151fcaf731cde0
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
