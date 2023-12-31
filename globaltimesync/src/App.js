import './App.css';
import Home from './componenets/Home';
import { Route, Routes } from 'react-router-dom';
import AdminLogin from './componenets/AdminLogin';
import SystemAdminPage from './componenets/SystemAdminPage';
import { CityProvider } from './componenets/contextapi/CityProvider';
import CityDashboard from './componenets/n/CItyDashboard';
import CitySearch from './componenets/CitySearch'

function App() {
  
  return (
    
    <div className="App">
      <CityProvider>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="admin-login" element={<AdminLogin/>}/>
        <Route path="system-admin" element={<SystemAdminPage/>}/>
        <Route path="/admin" element={<CityDashboard/>}/>
        <Route path= '/search' element= {<CitySearch/>}/>

      </Routes>
      </CityProvider>
    </div>
  );
}

export default App;