import './App.css';
import RecipeDetail from './components/RecipeDetail';
import Recipelist from './components/Recipelist';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Recipelist />} />
          <Route path='/recipe/:id' element={<RecipeDetail />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
