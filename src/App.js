import logo from './logo.svg';
import './App.css';
import NavigationBar from './pages/shared/NavigationBar';
import { Route, Routes } from 'react-router-dom';
import DashBoard from './pages/dashBoard/DashBoard';
import GenerateLabRecipe from './pages/dashBoard/GenerateLabRecipe';

function App() {
  return (
    <div className="App">
      
      {/* <NavigationBar /> */}
      <Routes>
        <Route path="/" element={<DashBoard />} />
        <Route path="/dashboard" element={<DashBoard />} >
          <Route index element={<GenerateLabRecipe />} />
        </Route>
      </Routes>
    
    </div>
  );
}

export default App;
