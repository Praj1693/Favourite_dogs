import './App.css';
import Home from './home';
import { BrowserRouter, Route, Link , Routes} from 'react-router-dom';
import Favourite from './favourite';


function App() {
  return (
    <BrowserRouter>
        <div>
          <nav >
        <div className="container-fluid">
            
            <span className="nav navbar-nav">
            <Link className="nav" to={'/'} > All Dogs List </Link>
            <Link className="nav" to={'/favorites'} >Favourite Dogs List</Link>
            </span>
           
        </div>
        </nav> 
            <Routes>
              <Route exact path='/' element={<Home />}  />
              <Route path='/favorites' element={<Favourite/>} />
            </Routes>
        </div>
      </BrowserRouter>

  );
}

export default App;
