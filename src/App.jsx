import { Route, Routes } from 'react-router-dom';
import './App.css';
import Layout from './Components/Layout/Layout';
import HomePage from './Pages/HomePage';
import WorkPage from './Pages/WorkPage';
import FeaturePage from './Pages/FeaturePage';
import LoginPage from './Pages/LoginPage';
import RegisterPage from './Pages/RegisterPage';

function App() {
  return (
   <>
      <Layout>
       <Routes>
        <Route path='/' element={ <HomePage /> } />
        <Route path='/workpage' element={ <WorkPage/> } />
        <Route path='/featurepage' element={ <FeaturePage/> } />
        <Route path='/loginpage' element={ <LoginPage/> } />
        <Route path='/registerpage' element={ <RegisterPage/> } />
       </Routes>
      </Layout>
   </>
  );
}

export default App;
