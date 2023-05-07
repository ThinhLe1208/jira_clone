import React from 'react';
import { Routes, Route, unstable_HistoryRouter as HistoryRouter, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { history } from 'util/history';
import HomeTemplate from 'templates/HomeTemplate';
import UserSigninTemplate from 'templates/UserSigninTemplate';
import ProjectTemplate from 'templates/ProjectTemplate';
import Home from 'pages/Home/Home';
import ProjectBoard from 'pages/ProjectBoard';
import ProjectCreate from 'pages/ProjectCreate';
import ProjectManagement from 'pages/ProjectManagement';
import Offcanvas from 'components/Offcanvas';
import Loading from 'components/Loading';
import Signin from 'pages/Singin';

function App() {
  const { isLoading } = useSelector(state => state.uiControlReducer);

  return (
    <div className='app'>

      <Offcanvas />
      {isLoading && <Loading />}

      {/* Use historyRouter to redirect in redux-saga */}
      <HistoryRouter history={history}>
        {/* <BrowserRouter> */}
        <Routes>

          <Route path='' element={<HomeTemplate />} >
            <Route index element={<Home />} />
            <Route path='home' element={<Home />} />
            <Route path='*' element={<Navigate to='' />} />
          </Route>

          <Route path='signin' element={<UserSigninTemplate />} >
            <Route index element={<Signin />} />
          </Route>

          <Route path='project' element={<ProjectTemplate />}>
            <Route index element={<ProjectBoard />} />
            <Route path='board/:projectId' element={<ProjectBoard />} />
            <Route path='create' element={<ProjectCreate />} />
            <Route path='management' element={<ProjectManagement />} />
            <Route path='*' element={<Navigate to='board' />} />
          </Route>

        </Routes>
        {/* </BrowserRouter> */}
      </HistoryRouter >
    </div>
  );
}

export default App;
