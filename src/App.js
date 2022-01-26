import { Route, Routes } from 'react-router-dom'

import './App.css';
import React, { useState } from 'react';
import HeaderBar from './components/HeaderBar/HeaderBar.js';
import MenuBar from './components/MenuBar/MenuBar';
import ChemicalPageContent from './components/pages/ChemicalPageContent';
import ReportPageContent from './components/pages/ReportPageContent';
import LoginPageContent from './components/login/Login';
import COGNITO_CONFIG from './configs/configs.js'
import { ReportData, OrchardList, VarietyList} from './data/TestData';
import fetchChemical, { fetchAccessToken, fetchOrchards, fetchReportData, fetchVarieties } from './methods/ApiFetch';

function App() {
  let [isLoggedIn, setIsLoggedIn] = useState(false);
  let dataContent= [];
  fetchChemical(dataContent)
  const Pagination = {
    defaultPageSize:12,
    defaultCurrent:1,
    pageSizeOption: [5,10,15],
    responsive: true,
  }
  let authorizationHeaderString = ''
  function onLoadHandler(data) {
    setIsLoggedIn(data)
    let str = window.location.href; 
    if (str.includes('callback')) {
      str = str.split('=');
      COGNITO_CONFIG.AUTHORIZATION_CODE = str[1];
      authorizationHeaderString = 'Basic '+ window.btoa(COGNITO_CONFIG.client_Id + ':' + COGNITO_CONFIG.client_secret)
    }
  }
  fetchAccessToken(authorizationHeaderString);
  fetchReportData();
  fetchOrchards();
  fetchVarieties();
  
 
  return (
    <div className="App">
        <HeaderBar></HeaderBar>
        <MenuBar></MenuBar>
        <Routes>
          <Route exact path={"/chemical" || "/"}  element={<ChemicalPageContent 
          pagination={Pagination} dataSource={dataContent}/>}></Route>
          <Route exact path="/report" element={<ReportPageContent data={ReportData} VarietyList={VarietyList} OrchardList={OrchardList} isLoggedIn={isLoggedIn}/>}></Route>
          <Route exact path="/" element={<LoginPageContent onLoadApp={onLoadHandler} isLoggedIn={isLoggedIn} content="welcome, this is home"/>}> </Route>
          <Route exact path="/signout" element={<LoginPageContent onLoadApp={onLoadHandler} isLoggedIn={false} content="You are logged out !"/>}> </Route>
          <Route exact path="/callback" element={<LoginPageContent onLoadApp={onLoadHandler} isLoggedIn={true} content="You are callbacked"/>}> </Route>
        </Routes>

    </div>
  );
}

export default App;
