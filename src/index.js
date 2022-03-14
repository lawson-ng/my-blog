import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import App from './App'
import 'bootstrap/dist/css/bootstrap.css'
import PostDetail from './pages/PostDetail'

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        {/* <Route path="teams" element={<Teams />}>
          <Route path=":teamId" element={<Team />} />
          <Route path="new" element={<NewTeamForm />} />
          <Route index element={<LeagueStandings />} />
        </Route> */}
      </Route>
      <Route path="post/:file" element={<PostDetail />}></Route>
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
)
