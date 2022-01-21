import { Route, Routes } from 'react-router-dom'

import './App.css';
import React from 'react';
import HeaderBar from './components/HeaderBar/HeaderBar.js';
import MenuBar from './components/MenuBar/MenuBar';
import ChemicalPageContent from './components/pages/ChemicalPageContent';
import ReportPageContent from './components/pages/ReportPageContent';


function App() {
  // const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <div className="App">
        <HeaderBar></HeaderBar>
        <MenuBar></MenuBar>
        <Routes>
          <Route exact path={"/chemical" || "/"}  element={<ChemicalPageContent/>}></Route>
          <Route exact path="/report" element={<ReportPageContent/>}></Route>
        </Routes>

        {/* <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p> */}
        {/* <TextField id="outlined-basic" label="this is a test" variant="outlined" /> */}
        {/* <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
    </div>
  );
}

export default App;
