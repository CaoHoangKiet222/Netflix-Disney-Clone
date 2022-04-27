import {BrowserRouter as Router, Routes as Switch, Route} from 'react-router-dom';

import './App.css';
import Login from './components/Login/Login';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Detail from './components/Home/Detail';

function App() {
   return (
      <div className="App">
         <Router>
            <Header />
            <Switch>
               <Route path='/' element={<Login />} />
               <Route path='/home' element={<Home />} />
               <Route path='/detail/:id' element={<Detail />} />
            </Switch>
         </Router>
      </div>
   );
}

export default App;
