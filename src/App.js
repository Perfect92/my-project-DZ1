import MainPage from './pages/mainPage/MainPage';
import AboutPage from './pages/aboutPage/AboutPage';
import './App.css';
import NavBar from './components/navBar/NavBar';
import { BrowserRouter , Routes , Route} from 'react-router-dom';
import BlogsPage from './pages/blogsPage/BlogsPage';
import LoginPage from './pages/loginPage/LoginPage';
import UsersPage from './pages/usersPage/UsersPage';

function App() {
  return (
    <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route index element={<MainPage/>}/>
        <Route path='about' element={<AboutPage/>}/> 
        <Route path='blogs' element={<BlogsPage/>}/>
        <Route path='login' element={<LoginPage/>}/>
        <Route path='users' element={<UsersPage/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
