import { Route, Routes } from 'react-router-dom';
import './App.css';
import Layout from './Components/Layout/Layout';
import HomePage from './Pages/HomePage';
import WorkPage from './Pages/WorkPage';

function App() {
  return (
   <>
      <Layout>
       <Routes>
        <Route path='/' element={ <HomePage /> } />
        <Route path='/work' element={ <WorkPage/> } />
       </Routes>
      </Layout>
   </>
  );
}

export default App;
