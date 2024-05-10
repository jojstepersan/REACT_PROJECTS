import logo from './logo.svg';
import './App.css';
import {HashRouter, Routes, Route} from 'react-router-dom'
import Menu from './Menu';
import HomePage from './HomePage';
import BlogPage from './BlogPage';
import ProfilePage from './ProfilePage';
function App() {
  return (
   <>
    <HashRouter>
      <Menu/>
      <Routes>
        <Route path='/#/' element={<HomePage/>}/>
        <Route path='/blog/' element={<BlogPage/>}/>
        <Route path='/profile/' element={<ProfilePage/>}/>
        <Route path='*' element={<p>not found  404</p>}/>
      </Routes>
    </HashRouter>
   </>
  );
}

export default App;