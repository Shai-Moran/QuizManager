import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NewTest from './components/NewTest/NewTest';
import NewQuestion from './components/NewQuestion/NewQuestion';
import 'semantic-ui-css/semantic.min.css';
import './App.css';
import { Container, Header, Menu } from 'semantic-ui-react';
import TestManager from './components/TestManager/TestManager';
import QuestionManager from './components/QuestionManager/QuestionManager';
import TestFieldMenu from './components/TestManager/TestFieldMenu';
import UpdateTest from './components/UpdateTest/UpdateTest';
import UpdateQuestion from './components/UpdateQuestion/UpdateQuestion';
import Test from './components/Test/Test';
import { useState } from 'react';

function App() {
  const [activeItem, setActiveItem] = useState('');
  return (
    <div className="App">
      <Menu color="blue" inverted widths={3}>
        <Menu.Item>
          <Header as="h1">QuizManager</Header>
        </Menu.Item>
        <Menu.Item
          name="Tests"
          active={activeItem === 'Tests'}
          onClick={() => {
            window.location.href = 'http://localhost:3000/tests-menu';
            setActiveItem('Tests');
          }}
        />
        <Menu.Item
          name="Questions"
          active={activeItem === 'Questions'}
          onClick={() => {
            window.location.href = 'http://localhost:3000/questions';
            setActiveItem('Questions');
          }}
        />
      </Menu>
      <BrowserRouter>
        <Routes>
          <Route
            path=""
            element={
              <Container textAlign="left">
                <Header as="h1" color="blue">
                  Welcome to the QuizManager Website!
                </Header>
                <Header as="h2">
                  Please feel free to create you very own test and quesions
                </Header>
              </Container>
            }
          />
          <Route path="new-test" element={<NewTest />} />
          <Route path="update-test" element={<UpdateTest />} />
          <Route path="new-question" element={<NewQuestion />} />
          <Route path="update-question" element={<UpdateQuestion />} />
          <Route path="tests-menu" element={<TestFieldMenu />} />
          <Route path="tests" element={<TestManager />} />
          <Route path="questions" element={<QuestionManager />} />
          <Route path="question-added" element={<h1>Question Added!</h1>} />
          <Route path="start-test" element={<Test />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
