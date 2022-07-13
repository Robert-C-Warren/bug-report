import { ReactDOM } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css';
import Bugs from './components/Bugs';
import Signup from './components/Signup';
import Login from './components/Login';
import ViewBugs from './components/ViewBugs';
import { Container } from '@mui/system';
import Layout from './components/Layout';

function App() {
  return (
      <Router>
        <Layout>
          <Routes>
            <Route path='/signup' element={<Signup />}/>
            <Route path='/login' element={<Login />}/>
            <Route path='/bug' element={<Bugs />}/>
            <Route path='/' element={<ViewBugs />}/>
          </Routes>
        </Layout>
      </Router>
  );
}

export default App;
