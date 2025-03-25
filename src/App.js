// src/App.jsx
import { BrowserRouter as Router } from 'react-router-dom';
import Main from './components/Main';

const App = () => {
  return (
    <Router> {/* Only Router in the entire app */}
      <Main />
    </Router>
  );
};

export default App;